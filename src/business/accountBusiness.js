import accountApi from '../api/accountApi'

module.exports = {
    async login(account, pwd) {
        let res = await accountApi.login(account,pwd)
        await global.storage.setItem( 'account',account)
        await global.storage.setItem( 'pwd',pwd)  
        return res 
    }
}