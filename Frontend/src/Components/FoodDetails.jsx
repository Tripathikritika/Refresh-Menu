import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleFoodList } from '../Redux/SingleFood/action'
import Footer from '../Others/Footer'
import styles from '../Styling/FoodDetails.module.css'
import { useState } from 'react'

function FoodDetails () {
    const matchData = useParams()
    const foodItem = useSelector((state) => state.singleFoodReducer.singlefoodList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleFoodList(matchData.id))
        console.log(matchData)
   }, [])

    return (
        <>
            <div className = {styles.mainDiv}>
                { foodItem && 
                    <div className={`container ${styles.descriptionCard}`}>
                    <div className="row">
                        <div className="col-12">
                        <div class="card mb-3 border border-white">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <img src={foodItem.food_link} className="card-img img-fluid" alt={foodItem.title}/>
                                <div className = 'row'>
                                    <div className="col-12 d-flex">
                                        <i class="fab fa-facebook-f p-3 bg-primary text-white h5 m-2 rounded"></i>
                                        <i class="fab fa-twitter  p-3 bg-info text-white h5 m-2 rounded"></i>
                                        <i class="fab fa-google  p-3 bg-danger text-white h5 m-2 rounded"></i>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-6 text-left">
                            <div className="card-body">
                                <h5 className={`card-title ${styles.foodName}`}>{foodItem.title}</h5>
                                <div style={{display:'flex', fontSize:'13px', color:'#A8A8A8'}}>
                                    <div className={styles.foodType}>{foodItem.type === 'VEG' ? <img src="/vegIcon.png" alt="Vegetarian" className={styles.typeIcon}/>  : <img src="/non-vegetarian.png" alt="" className={styles.typeIcon}/>}</div>
                                    <div className={styles.foodCuisine}>{foodItem.cuisine}</div>
                                </div>
                                <p className={`card-text ${styles.foodAmount}`}>₹{foodItem.amount}</p>
                                <div className="row">
                                    <div className="col-4">
                                    <button className={`btn btn-danger btn-lg rounded-pill px-5 ${styles.addButton}`}>Add</button>
                                    <small className="text-muted pl-4">Customisable</small>
                                    </div>
                                </div>
                                <h5 className={`card-text ${styles.foodDetails}`}>DETAILS ABOUT THIS MEAL</h5>
                                <p className={`card-text ${styles.foodDescription}`}>{foodItem.details}</p>
                                <div className={styles.foodType}>{foodItem.type === 'VEG' ? <img src="/leaf.png" alt="Vegetarian" className={styles.typeIcon}/>  : <img src="/chicken-leg.png" alt="" className={styles.typeIcon}/>}</div>
                                <p className="card-text">{foodItem.type}</p>
                                <h5 className={`card-text ${styles.foodDetails}`}>INGREDIENTS</h5>
                                <p className={`card-text ${styles.foodDescription}`}>{foodItem.ingredients}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                }
             </div>
           
            <Footer />
        </>
    )
}       

export default FoodDetails