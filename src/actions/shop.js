
import * as shopApi from '../api/shopApi'

export const SHOP_GOODS = 'SHOP_GOODS';
export const GOODS_DETAIL = 'GOODS_DETAIL';
export const SHOP_COMBO = 'SHOP_COMBO';
export const UPDATE_GOODS = "UPDATE_GOODS"

export function getCinemaGoods(cinemaCode) {
    return (dispatch) => {
        shopApi.getCinemaGoods(cinemaCode)
            .then(res => {
                dispatch({
                    type: SHOP_GOODS,
                    payload: res.data
                })
            })
            .catch(reason => {

            })
    }
}

export function getGoodsDetail(goodsId) {
    return (dispatch) => {
        shopApi.getGoodsDetial(goodsId)
            .then(res => {
                dispatch({
                    type: GOODS_DETAIL,
                    payload: res.data
                })
            })
            .catch(reason => {

            })
    }
}

export function goodsQuantity(item) {
    return (dispatch) => {
        dispatch({
            type: UPDATE_GOODS,
            payload: item
        })
    }
}


export function getCinemaCombo(cinemaCode) {
    return (dispatch) => {
        shopApi.getCinemaCombo(cinemaCode)
            .then(res => {
                // if (res && res.data) {
                //     res.data.forEach(function (element) {
                //         element.data = element.list
                //         delete element.list;
                //     }, this);
                // }
                dispatch({
                    type: SHOP_COMBO,
                    payload: res.data
                })
            })
            .catch(reason => {

            })
    }
}

