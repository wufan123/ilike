import * as Action from '../actions'
const initialState = {
    currentCinema: null,
    cinemaCode:'',
    cinemaList: []
};

export const cinemaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Action.SELECT_CINEMA:
            return {
                ...state,
                currentCinema: action.payload,
                cinemaCode: action.payload ? action.payload.cinemaCode : state.cinemaCode
            };
        case Action.CINEMA_LIST:
            return {
                ...state,
                cinemaList: action.payload || state.cinemaList
            }
        default:
            return state;
    }
};