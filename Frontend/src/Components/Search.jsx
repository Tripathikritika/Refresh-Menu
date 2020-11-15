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
    const cuisineArray = ['Asian','Pan-Asian','Fusion','World Cuisine','Indian','Continental','447 cal | High Protein','575 cal | Low Calorie','Universal','South Indian','Oriental','Mexican','Middle Eastern','Japanese']

    useEffect(() => {
        if(searchItem !== ""){
            dispatch(getsearchFoodList( searchItem ))
            setSearchArray(searchData)
        }
        if( searchItem === ""){
            setSearchArray([])
        }
    }, [searchItem])

    useEffect (() => {
        setSearchArray(searchData)
    } , [searchData])

    return ( 
        <>
            <div div className={styles.mainDiv}>
                
                <div>
                    <div className={styles.bodyDiv}>
                       <div className="container">
                           <div className="row text-right">
                               <div className="col-12 ">
                                    <div className={`float-right ${styles.links} mb-2 `} onClick={() => dispatch(toggleSearch())} >
                                        Back To Menu
                                    </div>
                               </div>
                           </div>
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
                                                   <p onClick={() => setSearchItem("")} className = {styles.clearlinks}>Clear</p> 
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
                                    {cuisineArray.map((item)=>(
                                        <div className="col-12 col-md-6 col-lg-4" key={item} onClick={() => setSearchItem(item)}>
                                            <div className="card m-2  text-white">
                                                <img src="./SearchPage.png" className={`card-img img-fluid ${styles.imgSearch}`} alt={item} />
                                                <div className="card-img-overlay">
                                                <h5 className="card-title text-white">{item}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>:
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