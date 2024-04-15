// const array='{"name":"Vaibhav","age" : 21, "Address":"Gonda","hobby":"Play"} ';

// const jsonobject=JSON.parse(array);
// console.log(jsonobject.name);

// const JSONOBJECT={name:"Vaibhav",age:23,city:"GKP"}
// const json=JSON.stringify(JSONOBJECT)
// console.log(json)
// console.log(typeof json)

// const objecttoconvert='{"name":" hdvfbs ", "age": 345, "hobby":["kdnf","dh","lkc"]}'
// const jsonobj2=JSON.parse(objecttoconvert)
// console.log(jsonobj2.name)




// API (Menu Card In A restaurent)
// Lots of option is there each option will give you a different order
// Now, Collection of That List = MENU CARD =API's
// OPtion in that list is a ENDPOINT 
// it operates like a menu card which serves the result as demanded by client to the chef through (server)

// Create a server in node js via EXPRESS.js

const express=require('express')
const app=express();
const db=require('./db')
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
app.post('./person',async (req,res)=>{
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
try {
    const data=req.body
    const newPerson=new Person(data);
    const sresponse=await newPerson.save();
    console.log("DAta saved")
    res.status(200).json(response)
}
catch(err){
console.log(err)
res.status(500).json({error:'Internal Server error'})
}

})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})