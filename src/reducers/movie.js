import * as Action from '../actions'
const initialState = {
    hotMovies: [],
    commingMovies: [],
};

export const moviesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Action.HOT_MOVIES:
            return {
                ...state,
                hotMovies: action.payload,
            };
        case Action.COMMING_MOVIES:
            return {
                ...state,
                commingMovies: action.payload,
            };
        default:
            return state;
    }
};