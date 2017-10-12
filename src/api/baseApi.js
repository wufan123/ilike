

import signUtil from '../utils/signUtil'
// let base_url = 'https://premapi.zmaxfilm.com/Api_35/';  //服务器地址
let base_url = 'https://m.zmaxfilm.com/Api_35/';  //服务器地址
var token = '26b89ca24914bced1814aa4be216fd63';
let headers = {

}
let TIMEOUT = 10000


async function getToken(method, url, requestParams) {
    let params = {
        appAccount: 'zmaxfilm',
        appPasswd: 'adflkjlsda',
        appVersion: '1.0.0',
        deviceNumber: '',
        deviceType: 'weixin - xcx',
        tokenId: token
    }
    var res = await request('GET', 'service/getToken', params)
    if (res && res.data && res.data.tokenId) {
        token = res.data.tokenId
        if (method && url)
            res = await request(method, url, requestParams, true)
    }
    return res
}
function getSign(params, tokenId) {
    if (tokenId)
        params.tokenId = tokenId
    return signUtil.getSign(params)
}
function request(method, url, params, tryAgain) {
    var fetchPromise, abortPromise, formData, requestUrl
    if (!params) {
        params = {}
    }
    requestUrl = base_url + url
    if (method == 'GET') {
        params.tokenId = token
        params.sign = getSign(params)
        if (params) {
            let paramsArray = [];
            //encodeURIComponent  
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (requestUrl.search(/\?/) === -1) {
                requestUrl += '?' + paramsArray.join('&')
            } else {
                requestUrl += '&' + paramsArray.join('&')
            }
        }
    } else {
        requestUrl += '?tokenId=' + token + '&sign=' + getSign(params, token)
        delete params.tokenId
        if (params) {
            formData = new FormData();
            Object.keys(params).forEach(key=>{
                formData.append(key,params[key])
            })
        }



    }
    console.log("params=============", params)
    console.log("formData=============", formData)
    console.log("requestUrl=============", requestUrl)
    fetchPromise = new Promise(function (resolve, reject) {
        fetch(requestUrl, { method: method, headers: headers, body: formData })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({ status: response.status })
                }
            })
            .then((responseJson) => {
                if (!tryAgain && responseJson && responseJson.status == '10001') {

                    return getToken(method, url, params)
                }
                return responseJson;
            })
            .then(responseJson => {
                console.log("responseJson ==========", responseJson)
                resolve(responseJson);
            })
            .catch((err) => {
                reject({ status: -1, msg: err });
            })
    })
    //这是一个可以被reject的promise
    abortPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('timeout');
        }, TIMEOUT);
    });
    return Promise.race([fetchPromise, abortPromise])
}

/** 
 * 基于 fetch 封装的 GET请求 
 * @param url 
 * @param params {} 
 * @param headers 
 * @returns {Promise} 
 */
function getRequest(url, params) {
    return request('GET', url, params)
}

/** 
 * 基于 fetch 封装的 POST请求  FormData 表单数据 
 * @param url 
 * @param params   
 * @param headers 
 * @returns {Promise} 
 */
function postRequest(url, params) {
    return request('POST', url, params)
}



module.exports = {
    get: getRequest,
    post: postRequest
};