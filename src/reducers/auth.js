import * as Action from '../actions'
const initialState = {
    isSigningOut: false,
    isAuthenticated: false,
    accessToken: null,
    user: {},
};

export const authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Action.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case Action.USER_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                isSigningOut: true
            };
        default:
            return state;
    }
};