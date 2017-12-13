import * as Action from '../actions'
const initialState = {
    cinemaGoods: [],
    cinemaCombo: [],
    goodsDetail: [],
    goodsCount: 0
};

export const shopReducer = (state = initialState, action = {}) => {
    function calulateGoodsCount(goods) {
        let count = 0
        if (goods) {
            goods.forEach(item => {
                if (item.num && item.num > 0) {
                    count += item.num * item.price
                }
            })
        }
        return count
    }
    switch (action.type) {
        case Action.SHOP_GOODS:
            return {
                ...state,
                cinemaGoods: action.payload,
            };
        case Action.SHOP_COMBO:
            return {
                ...state,
                cinemaCombo: action.payload
            }
        case Action.GOODS_DETAIL:
            return {
                ...state,
                goodsDetail: action.payload
            }
        case Action.UPDATE_GOODS:
            let cinemaGoods = state.cinemaGoods
            cinemaGoods.forEach((item, index) => {
                cinemaGoods[index] = item
            })
            return {
                ...state,
                cinemaGoods: cinemaGoods
            }
        default:
            return state;
    }
};

