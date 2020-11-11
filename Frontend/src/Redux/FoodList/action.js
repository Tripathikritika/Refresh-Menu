import axios from 'axios'
import actionConstant from './actionTypes'

export const foodListRequest = () => {
    return{
        type : actionConstant.FOOD_LIST_REQUEST
    }
}

export const foodListSuccess= ( payload ) => {
    return{
        type : actionConstant.FOOD_LIST_SUCCESS,
        payload 
    }
}

export const foodListFailure = () => {
    return{
        type : actionConstant.FOOD_LIST_FAILURE
    }
}

export const getFoodList = ( payload ) => ( dispatch ) => {
    dispatch ( foodListRequest() )
    axios.get(`http://localhost:8000/`)
         .then(res => {
             dispatch(foodListSuccess(res.data))
            //  console.log(res.data)
         })
         .catch(err => {
             dispatch( foodListFailure(err))
             console.log(err)
         })
}

export const searchFoodListRequest = () => {
    return{
        type : actionConstant.SEARCH_FOOD_LIST_REQUEST
    }
}

export const searchFoodListSuccess= ( payload ) => {
    return{
        type : actionConstant.SEARCH_FOOD_LIST_SUCCESS,
        payload 
    }
}

export const searchFoodListFailure = () => {
    return{
        type : actionConstant.SEARCH_FOOD_LIST_FAILURE
    }
}

export const getsearchFoodList = ( payload ) => ( dispatch ) => {
    dispatch ( searchFoodListRequest() )
    axios.get(`http://localhost:8000/searchItem?filteredName=${payload}`)
         .then(res => {
             dispatch(searchFoodListSuccess(res.data))
            //  console.log(res.data)
         })
         .catch(err => {
             dispatch( searchFoodListFailure(err))
             console.log(err)
         })
}

export const toggleSearch = () => ({
    type : actionConstant.SEARCH_FUNCTION
})

export const filterFoodListRequest = () => {
    return{
        type : actionConstant.FILTER_FOOD_LIST_REQUEST
    }
}

export const filterFoodListSuccess= ( payload ) => {
    return{
        type : actionConstant.FILTER_FOOD_LIST_SUCCESS,
        payload 
    }
}

export const filterFoodListFailure = () => {
    return{
        type : actionConstant.FILTER_FOOD_LIST_FAILURE
    }
}

export const getFilterFoodList = ( payload ) => ( dispatch ) => {
    // console.log(payload)
    dispatch ( filterFoodListRequest() )
    axios.get(`http://localhost:8000/filterItem?${payload}`)
         .then(res => {
             dispatch(filterFoodListSuccess(res.data))
            //  console.log(res.data)
         })
         .catch(err => {
             dispatch( filterFoodListFailure(err))
             console.log(err)
         })
}

export const toggleFilter = () => {
    return{
        type : actionConstant.TOGGLE_FILTER
    }
}
