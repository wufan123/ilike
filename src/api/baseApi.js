

let base_url = 'https://premapi.zmaxfilm.com/Api_35/';  //服务器地址
let token = '26b89ca24914bced1814aa4be216fd63';
let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
let TIMEOUT = 10000

const BaseApi = {
    getToken:function(){
         return BaseApi.request('GET','',{tokenId:token})
    },
    request: function (method, url, params) {
        var fetchPromise, abortPromise, formData
        if (!params) {
            params = {}
        }
        if (!params.tokenId && token)
            params.tokenId = token
        if (method == 'GET') {
            if (params) {
                let paramsArray = [];
                //encodeURIComponent  
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&')
                } else {
                    url += '&' + paramsArray.join('&')
                }
            }
        } else {
            if (params)
                formData = JSON.stringify(params)
        }
        fetchPromise = new Promise(function (resolve, reject) {
            fetch(base_url + url, { method: method, headers: headers, body: formData })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({ status: response.status })
                    }
                })
                .then((responseJson) => {
                    console.log("response ==========", responseJson)
                    resolve(responseJson);
                }) 
                .catch((err) => {
                    console.log("err ==========", err)
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
    },

    /** 
     * 基于 fetch 封装的 GET请求 
     * @param url 
     * @param params {} 
     * @param headers 
     * @returns {Promise} 
     */
    get: function (url, params) {
        return BaseApi.request('GET', url, params)
    },

    /** 
     * 基于 fetch 封装的 POST请求  FormData 表单数据 
     * @param url 
     * @param params   
     * @param headers 
     * @returns {Promise} 
     */
    post: function (url, params) {
        return BaseApi.request('POST', url, params)
    }

}

export default BaseApi;  