import BaseApi from './baseApi'

export function login(account, pwd) {
    return BaseApi.post('user/login', {
        userAccount: account,
        userPasswd: pwd
    })
}