const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
    id : {
        type : String,
        required : true
    },
    title:{
        type : String,
        required : true
    },
    category : {
        type:String,
        required : true
    },
    details : {
        type:String,
        required : true
    },
    ingredients : {
        type : String,
        required : true
    },
    food_link : {
        type : String,
        required : true
    },
    amount : {
        type : String,
        required : true
    },
    cuisine : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    location : {
        type : String
    },
    best_offers : {
        type : Boolean,
        required : true
    },
    addons : {
        type  :Boolean,
        required : true
    },
    addons_value : {
        type : Array,
        required : true
    }
}, 
{
    versionKey : false
}
)

module.exports = mongoose.model('RenderFood' ,foodSchema )