// const { uniqueId } = require('lodash')
const mongoose=require('mongoose')

// We use monogoose to make model schema mongoose.schema
const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sour','sweet','spicy'],
        required:true
    }
,
is_drink:{
    type:Boolean,
    default:false,//agar user kuch nhi input store krta hai toh dagault value le lega 
    // required:true,
},
ingredients:{
    type:[String],
    default:[]
},
sale:{
    type:Number,
    default:0 //agar koi naya dish aaya ho toh auomatically 0 se start ho jyga
}

})


const Menu = mongoose.model('Menu',menuSchema)
module.exports=Menu;