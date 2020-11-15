import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styling/Offers.module.css'
import Footer from './Footer'

export const Error = () => {
    return (
        <div className="container-fluid m-0 p-0" >
            <div className="row" >
                <div className={`col-12 shadow py-2 mb-5 bg-white rounded m-0`} style={{ display:'flex' , justifyContent:'space-between'}}>
                    <div className="px-5"> 
                       <Link to='/'><img src="./Logo.jpg" alt="Logo"/></Link> 
                    </div>
                    <div className="pr-5">
                        <img src="./helpicon.svg" alt="help"/>
                    </div>
                </div>
            </div>
            <div className="container" style={{height:'100vh'}}>
                <div className="row">
                    <div className="col-12 text-center mt-5 pt-5">
                            <img src="https://www.freshmenu.com/pages/404/images/404.svg" alt="Error"/>
                            <p>Oh no! We couldn’t find what you’re looking for.</p>
                            <small>You may have mistyped the address or the page may have moved.</small> <br/>
                            <Link to='/'><small>Take me back to home page &#8594;</small></Link> 
                    </div>
                </div>
            </div>

        <Footer />
        </div>
    )
}
