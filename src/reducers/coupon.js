export const couponReducer = (state = {
    ticketCoupon:{}
}, action ={}) => {
    switch (action.type) {
        case "useCoupon":
            return {
                ...state,
                ticketCoupon: action.coupon
            };
            break;
        default:
            return state
    }
}