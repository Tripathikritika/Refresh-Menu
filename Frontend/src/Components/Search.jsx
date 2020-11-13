import React from 'react'
import styles from '../Styling/Search.module.css'
import Footer from '../Others/Footer'
import { useSelector , useDispatch} from 'react-redux'
import { useState } from 'react'
import { getsearchFoodList } from '../Redux/FoodList/action'
import { useEffect } from 'react'
import FoodsCards from '../Others/FoodsCards'
import {toggleSearch} from '../Redux/FoodList/action'

function Search() {
    const [searchItem , setSearchItem] = useState("")
    let searchData  = useSelector(state => state.foodReducer.searchedItem)
    const [searchArray , setSearchArray] = useState(searchData) 
    const dispatch = useDispatch()

    useEffect(() => {
        if(searchItem !== ""){
            dispatch(getsearchFoodList( searchItem ))
            setSearchArray(searchData)
        }
        if( searchItem === ""){
            setSearchArray([])
        }
    }, [searchItem])

    return ( 
        <>
            <div div className={styles.mainDiv}>
                
                <div>
                    <div className={styles.bodyDiv}>
                       <div className="container">
                            <div className="text-right" onClick={() => dispatch(toggleSearch())}>Back To Menu</div>
                            <div className="row" >
                                <div className="col-12">
                                    <div class="card shadow-none ">
                                        <div class="card-body">
                                            <div className="row">
                                                <div className="col-1">
                                                    <img src="./searchicon.svg" alt="search"/>
                                                </div>
                                                <div className="col-10">
                                                    <input type="text"  className={`form-control shadow-none  ${styles.innerInput}`} value={searchItem} placeholder="Search" onChange={(e) => setSearchItem(e.target.value)}/>
                                                </div>
                                                <div className="col-1">
                                                   <p onClick={() => setSearchItem("")}>Clear</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div>
                           <div className="container">
                               <div className="row">
                                   <div className="col-2">
                                        <h5>RECENT SEARCH</h5>

                                   </div>
                                   <div className="col-10">
                                      <hr/>
                                   </div>
                               </div>
                           </div>
                            

                       </div>
                       <div>
                           <h5>TOP CATEGORIES</h5>
                       </div>
                       <div className="container" style={{margin:'0px auto'}}>
                            {
                                searchArray.length === 0 ? 
                                <div className="row ">
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2  text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">Asian</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">Pan-Asian</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">Fusion</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">World Cuisine</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">Indian</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">Continental</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">447 cal | High Protein</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">575 cal | Low Calorie</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">Universal</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">South Indian</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">Oriental</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">Mexican</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">Middle Eastern</h5>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-12 col-md-6 col-lg-4">
                                    <div className="card m-2 text-white">
                                        <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt="Asian" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-white">Japanese</h5>
                                        </div>
                                    </div>
                                </div>  
                            </div> : 
                            <div className="d-flex flex-wrap">
                               { searchArray && searchArray.map((item)=> 
                                        <FoodsCards item={item}/>
                                )}

                            </div>
                            }
                       </div>
                    </div>
                </div>
            </div>
            
            <br/>
            <Footer />
        </>
    )
}

export default Search