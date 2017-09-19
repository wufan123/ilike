let BaseApi = {};

let base_url = '';  //服务器地址
let token = '';
let header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}
let timeout = 10000


/** 
 * 基于 fetch 封装的 GET请求 
 * @param url 
 * @param params {} 
 * @param headers 
 * @returns {Promise} 
 */
BaseApi.get = function (url, params, headers) {
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
    var fetchPromise = new Promise(function (resolve, reject) {
        fetch(base_url + url, {
            method: 'GET',
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({ status: response.status })
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject({ status: -1 });
            })
    })


    var abort_fn = null;
    //这是一个可以被reject的promise
    var abortPromise = new Promise(function (resolve, reject) {
        abort_fn = function () {
            eject('abort promise');
        };
    });

    //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
    var abortablePromise = Promise.race([
        fetchPromise,
        abortPromise
    ]);

    setTimeout(function () {
        abort_fn();
    }, timeout);
    return abortablePromise
}

/** 
 * 基于 fetch 封装的 POST请求  FormData 表单数据 
 * @param url 
 * @param formData   
 * @param headers 
 * @returns {Promise} 
 */
BaseApi.post = function (url, formData, headers) {
    var fetchPromise = new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({ status: response.status })
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject({ status: -1 });
            })
    })

    var abort_fn = null;
    //这是一个可以被reject的promise
    var abortPromise = new Promise(function (resolve, reject) {
        abort_fn = function () {
            eject('abort promise');
        };
    });

    //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
    var abortablePromise = Promise.race([
        fetchPromise,
        abortPromise
    ]);

    setTimeout(function () {
        abort_fn();
    }, timeout);
    return abortablePromise
}

export default BaseApi;  