import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFilterFoodList ,toggleFilter} from '../Redux/FoodList/action'

function Filter() {
    const dispatch = useDispatch()
    const [type , setType ] = useState("")
    const [cuisine , setCuisine] = useState("")
    const typeArray = [ 'VEG','NON-VEG','CONTAINS-EGG']
    const cuisineArray = ['PAN-ASIAN','FUSION','ASIAN','WORLD CUISINE','UNIVERSAL','SOUTH INDIAN','JAPANESE','ORIENTAL','MEXICAN','NORTH INDIAN','ITALIAN','MIDDLE EASTERN','UNIVERSAL','313 cal | Low Calorie','422 cal | Low Calorie']
    
    const handleFilter = ( e ) =>{
        let findTypeItem = typeArray.findIndex((item) => item.toLowerCase() === (e.target.textContent).toLowerCase())
        let findCuisineItem = cuisineArray.findIndex((item) => item.toLowerCase() === (e.target.textContent).toLowerCase())
        // console.log((e.target.textContent).toLowerCase())
        if(findTypeItem >= 0 ){
            // console.log(typeArray[findTypeItem])
            setType(typeArray[findTypeItem])
        }
        else if(findCuisineItem >= 0){
            // console.log(cuisineArray[findCuisineItem])
            setCuisine(cuisineArray[findCuisineItem])
        }
    }
    const handleApply = () => {
        let q = ""
        if( type !== "" ){
            q += `type=${type}` 
            
        }
        if( cuisine !== ""){
            q += `&cuisine=${cuisine}`
        }
        dispatch(getFilterFoodList(q ))
        dispatch(toggleFilter())
    }
    const handleReset = () => {
        dispatch(getFilterFoodList( "type=reset"))
        dispatch(toggleFilter())
    }
    // console.log(filterItem)
    return (
        <>
            <div className="container" style={{position:"absolute",top:'40px',right:'-255px',zIndex:10}} >
                <div className="row">
                    <div className="col">
                        <div className="card" style={{width:'24rem'}}>
                            <ul className="list-group list-group-flush text-left">
                                <li className="list-group-item">
                                    <h6>Food Preference</h6>
                                    <h6 className="text-right" onClick={handleReset}>Reset Filter</h6>
                                    <div className="btn btn-light border border-dark rounded-pill m-2"  onClick={(e) => handleFilter(e)}>Veg</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2 mr-5" onClick={(e) => handleFilter(e)}>Contains-Egg</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2"  onClick={(e) => handleFilter(e)}>Non-Veg</div>
                                </li>
                                <li className="list-group-item m-3" >
                                    <h6>Cuisine</h6>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)} >313 cal | Low Calorie</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e ) => handleFilter(e)} >422 cal | Low Calorie</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)} >Mexican</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)}>Asian</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)} >Pan-Asian</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)}>Fusion</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)}>World Cuisine</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)} >AMERICAN</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)} >Japanese</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)}>South Indian</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)}>Oriental</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)}>North Indian</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)} >Italian</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)} >Middle Eastern</div>
                                    <div className="btn btn-light border border-dark rounded-pill m-2" onClick={(e) => handleFilter(e)} >Universal</div>
                                </li>
                                <li className="list-group-item" onClick={()=> handleApply()}>Apply () Dishes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter