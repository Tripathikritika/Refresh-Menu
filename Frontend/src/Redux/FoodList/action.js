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