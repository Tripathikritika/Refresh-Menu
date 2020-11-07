import React from 'react'
import {Link} from 'react-router-dom'
import  styles from '../Styling/LandingPage.module.css'

function FoodsCards( {item} ) {
    return(
        <>
        <div className = 'col-12 col-sm-12 col-md-6 col-lg-4' key={item.id}>
            <div style={{display:'flex', fontSize:'13px', color:'#A8A8A8'}}>
                <div className={styles.foodType}>{item.type === 'VEG' ? <img src="./vegIcon.png" alt="Vegetarian" className={styles.typeIcon}/>  : <img src="/non-vegetarian.png" alt="" className={styles.typeIcon} />}</div>
                <div>{item.cuisine}</div>
            </div>
            <div className ="card m-2 rounded">
                <Link to ={`/${item.title}/product/${item.id}`}><img src={item.food_link} alt="Appetizers" className="img-fluid card-img-top rounded"/></Link>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p>₹{item.amount} <button type="button" className="btn btn-danger float-right rounded-pill">ADD</button></p>
                </div>
            </div>
        </div>

        </>
    )
}

export default FoodsCards