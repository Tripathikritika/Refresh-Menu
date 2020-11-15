import {GET_LOCATION} from './actionTypes'

// export const mapLocationRequest = () => {
//     return{
//         type : actionConstant.MAP_API_REQUEST
//     }
// }

// export const mapLocationSuccess= () => {
//     return{
//         type : actionConstant.MAP_API_SUCCESS
//     }
// }

// export const mapLocationFailure = () => {
//     return{
//         type : actionConstant.MAP_API_FAILURE
//     }
// }

export const getLocation = ( payload ) => {
    return {
        type:GET_LOCATION,
        payload
    }
}