const express=require('express')
const app=express();
const db =require('./db')
// Body parser jo receive ho raha hai postman se raw or wither form mein data milta hai ussey json object mein bdlne ke liye body parser use krte hain
const bodyparser=require('body-parser')
app.use(bodyparser.json());

const Person =require('./models/person')


app.get('/',function(req,res){
    res.send("Hi Vaibhav How are you")
})

app.get('/item',function(req,res){
    var items={
        name:"belt",
        type:"leather",
        length:"20cm"
    }
    res.send(items)
})



// Post route to add a person
// app.post('/person',(req,res)=>{
    // Save funvtioon no longer acceepts callback 
    // save kya krega Callback function call krega par is trh nhi work krta
    // quite complex and not good code readabiltiy   
//     const data=req.body
//     const newPerson=new Person(data);
//     // newPerson.name =data.name  //[primitive way to add data]
//     // newPerson.age=data.age     //[primitive way to add data]    
// newPerson.save((error,savedPerson)=>{
//     if(error){
//         console.log("Error")
//         res.status(500).json({error:'Internet server error'})
//     }   else{
//         console.log("Data saved succesfully");
//         res.status(200).json(savedPerson)
//     }
// })

// 2nd option
// Instead we do Async await 

app.post('/person',async(req,res)=>{
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

// Get person 
app.get('/person',async(req,res)=>{
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

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})