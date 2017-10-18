export const SELECT_CINEMA = 'SELECT_CINEMA';

export const selectCinema = (cinema) => {
    return (dispatch) => {
        dispatch({
            type: SELECT_CINEMA,
            payload: cinema
        })
    }
}