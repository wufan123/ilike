import accountApi from '../api/accountApi'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';

export const loginSuccess = (user) => {
    return dispatch => {
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: user,
        })
    };
}

export const logout = () => {
    return dispatch => {
        dispatch({
            type: USER_LOGOUT
        })
    }
}