import { combineReducers } from 'redux';
import { authReducer, cinemaReducer,couponReducer,moviesReducer,shopReducer} from './reducers';


export const rootReducer = combineReducers({
    auth: authReducer,
    cinema: cinemaReducer,
    movies:moviesReducer,
    coupon:couponReducer,
    shop:shopReducer
});
