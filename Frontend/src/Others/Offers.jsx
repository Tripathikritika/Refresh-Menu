import React from 'react'
import styles from '../Styling/Offers.module.css'
import Footer from './Footer'

function Offers (){
    return (
        <>
            <div>
                <div className={styles.header}>
                    <div>
                        <img src="./Logo.jpg" alt=""/>
                    </div>
                    <div style={{paddingTop:'1%'}}>
                        <img src="./helpicon.svg" alt="help"/>
                    </div>
                </div>
                <div className="container-fluid m-0 p-0">
                    <div className="row">
                        <div className="col-12">
                            <div class="card bg-dark text-white" style={{height:'272px'}}>
                                <div class="card-img-overlay text-left">
                                    <img src="./Offers.svg" alt=""/>
                                    <h2 class="card-title">FreshMenu Offers</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                   <b>Payment Discounts</b> 
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-6">
                            <div class="card">
                                <div class="card-body">
                                    <div>
                                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/10a0cf95-ae1f-4fd3-a11f-6a40a98a5e17.png" alt=""/>
                                    </div>
                                    <div>
                                        Pay using Amazon Pay and Get Flat Rs 25 on minimum purchase of Rs 200
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="card">
                                <div class="card-body">
                                    <div>
                                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/0d58f688-e4ad-4f58-b91a-165feb244617.png" alt=""/>
                                    </div>
                                    <div>
                                        Pay with Mobikwik and Get 15% SuperCash
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Offers