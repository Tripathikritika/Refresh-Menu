import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleFoodList } from '../Redux/SingleFood/action'

function FoodDetails () {
    const matchData = useParams()
    const products = useSelector((state) => state.singleFoodReducer.singlefoodList)
    console.log(products)
    const dispatch = useDispatch()
   useEffect(() => {
       dispatch(getSingleFoodList())
      console.log(matchData)
   }, [])
   
    return (
        <>
            
        </>
    )
}       

export default FoodDetails