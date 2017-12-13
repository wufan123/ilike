
import * as moviesApi from '../api/moviesApi'

export const HOT_MOVIES = 'HOT_MOVIES';
export const COMMING_MOVIES = 'COMMING_MOVIES';

export function getHotMovies(cinemaCode) {
    return (dispatch) => {
        moviesApi.getHotMovies(cinemaCode)
            .then(res => {
                dispatch({
                    type: HOT_MOVIES,
                    payload: res.data
                })
            })
            .catch(reason => {

            })
    }
}


export function getCommingMovies(cinemaCode) {
    return (dispatch) => {
        moviesApi.getCommingMovies(cinemaCode)
            .then(res => {
                if (res && res.data) {
                    res.data.forEach(function (element) {
                        element.data = element.list
                        delete element.list;
                    }, this);
                }
                dispatch({
                    type: COMMING_MOVIES,
                    payload: res.data
                })
            })
            .catch(reason => {

            })
    }
}

