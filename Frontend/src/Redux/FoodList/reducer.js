import actionConstant from  './actionTypes'

export const initState = {
    foodList : [],
    searchedItem : [],
    toggleSearchStatus : false,
    filteredItem : [],
    toggleFilterState : false
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
                foodList : action.payload
            }
        case actionConstant.FOOD_LIST_FAILURE : 
            return{
                ...state
            }
        case actionConstant.SEARCH_FOOD_LIST_REQUEST : 
        return{
            ...state
        }
        case actionConstant.SEARCH_FOOD_LIST_SUCCESS : 
        // console.log(action.payload)
            return{
                ...state,
                searchedItem : action.payload
            }
        case actionConstant.SEARCH_FOOD_LIST_FAILURE : 
            return{
                ...state
            }
        case actionConstant.SEARCH_FUNCTION : 
        return{
            ...state,
            toggleSearchStatus : !state.toggleSearchStatus
        }
        case actionConstant.FILTER_FOOD_LIST_REQUEST : 
        return{
            ...state
        }
        case actionConstant.FILTER_FOOD_LIST_SUCCESS : 
            return{
                ...state,
                filteredItem : action.payload
            }
        case actionConstant.FILTER_FOOD_LIST_FAILURE : 
            return{
                ...state
            }
        case actionConstant.TOGGLE_FILTER : 
        return{
            ...state,
            toggleFilterState : !state.toggleFilterState
        }
        default :
            return state
    }
}
export default reducer