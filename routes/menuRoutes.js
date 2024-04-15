const express=require('express')
const router=express.Router();


const Menu = require ('./../models/menu')

router.get('/',async(req,res)=>{
    try{
    const data = await Menu.find();
    console.log("Fetched data")
    res.status(200).json(data)
}
catch(err){
res.status(504).json({err:"Internal server error"})
}
})

router.post('/',async (req,res)=>{
try{
const data2=req.body;
const displaymenu=new Menu(data2);
const response1=await displaymenu.save()
console.log('Data saved')
res.status(200).json(response1)

    }
    catch(err){
        console.log('Error in saving the data')
        res.status(500).json({error:'Internal Server error'})
    }
})

module.exports=router;

// dhyaan rhe agar internal sever error  post mein aara ho toh enum defined constrainnt jrur check kro. mey be whn defined na ho jo entry kr rhe ham raw mwin isliye error aarah ho.