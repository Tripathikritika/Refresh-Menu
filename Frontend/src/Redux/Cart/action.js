
import actionConstant from './actionTypes'

export const cartListItem = ( payload ) => {
    return{
        type : actionConstant.CART_ITEM,
        payload
    }
}

