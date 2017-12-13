import BaseApi from './baseApi'

export function getHotMovies(cinemaCode) {
    return BaseApi.get('home/getMove', {
        cinemaCode: cinemaCode,
        type:1
    })
}

export function getCommingMovies(cinemaCode) {
    return BaseApi.get('home/getSoonMove', {
        cinemaCode: cinemaCode
    })
}