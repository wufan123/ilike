import { combineReducers } from 'redux';
import { authReducer, cinemaReducer,couponReducer} from './reducers';


export const rootReducer = combineReducers({
    auth: authReducer,
    cinema: cinemaReducer,
    coupon:couponReducer
});
