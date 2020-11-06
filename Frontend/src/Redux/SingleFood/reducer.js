import actionConstant from  './actionTypes'

export const initState = {
    singlefoodList : []
}

const reducer = ( state = initState , action ) => {
    switch( action.type ){
        case actionConstant.FOOD_LIST_REQUEST : 
            return{
                ...state
            }
        case actionConstant.FOOD_LIST_SUCCESS : 
            return{
                ...state,
                singlefoodList : action.payload
            }
        case actionConstant.FOOD_LIST_FAILURE : 
            return{
                ...state
            }
        default :
            return state
    }
}
export default reducer