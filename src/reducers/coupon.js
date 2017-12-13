export const couponReducer = (state = {
    ticketCoupon:{}
}, action ={}) => {
    switch (action.type) {
        case "useCoupon":
            return {
                ...state,
                ticketCoupon: action.coupon
            };
        default:
            return state
    }
}