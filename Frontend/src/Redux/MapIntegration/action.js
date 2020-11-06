import axios from 'axios'
import {actionConstant} from './actionTypes'

export const mapLocationRequest = () => {
    return{
        type : actionConstant.MAP_API_REQUEST
    }
}

export const mapLocationSuccess= () => {
    return{
        type : actionConstant.MAP_API_SUCCESS
    }
}

export const mapLocationFailure = () => {
    return{
        type : actionConstant.MAP_API_FAILURE
    }
}

// export const getMapLocation = ( payload ) => ( dispatch ) => {
//     dispatch ( mapLocationRequest() )
//     axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${payload}.json?access_token=pk.eyJ1Ijoia3JpdGlrYWd0IiwiYSI6ImNraDNzZzRqNjByc2ozMGxzcjc3OXFycTcifQ.USQiQRYZ40MTwAb-3XPXQA`)
//          .then(res => {
//              dispatch(mapLocationSuccess(res.data))
//              console.log(res.data)
//          })
//          .catch(err => {
//              dispatch( mapLocationFailure(err))
//              console.log(err)
//          })
// }