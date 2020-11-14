const Foods = require("../models/Foods");
const FoodsData = require("../models/Foods");

const getFoods = (req, res) => {
  FoodsData.find()
           .then((Foods) => res.status(200).json(Foods))
           .catch((err) => res.status(400).json({ message: "Failed" }));
};

const getEachFoodDetails = (req,res) => {
  FoodsData.findOne({id : req.params.id})
            .then((result) => res.json(result))
            .catch((err) => console.log(err))
}

const searchFoodItem = async ( req, res )=> {
  try{
    const filteredName = req.query.filteredName.toLowerCase()
    let foods = await FoodsData.find() 
    let searchedResult = foods.filter((item)=> (item.title.toLowerCase().includes(filteredName)) || (item.cuisine.toLowerCase().includes(filteredName)) )
    res.send(searchedResult)
    
  }
  catch(err){
    res.status(400).send(err.message)
  }
}

const filterItems = async ( req,res)=>{
  try{
    let filterData = {}
    if( req.query.type ){
      filterData["type"] = req.query.type
    }
    if( req.query.cuisine ){
      filterData["cuisine"] = req.query.cuisine
    }
    const food = await FoodsData.find(filterData)
    res.send(food)
  }
  catch(err) {
    res.status(400).send(err.message)
  }
}
module.exports = { getFoods , getEachFoodDetails ,searchFoodItem,filterItems};