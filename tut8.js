const express=require('express')
const app=express();
const db=require('./db')
const bodyparser=require('body-parser')
app.use(bodyparser.json())

const Menu=require('./models/menu')
const Person=require('./models/person')

// import router modules for person
const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes); //Using the router

// import router module for menu
const menuRoutes=require('./routes/menuRoutes')
app.use('/menu',menuRoutes) //using th router
 
// I am writing this code now to check the next version commit learning commit
// app.get('/',function(req,res){
//     res.send("Hi Vaibhav How are you")
// })

// app.post('/menu',async (req,res)=>{
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

// app.get('/menu',async(req,res)=>{
// try{
// const data=await Menu.find()
// console.log("Data feched successfully")
// res.status(200).json(data)
// }
// catch(err){
//     console.log(err)
//     res.status(504).json({err:"Internal server error"})

// }})


// Get person 
// app.get('/person',async(req,res)=>{
//     try {
//         const data=await Person.find()
       
//         console.log("DAta fetched")
//         res.status(200).json(data)
//     }
//     catch(err){
//     console.log(err)
//     res.status(500).json({error:'Internal Server error'})
//     }
// })

// app.post('/person',async(req,res)=>{
//     try {
//         const data=req.body  //Assuming the request body contain the Person data
//         const newPerson=new Person(data); //Create a newperson document using mongoose model 
//         const response=await newPerson.save(); //Save the newperson to the ddatabse  
//         console.log("Data saved")
//         res.status(200).json(response)
//     }
//     catch(err){
//     console.log(err)
//     res.status(500).json({error:'Internal Server error'})
//     }
//     })

// app.get('/person/:workType',async(req,res)=>{
//     try{
//     const workType=req.params.workType //Extract the work type from url parameter
//     if(workType=='chef'|| workType=='manager' || workType=='waiter'){
//         const response =await Person.find({work:workType})
//         console.log("Response fetched ,update successfully")
//         res.status(200).json(response)
//     }
//     else{
//         console.log("Invalid work type")
//         res.status(404).json({error:"Invalid work tpye"})
//     }
// }
//     catch(err){
//         console.log(err)
//         res.status(500).json({error:"Internal Server error"})

    

//     }
// })


app.listen(4000,()=>{
    console.log('Server trunning on 4000')
})

