import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getFoodList ,toggleFilter} from '../Redux/FoodList/action'
import FoodsCards from '../Others/FoodsCards'
import  styles from '../Styling/LandingPage.module.css'
import FilterComponent from './FilterComponent'


function LandingPage() {
    const dispatch = useDispatch()
    const  food_List = useSelector(state => state.foodReducer.foodList)
    const [veg , setVeg] = useState(false)
    const filters  = useSelector((state) => state.foodReducer.toggleFilterState)
    const filterItem = useSelector((state) => state.foodReducer.filteredItem)
  
    useEffect ( () => {
        dispatch(getFoodList () )
    },[])

    // console.log(food_List)
   
    return (
        
        <>
        {/* First part */}
            <div style={{width:'85%' , margin : 'auto'}}>
                <div className={styles.carouselCards}>
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/a7918f75-63a3-4923-8879-b27f104fa10d.jpg" height = "300px" alt="Desert 40 % Off"/>
                    </div>
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/93d71f3b-8f02-4c52-993a-2cb4ac45c00e.jpg" height = "300px" alt="Large Plates"/>
                    </div>
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/64f2ee38-bbba-460f-976b-cb60b532e507.jpg" height = "300px" alt="Bowls"/>
                    </div>
                     {/* <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/1635b32e-b727-489a-bcd6-870941b29c40.jpg" height = "300px" alt="Desert 40 % Off"/>
                    </div>
                    
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/a8d84480-dc3b-42c2-80d3-d3c3f4f2740e.jpg" height = "300px" alt="Order Today"/>
                    </div> */}
                </div>
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-6 text-left">
                            <h5>CATEGORIES</h5>
                        </div>
                        <div className="col-5 d-flex justify-content-end">
                            <button style={{
                                color: veg?`#2ebd59`: `rgba(74,74,74,.7)`,
                                border: veg?`1px solid #2ebd59`:`1px solid #000`,
                                borderRadius: `5px`
                            }} className= "px-2 m-1" onClick = {() => setVeg(!veg)} >VEG</button>
                            <div className="px-1" onClick={() => dispatch(toggleFilter())}>
                                <img src="./funnel.svg" alt=""/>
                                <button className="px-2 m-1" >Filters</button>
                            </div>
                                { filters ? <FilterComponent /> : ""}
                        </div>        
                    </div>
                   <hr/>
                    <div className={styles.catergoryListBody} >
                        <div className = 'row'>
                            <div className="col-12">
                                <div className="row" style={{position:'relative'}} data-spy="scroll" data-target=".navbar" data-offset="50">
                                    
                                    <div id="list-example" className={`list-group col-2 text-left ${styles.sticky}`}>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-1" >Appetizers</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-2">Match Day Combos</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-3">New & Exciting</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-4">Continental</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-5">Big Biriyani Co.</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-6">Fit N Fab</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-7">Tndian/ Thalis</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-8">Wok Station</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-9">Large Plates</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-10">Snacks</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-11">Wandercrust Pizzas</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-12">Dessert</a>
                                        <a className={`list-group-item list-group-item-action ${styles.catergoryList}`} href="#list-item-13">Beverage</a>
                                    </div>

                                    <div data-offset="0" data-target="#list-example" className="scrollspy-example col-10" style={{overflowY:'hidden' }}>
                                            {filterItem.length > 0 && filterItem.filter((item) => item.category === 'Appetizers').length === 0 ? ""  : 
                                            <h4 id="list-item-1" className="text-left">APPETIZERS</h4> }
                                                <div className={`text-left ${styles.cards_details}`}>
                                                <div className="row" >
                                                {
                                                    filterItem.length === 0 ?  food_List.filter((item) => item.category === 'Appetizers').filter((item) => veg ? item.type === 'VEG' : item  ).map((item) =>  (
                                                        <FoodsCards item = {item} key={item.id} />
                                                    )) : filterItem.filter((item) => item.category === 'Appetizers').map((item) => (
                                                        <FoodsCards item = {item} key={item.id} />
                                                    ))
                                                }
                                                </div>
                                                </div>
                                        {filterItem.length > 0 && filterItem.filter((item) => item.category === 'Match Day Combos').length === 0 ? ""  : 
                                            <h4 id="list-item-2" className="text-left">MATCH DAY COMBOS</h4>
                                        }
                                        <div className={`text-left ${styles.cards_details}`}>
                                        <div className="row">
                                            {
                                                 filterItem.length === 0 ? food_List.filter((item) => item.category === 'Match Day Combos').filter((item) => veg ? item.type === 'VEG' : item  ).map((item) =>  (
                                                    <FoodsCards item = {item} key={item.id}/>
                                                )) : filterItem.filter((item) => item.category === 'Match Day Combos').map((item) => (
                                                    <FoodsCards item = {item} key={item.id} />
                                                ))
                                            }
                                        </div>
                                        </div>
                                        {filterItem.length > 0 && filterItem.filter((item) => item.category === 'New & Exciting').length === 0 ? ""  : 
                                            <h4 id="list-item-1" className="text-left">NEW & EXCITING</h4> }
                                        <div className={`text-left ${styles.cards_details}`}>
                                        <div className="row">
                                            {
                                                filterItem.length === 0 ? food_List.filter((item) => item.category === 'New & Exciting').filter((item) => veg ? item.type === 'VEG' : item  ).map((item) =>  (
                                                   <FoodsCards item = {item} key={item.id} />
                                                )) : filterItem.filter((item) => item.category === 'New & Exciting').map((item) => (
                                                    <FoodsCards item = {item} key={item.id} />
                                                ))
                                            }
                                        </div>
                                        </div>
                                        {/* <h4 id="list-item-4">BEVERAGES</h4>
                                        <div className={`text-left ${styles.cards_details}`}>
                                            {
                                                food_List.filter((item) => item.category === "Beverage").map((item) =>  (
                                                    <div class ="card m-2 rounded">
                                                    <img src={item.food_link} alt="Appetizers" className="img-fluid card-img-top rounded"/>
                                                    <div class="card-body">
                                                    <h5 class="card-title">{item.title}</h5>
                                                    <p>₹{item.amount} <button type="button" class="btn btn-danger float-right rounded-pill">ADD</button></p>
                                                    
                                                    </div>
                                                </div>
                                                ))
                                            }
                                        </div> */}
                                        {/* <h4 id="list-item-5">BIG BIRIYANI CO.</h4>
                                        <p>
                                           
                                        </p>
                                        <h4 id="list-item-6">FIT N FAB.</h4>
                                        <p>
                                           
                                        </p>
                                        <h4 id="list-item-7">INDIAN / THALIS</h4>
                                        <p>
                                           
                                        </p>
                                        <h4 id="list-item-8">WOK STATION</h4>
                                        <p>
                                           
                                        </p>
                                        <h4 id="list-item-9">WOK STATION</h4>
                                        <p>
                                           
                                        </p>
                                        <h4 id="list-item-10">WOK STATION</h4>
                                        <p>
                                           
                                        </p>
                                        <h4 id="list-item-11">WOK STATION</h4>
                                        <p>
                                           
                                        </p>
                                        <h4 id="list-item-12">WOK STATION</h4>
                                        <p>
                                           
                                        </p>
                                        <h4 id="list-item-13">WOK STATION</h4>
                                        <p>
                                           
                                        </p> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage





