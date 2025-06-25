//data types are of two types based on how data is stored in the memory and can be accessed
// such as primitive and non primitive

//primitive
// 7 types: String, Number , Boolean, null(it means empty not 0) , 
// undefined (no value assined), Symbol(fro making components unique), BigInt\
// js is dynamically typed as we dont specify the datatypes 
const score = 100;
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; //=> it is basically undefined
const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);// bothe are not same they are unique
const bigNumber = 12121212121212121n;


/*
reference type or (non preimitive)
// Array, Objects, Functions
*/
const heros =["tippi", "tappa", "toppo"];// array

let myObj= {// object
    name:"xeet",
    age:21,

}
// const myFunction = function(){
// console.log("hii function");
// }

// console.log(typeof bigNumber);
// console.log(typeof score);
// console.log(typeof myObj);
// console.log(typeof myFunction);// returns function but iin reality its a function object
// console.log(typeof heros); //= returns onject

//+++++++++++++++++++++++++++++++++++++++++++++++++
// two types of memory : stack (primitive type), Heap (Non-primitive)
// in stack copy of the original changes not original but 
// in heap it gives reference of the original so it chnages in the original

let myYoutubename = "hiii.com"  //=> is is a stack 

let anotherName = myYoutubename;
anotherName ="chai aur code"
console.log(myYoutubename);//=> gives hii.com
console.log(anotherName);//=> chai aor code means copy is change not original

let user1 = {
    email: "email@google.com",
    upi: "user@byt"
}// heap memory
let user2 = user1;// both refer to same value in the memory if one of it make changes then original value changes

user2.email ="newemail@google.com"
console.log(user1.email);
console.log(user2.email);// both results in same value

