import BaseApi from './baseApi'

export function getCinemaGoods(cinemaCode) {
    return BaseApi.get('home/getCinemaGoods', {
        cinemaCode:cinemaCode
    })
}

export function getGoodsDetial(goodsId) {
    return BaseApi.get('home/getCinemaGoodsDetail', {
        goodsId:goodsId
    })
}

export function getCinemaCombo(cinemaCode) {
    return BaseApi.get('package/getPackagesList', {
        cinemaCode:cinemaCode
    })
}

export function getComboDetail(combeId) {
    return BaseApi.get('package/getPackagesList', {
        id:combeId,
        type:'package'
    })
}