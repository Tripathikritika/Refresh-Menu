import React from 'react'
import styles from '../Styling/CheckoutForm.module.scss'
import { Link } from 'react-router-dom'

export const CheckoutForm = () => {
    return (
    <>
        <div className={`${styles.header} shadow-sm p-3 mb-5 bg-white rounded}`}>
            <div>
                <Link to='/'>
                    <img src="./Logo.jpg" alt="" />
                </Link>
                
            </div>
        </div>
        <div className="container">
           <div className="row">
                <div className="col-12 text-left pl-5 ml-5">
                    <h4>Order Status</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className={`${styles.lineContainer} mt-2`}>
                        <div className={styles.progressLine}>
                            <div className={styles.progress} style ={{width: '50%'}}>
                            </div>
                                <div className={styles.status}>
                                <div className={`${styles.dot} ${styles.completed}`}></div>
                            </div>
                            <div className={styles.status}>
                                <div className={`${styles.dot} ${styles.completed}`}></div>
                            </div>
                            <div className={styles.status}>
                                <div className={`${styles.dot}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row d-flex justify-content-evenly">
                    <div className="col-4">
                       Confirmed
                    </div>
                    <div className="col-4">
                       Shipped
                    </div>
                    <div className="col-4">
                        Delivers within 45 minutes
                    </div>
                </div>
        </div>
    </>
    )
}
