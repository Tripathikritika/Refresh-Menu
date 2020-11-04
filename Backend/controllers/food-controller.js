const FoodsData = require('../models/Foods')

const getFoods = async( req , res ) => {
    FoodsData.find()
         .then((Foods) => res.status(200).json(Foods))
         .catch((err) => res.status(400).json({message:"Failed" }))
}

module.exports = { getFoods }