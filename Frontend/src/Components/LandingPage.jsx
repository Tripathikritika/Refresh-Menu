import React from 'react'
import { useEffect } from 'react'
import  styles from './LandingPage.module.css'
import axios from 'axios'
import { useState } from 'react'

function LandingPage() {
    const [ food_List , setFoodList ] = useState([])
    useEffect ( () => {
        axios.get(`http://localhost:8000/`) 
             .then((res) => setFoodList(res.data) )
             .catch((err) => console.log(err))
    },[])
    console.log(food_List)
    return (
        <>
        {/* First part */}
            <div>
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
                     <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/1635b32e-b727-489a-bcd6-870941b29c40.jpg" height = "300px" alt="Desert 40 % Off"/>
                    </div>
                    
                    <div>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/a8d84480-dc3b-42c2-80d3-d3c3f4f2740e.jpg" height = "300px" alt="Order Today"/>
                    </div>
                </div>
                <div>
                   <div className = {`d-flex flex-row justify-content-center ${styles.categoriesBody}`} >
                       <div>
                            <h5>CATEGORIES</h5>
                       </div>
                       <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div><div></div> <div></div>
                       <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div><div></div> <div></div>
                       <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div><div></div> <div></div>
                       <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div><div></div> <div></div>
                       <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div><div></div> <div></div>
                       <div><h5>VEG</h5></div>
                       <div><h5><img src="/funnel.svg" alt=""/> FILTERS</h5></div>
                   </div>
                   <hr/>
                    <div className={styles.catergoryListBody}>
                        <div className = 'row'>
                            <div className="col-12">
                                <div className="row" style={{position:'relative' }} data-spy="scroll" data-target=".navbar" data-offset="50">
                                    <div id="list-example" className="list-group col-2"   >
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

                                    <div data-offset="0" className="scrollspy-example col-10" style={{overflowY:'scroll'}}>
                                        <h4 id="list-item-1" className="text-left">APPETIZERS</h4>
                                        <div className={`text-left ${styles.cards_details}`}>
                                            {
                                                food_List.filter((item) => item.category === 'Appetizers').map((item) =>  (
                                                    <div class ="card m-2 rounded">
                                                    <img src={item.food_link} alt="Appetizers" className="img-fluid card-img-top rounded"/>
                                                    <div class="card-body">
                                                    <h5 class="card-title">{item.title}</h5>
                                                    <p>₹{item.amount} <button type="button" class="btn btn-danger float-right rounded-pill">ADD</button></p>
                                                    
                                                    </div>
                                                </div>
                                                ))
                                            }
                                        </div>
                                        <h4 id="list-item-2">MATCH DAY COMBOS</h4>
                                        <div className={`text-left ${styles.cards_details}`}>
                                            {
                                                food_List.filter((item) => item.category === 'Match Day Combos').map((item) =>  (
                                                    <div class ="card m-2 rounded">
                                                    <img src={item.food_link} alt="Appetizers" className="img-fluid card-img-top rounded"/>
                                                    <div class="card-body">
                                                    <h5 class="card-title">{item.title}</h5>
                                                    <p>₹{item.amount} <button type="button" class="btn btn-danger float-right rounded-pill">ADD</button></p>
                                                    
                                                    </div>
                                                </div>
                                                ))
                                            }
                                        </div>
                                        <h4 id="list-item-3">NEW & EXCITING</h4>
                                        <div className={`text-left ${styles.cards_details}`}>
                                            {
                                                food_List.filter((item) => item.category === "New & Exciting").map((item) =>  (
                                                    <div class ="card m-2 rounded">
                                                    <img src={item.food_link} alt="Appetizers" className="img-fluid card-img-top rounded"/>
                                                    <div class="card-body">
                                                    <h5 class="card-title">{item.title}</h5>
                                                    <p>₹{item.amount} <button type="button" class="btn btn-danger float-right rounded-pill">ADD</button></p>
                                                    
                                                    </div>
                                                </div>
                                                ))
                                            }
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





