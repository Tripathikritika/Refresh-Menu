import {GET_LOCATION} from  './actionTypes'

export const initState = {
    error : "",
    data : [],
    mapData : [],
    getLocation : "Bangalore Karnataka"
}

const reducer = ( state = initState , action ) => {
    switch( action.type ){
        // case actionConstant.MAP_API_REQUEST : 
        //     return{
        //         ...state
        //     }
        // case actionConstant.MAP_API_SUCCESS : 
        //     return{
        //         ...state
        //     }
        // case actionConstant.MAP_API_FAILURE : 
        //     return{
        //         ...state
        //     }
        case GET_LOCATION :
            return {
                ...state,
                getLocation : action.payload
            }
        default :
            return state
    }
}
export default reducer