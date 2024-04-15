// function add(a,b){

//     return a+b
// }
// var add=reurtrn (a+b)
// var result = add(2,5)
// console.log(result)


// const objecttoconvert={
//     name:"Alice",
//     age:29
// }
// var json =JSON.stringify(objecttoconvert);
// console.log(json)

// var add= function(a,b){
//     return a+b;

// }
// // var add = (a,b) => {return a+b};
// var result=add(4,3);
// console.log(result)

// (function(){
//     console.log('MY name is VAIBHAV');
// })();


// Tutorial 4;

// function callback(){
//     console.log("Print my name ")
// }
// const add=function(a,b,callback){
//     var result = a+b;
// console.log("Result is "+result)
// callback();
// }
// add(3,4,callback);

// var add=function(a,b,vaibhav){
// console.log("Performs addition")
// var result=a+b;
// console.log("Result is: "+result);
// vaibhav();
// }
// // writing inline callback function
// // add(4,67,(function(){
// //     console.log("Answer is Printed");
// //     // console.log("Vaibhav its completed")
// // })) 
// add(55,33,()=> console.log("YES its working"))

// var fs =require('fs')
// var  os=require('os')
// var user=os.userInfo();
// console.log(user.username)
// fs.appendFile('Generate.txt',"Hi! My Name Is Vaibhav "+"!\n", ()=>{console.log("File created name is printed ")})
// // console.log(fs)

// var tut4 = require("./tut4.js");
// console.log("Server file is available");
// var result=tut4.age;
// var fun=tut4.addNumber(result,tut4.age+18);
// console.log("Age is "+result);
// console.log("You can have fun at the age "+fun);


// var _ = require('lodash');

// var array=["Name","Age",21,3,1,2,11,3,1,2,11,"VAibhav","Ok"]
// var p=_.uniq(array)
// console.log(p)
// console.log(_.isString('21'))