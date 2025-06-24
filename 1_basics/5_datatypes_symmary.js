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
console.log(id === anotherId);// bothe are not same they are unique
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
const myFunction = function(){
console.log("hii function");
}

console.log(typeof bigNumber);
console.log(typeof score);
console.log(typeof myObj);
console.log(typeof myFunction);// returns function but iin actually its a function object
console.log(typeof heros); //= returns onject