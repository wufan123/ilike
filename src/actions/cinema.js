
import * as cinemaApi from '../api/cinemaApi'

export const SELECT_CINEMA = 'SELECT_CINEMA';
export const CINEMA_LIST = 'CINEMA_LIST';

export function selectCinema(cinema) {
    return (dispatch) => {
        dispatch({
            type: SELECT_CINEMA,
            payload: cinema
        })
    }
}

export function loadCinemaList() {
    return (dispatch) => {
        cinemaApi.getCinemaList().then(res => {
            if(res&&res.data){
                res.data.forEach(function(element) {
                    element.data=element.cinemaList
                    delete element.cinemaList;
                }, this);
            }
            dispatch({
                type: CINEMA_LIST,
                payload: res.data
            })
        }).catch(reason => {
        })
    }
}