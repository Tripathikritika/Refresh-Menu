import axios from 'axios'
import actionConstant from './actionTypes'

export const singlefoodListRequest = () => {
    return{
        type : actionConstant.SINGLE_FOOD_LIST_REQUEST
    }
}

export const singlefoodListSuccess= ( payload ) => {
    return{
        type : actionConstant.SINGLE_FOOD_LIST_SUCCESS,
        payload 
    }
}

export const singlefoodListFailure = () => {
    return{
        type : actionConstant.SINGLE_FOOD_LIST_FAILURE
    }
}

export const getSingleFoodList = ( id ) => ( dispatch ) => {
    dispatch ( singlefoodListRequest() )
    axios.get(`http://localhost:8000/singleFoodDetails/${id}`)
         .then(res => {
             dispatch(singlefoodListSuccess(res.data))
             console.log(res.data)
         })
         .catch(err => {
             dispatch( singlefoodListFailure(err))
             console.log(err)
         })
}