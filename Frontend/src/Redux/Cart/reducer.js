import actionConstant from  './actionTypes'

export const initState = {
    cartList : []
}

const reducer = ( state = initState , action ) => {
    switch( action.type ){
        case actionConstant.CART_ITEM : 
            return{
                ...state,
                cartList :  action.payload
            }
       
        default :
            return state
    }
}
export default reducer