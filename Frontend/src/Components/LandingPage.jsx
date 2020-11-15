import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getFoodList ,toggleFilter} from '../Redux/FoodList/action'
import FoodsCards from '../Others/FoodsCards'
import  styles from '../Styling/LandingPage.module.css'
import FilterComponent from './FilterComponent'
import Slider from "infinite-react-carousel";

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
            <div style={{width:'90%' , margin : 'auto'}} >
                <div className={`${styles.carouselCards}` }>
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/a7918f75-63a3-4923-8879-b27f104fa10d.jpg" height = "300px" alt="Desert 40 % Off"/>
                    </div>
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/93d71f3b-8f02-4c52-993a-2cb4ac45c00e.jpg" height = "300px" alt="Large Plates"/>
                    </div>
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/64f2ee38-bbba-460f-976b-cb60b532e507.jpg" height = "300px" alt="Bowls"/>
                    </div>
                </div>
                <div className="container-fluid mt-5 position-relative">
                    <div className="row sticky-top" id="side" style={{backgroundColor:'white'}}>
                        <div className="col-6 text-left">
                            <h5>CATEGORIES</h5>
                        </div>
                        <div className="col-5 d-flex justify-content-end">
                            <button style={{
                                color: veg?`#2ebd59`: `rgba(74,74,74,.7)`,
                                border: veg?`1px solid #2ebd59`:`1px solid #000`,
                                borderRadius: `5px`
                            }} className= "px-2 py-1 m-1 bg-white" onClick = {() => setVeg(!veg)} > VEG</button>
                            <div className="px-1" onClick={() => dispatch(toggleFilter())}>
                                <img src="./funnel.svg" alt="funnel" className="py-1"/>
                                <button className="py-1 bg-white border border-0" style={{fontSize: '19px'}} >FILTERS</button>
                            </div>
                                { filters ? <FilterComponent /> : ""}
                        </div>        
                    </div>
                   <hr/>
                   <div>
                        <div className={`container-fluid position-relative`} id="content" >
                            <div className="row h-100">
                                <aside className="col-12 col-md-3 col-lg-2" id="left" >
                                    <div className="mb-3" id="side" style={{position: '-webkit-sticky', position: 'sticky' ,top: 25}}>
                                        <ul className="nav flex-md-column flex-row justify-content-between list-group" id="sidenav">
                                            <li className="nav-item"><a href="#Appetizers" className={`list-group-item list-group-item-action nav-link pl-0 ${styles.catergoryList}`}>Appetizers</a></li>
                                            <li className="nav-item"><a href="#Match_Day_Combos" className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>Match Day Combos</a></li>
                                            <li className="nav-item"><a href="#New_&_Exciting" className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>New & Exciting</a></li>
                                            <li className="nav-item"><a href="#Continental" className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>Continental</a></li>
                                            <li className="nav-item"><a href="#Big_Biriyani_Co." className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>Big Biriyani Co.</a></li>
                                            <li className="nav-item"><a href="#Fit_N_Fab" className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>Fit N Fab</a></li>
                                            <li className="nav-item"><a href="#Indian_Thalis" className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>Indian/ Thalis</a></li>
                                            <li className="nav-item"><a href="#Wok_Station" className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>Wok Station</a></li>
                                            <li className="nav-item"><a href="#Large_Plates" className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>Large Plates</a></li>
                                            <li className="nav-item"><a href="#Snacks" className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>Snacks</a></li>
                                            <li className="nav-item"><a href="#Wandercrust_Pizzas" className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>Wandercrust Pizzas</a></li>
                                            <li className="nav-item"><a href="#Dessert" className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>Dessert</a></li>
                                            <li className="nav-item"><a href="#Beverage" className={`list-group-item list-group-item-action nav-link  pl-0 ${styles.catergoryList}`}>Beverage</a></li>
                                        </ul>
                                    </div>
                                </aside>
                                <div className="col-12 col-md-9 col-lg-10">
                                    <main className="container">
                                    <div className="row position-relative">
                                        <div className="col-12">
                                            <div className="tab-content py-3 position-relative" >
                                                <div className="tab-pane active position-relative" id="tab1" role="tabpanel" data-target="#sidenav" >
                                                    <div className="anchor" id="Appetizers">
                                                        {filterItem.length > 0 && filterItem.filter((item) => item.category === 'Appetizers').length === 0 ? ""  : 
                                                            <h4 className={`${styles.categoriesHeader} text-left`}>APPETIZERS</h4> }
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
                                                    </div>
                                                    <div className="anchor" id="Match_Day_Combos">
                                                        {filterItem.length > 0 && filterItem.filter((item) => item.category === 'Match Day Combos').length === 0 ? ""  : 
                                                            <h4  className={`${styles.categoriesHeader} text-left`}>MATCH DAY COMBOS</h4>
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
                                                    </div>
                                                    
                                                    <div className="anchor" id="New_&_Exciting">
                                                        {filterItem.length > 0 && filterItem.filter((item) => item.category === 'New & Exciting').length === 0 ? ""  : 
                                                            <h4 className={`${styles.categoriesHeader} text-left`}>NEW & EXCITING</h4> }
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
                                                    </div>
                                                    <div class="anchor" id="Continental">
                                                        {filterItem.length > 0 && filterItem.filter((item) => item.category === 'Continental').length === 0 ? ""  : 
                                                            <h4 className={`${styles.categoriesHeader} text-left`}>Continental</h4> }
                                                        <div className={`text-left ${styles.cards_details}`}>
                                                        <div className="row">
                                                            {
                                                                filterItem.length === 0 ? food_List.filter((item) => item.category === 'Continental').filter((item) => veg ? item.type === 'VEG' : item  ).map((item) =>  (
                                                                <FoodsCards item = {item} key={item.id} />
                                                                )) : filterItem.filter((item) => item.category === 'Continental').map((item) => (
                                                                    <FoodsCards item = {item} key={item.id} />
                                                                ))
                                                            }
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div class="anchor" id="Big_Biriyani_Co.">
                                                        {filterItem.length > 0 && filterItem.filter((item) => item.category === 'Big Biriyani Co.').length === 0 ? ""  : 
                                                            <h4 className={`${styles.categoriesHeader} text-left`}>Big Biriyani Co.</h4> }
                                                        <div className={`text-left ${styles.cards_details}`}>
                                                        <div className="row">
                                                            {
                                                                filterItem.length === 0 ? food_List.filter((item) => item.category === 'Big Biriyani Co.').filter((item) => veg ? item.type === 'VEG' : item  ).map((item) =>  (
                                                                <FoodsCards item = {item} key={item.id} />
                                                                )) : filterItem.filter((item) => item.category === 'Big_Biriyani_Co.').map((item) => (
                                                                    <FoodsCards item = {item} key={item.id} />
                                                                ))
                                                            }
                                                        </div>
                                                        </div>
                                                    </div>   
                                                    <div class="anchor" id="Fit_N_Fab">
                                                        {filterItem.length > 0 && filterItem.filter((item) => item.category === 'Fit N fab').length === 0 ? ""  : 
                                                            <h4 className={`${styles.categoriesHeader} text-left`}>Fit N Fab</h4> }
                                                        <div className={`text-left ${styles.cards_details}`}>
                                                        <div className="row">
                                                            {
                                                                filterItem.length === 0 ? food_List.filter((item) => item.category === 'Fit N fab').filter((item) => veg ? item.type === 'VEG' : item  ).map((item) =>  (
                                                                <FoodsCards item = {item} key={item.id} />
                                                                )) : filterItem.filter((item) => item.category === 'Fit N fab').map((item) => (
                                                                    <FoodsCards item = {item} key={item.id} />
                                                                ))
                                                            }
                                                        </div>
                                                        </div>
                                                    </div>       
                                                    <div class="anchor" id="Dessert">
                                                        {filterItem.length > 0 && filterItem.filter((item) => item.category === 'Dessert').length === 0 ? ""  : 
                                                            <h4 className={`${styles.categoriesHeader} text-left`}>Dessert</h4> }
                                                        <div className={`text-left ${styles.cards_details}`}>
                                                        <div className="row">
                                                            {
                                                                filterItem.length === 0 ? food_List.filter((item) => item.category === 'Dessert').filter((item) => veg ? item.type === 'VEG' : item  ).map((item) =>  (
                                                                <FoodsCards item = {item} key={item.id} />
                                                                )) : filterItem.filter((item) => item.category === 'Dessert').map((item) => (
                                                                    <FoodsCards item = {item} key={item.id} />
                                                                ))
                                                            }
                                                        </div>
                                                        </div>
                                                    </div>          
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </main>
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





