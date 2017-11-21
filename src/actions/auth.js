import * as accountApi from '../api/accountApi'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';


export function login(phoneNum, password) {
    return dispatch => {
        accountApi.login(phoneNum, password)
            .then(res => {
                dispatch(loginSuccess(res.data))
            })
            .catch(reason => {
                dispatch(logout())
            })
    }

}

export function loginSuccess(user) {
    return dispatch => {
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: user,
        })
    };
}

export function logout() {
    return dispatch => {
        dispatch({
            type: USER_LOGOUT
        })
    }
}