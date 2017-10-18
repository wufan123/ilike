import * as Action from '../actions'
const initialState = {
    currentCinema: {}
};

export const cinemaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Action.SELECT_CINEMA:
            return {
                ...state,
                currentCinema: action.payload
            };
        default:
            return state;
    }
};