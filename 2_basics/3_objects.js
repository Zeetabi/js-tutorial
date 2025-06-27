//singleton means one object when created using constructor 
//Object.create using constructor singleton 
//object literals
const mySym = Symbol("key1")//symbol declaration and use it in object


const jsUser ={
name: "hiit",
age: 18,
location: "jaipur",
[mySym] : "mykey1",//it is inside the sq braket
email: "hiit@gmail.com",
isLoggedIn: false,
 }
// //access user
// console.log(jsUser.email);//it is limited as some literals such as namae can be written in qoutes like "name": "hiit"
// console.log(jsUser["email"]);// it can only be accessed using sqaure method
// console.log(jsUser[mySym]);// it can be used but not as a symbol
// //mykey1
// console.log(typeof jsUser[mySym]);//return string no quotes

// jsUser.email = " hihhj"

// Object.freeze(jsUser);// it freezes and no chages happends and no error occurs too
// jsUser.email = "ccccccc"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("heloo user");
}
jsUser.greeting2 = function(){
    console.log(`heloo user, ${this.name}`);
}

console.log(jsUser.greeting);//  refers to a [Function (anonymous)] 
console.log(jsUser.greeting());// returns undefine
console.log(jsUser.greeting2());// returns undefine
 