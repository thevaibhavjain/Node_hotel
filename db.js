const mongoose=require('mongoose')
// const   
// define the mongobd connection URL

const mongoUrl='mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true})
// Get the Default connection
// Mongoose maintains a default connection object representing the MongoDB connection 
const db=mongoose.connection;

// Event listeenr and handler

db.on('connected',()=>{
    console.log("Connected to mongodb serevr")

})
db.on('error',()=>{
    console.log("Error in connecting to sever")
})

db.on('disconnected',()=>{
    console.log("Disconnected from server")

})

// Export the Databse connection

module.exports=db;