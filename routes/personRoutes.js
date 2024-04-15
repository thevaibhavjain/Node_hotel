const express=require('express')
const router=express.Router()

const Person=require('./../models/person')

// router.post('/menu',async (req,res)=>{
//     try{
// const data2=req.body;
// const displaymenu=new Menu(data2);
// const response1=await displaymenu.save()
// console.log('Data saved')
// res.status(200).json(response1)

// // const Displaymenu=
//     }catch(err){
//         console.log('Error in saving the data')
//         res.status(500).json({error:'Internal Server error'})
//     }
// })

router.post('/',async(req,res)=>{
    try {
        const data=req.body  //Assuming the request body contain the Person data
        const newPerson=new Person(data); //Create a newperson document using mongoose model 
        const response=await newPerson.save(); //Save the newperson to the ddatabse  
        console.log("Data saved")
        res.status(200).json(response)
    }
    catch(err){
    console.log(err)
    res.status(500).json({error:'Internal Server error'})
    }
    })

router.get('/',async(req,res)=>{
        try {
            const data=await Person.find()
           
            console.log("DAta fetched")
            res.status(200).json(data)
        }
        catch(err){
        console.log(err)
        res.status(500).json({error:'Internal Server error'})
        }
    })

    router.get('/:workType',async(req,res)=>{
            try{
            const workType=req.params.workType //Extract the work type from url parameter
            if(workType=='chef'|| workType=='manager' || workType=='waiter'){
                const response =await Person.find({work:workType})
                console.log("Response fetched ,update successfully")
                res.status(200).json(response)
            }
            else{
                console.log("Invalid work type")
                res.status(404).json({error:"Invalid work tpye"})
            }
        }
            catch(err){
                console.log(err)
                res.status(500).json({error:"Internal Server error"})
        
            
        
            }
        })


module.exports=router