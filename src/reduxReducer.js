import { combineReducers } from 'redux';
import { authReducer, cinemaReducer } from './reducers';


export const rootReducer = combineReducers({
    auth: authReducer,
    cinema: cinemaReducer,
});
