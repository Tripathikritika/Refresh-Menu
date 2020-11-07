import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleFoodList } from '../Redux/SingleFood/action'
import Footer from '../Others/Footer'
import styles from '../Styling/FoodDetails.module.css'

function FoodDetails () {
    const matchData = useParams()
    const products = useSelector((state) => state.singleFoodReducer.singlefoodList)
    
    const dispatch = useDispatch()
   useEffect(() => {
       dispatch(getSingleFoodList())
      console.log(matchData)
   }, [])
   console.log(products)
    return (
        <>
            <div className = {styles.mainDiv}>
                {products && products.filter((item) => item.id === matchData.id).map((item) => (
                    <div className={styles.descriptionCard}>
                        <div style={{width:'100%',position: 'relative'}}>
                            {<img src={item.food_link} alt="" className='img-fluid' width='100%'/> }
                        </div>
                        <div className={styles.itemsDescription}>
                            <div className={styles.itemTitle}>
                                {item.title}
                            </div>
                            <div>
                                ₹{item.amount}
                            </div>
                            <div>
                                <button>Add</button>
                            </div>  
                            <div>
                                {item.details}
                            </div>
                            <div>

                            </div>
                            <div>
                                {item.ingredients}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}       

export default FoodDetails