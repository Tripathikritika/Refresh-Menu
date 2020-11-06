import actionConstant from  './actionTypes'

export const initState = {
    error : "",
    data : [],
    mapData : []
}

const reducer = ( state = initState , action ) => {
    switch( action.type ){
        case actionConstant.MAP_API_REQUEST : 
            return{
                ...state
            }
        case actionConstant.MAP_API_SUCCESS : 
            return{
                ...state
            }
        case actionConstant.MAP_API_FAILURE : 
            return{
                ...state
            }
        default :
            return state
    }
}
export default reducer