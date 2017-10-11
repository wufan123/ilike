import BaseApi from './baseApi'

module.exports = {
    login: function (account, pwd) {
        return BaseApi.post('user/login', {
            userAccount: account,
            userPasswd: pwd
        })
    }
}