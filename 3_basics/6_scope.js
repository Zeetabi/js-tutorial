//scope
//let, const and var keywords



// problem arises when {} comes it defines the scope of the function
     
let a = 300// global scope                                              
if(true){
let a = 10// block scope
const b = 20
var c = 30
}
//console.log(a);
// console.log(b);
//scope is basically {} this
// it will show error coz its out of the scope
//console.log(c);// but it will print and thats the problem we have with the var keyword it works outof scope
// if another same var declare then it will over write the preivious one


//nested scope , and closure it is a js technique

function one(){
    const username = "zeet"
    function two(){
        const website = "feet"
        console.log(username);
    }
   // console.log(website);// it will not be printed as it is out of two functions results in error
   // two(); returns zeet if not here then nothing wil be printed
}
//one();// returns nothing

if(true){
    const username = "fish"
    if(username === "fish"){
        const website = " youtube"
        console.log(username + website);
 
    }
//console.log(website);// not defined results in error
}
//console.log(username);// not defined results in error

//+++++++++++++++++++ interesting example ++++++++++++++++//

function addone(num){
    return num + 1
}
console.log(addone(5)); // returns 6 not printed 

const add2 = function(num){
    return num + 2
}// this one can be called expression we can use function in this way too
console.log(add2(5));//returns 7 
// this is the term hoisting
// in this one we cannot acces the function before declaration like above one

