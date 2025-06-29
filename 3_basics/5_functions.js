//functions in js

// console.log("z");
// console.log("e");
// console.log("e");
// console.log("t"); // if i have do this 5 or more times it will be not efficient so 
// we wrap it up into a function use it whenever and wherever i want
 
function sayMyName(){
console.log("h");
console.log("i");
console.log("s");
console.log("t");
console.log("o");
console.log("r");
console.log("y");
} 

// sayMyName();

// function add2Numbers(number1, number2){//parameters
//     console.log(number1 + number2);
// }
function add2Numbers(number1, number2){//parameters
   let result = number1 + number2
   return result // function returns result
}
 //add2Numbers();// no argument returns NaN
 const results = add2Numbers(3,7);// returns 10

 //console.log("result: ", results);// returnss result:  undefined after redefining the function using return 
 // and now it returns result:  10

 //functions returns only then we can use it to print and store it i another variable

 function loginUserMessage(username){
    return `${username} just logged in`
 }

 loginUserMessage("zeet");// will not print coz we didnt console it
//  console.log(loginUserMessage("zeet"));//zeet just logged in
//  // if no value is passed then it will return undefined but if empty then it just print 
//  console.log(loginUserMessage(""));// just logged in (empty string) 
//  console.log(loginUserMessage());// undefined just logged in (no argument passed)

 function loginUserMessage(username){
    if(!username){
        console.log("plz enter name");
        return
    }
    return `${username} just logged in`
 }
//  console.log(loginUserMessage());

//in shopping cart we dont know the no. of arguments going to be

function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2,20,10)); //no. of items in cart it adds only returns first argument
// we use (...) rest operators

function calculateCartPrice(...num1){
    return num1
}//returns [ 2, 20, 10 ] in an array
function calculateCartPrice(val1,val2,...num1){
    return num1
}//returns [ 10 ] only return num1 not val1 and val2 first and 2nd valu are in val1 and val2


const user = {
    username : "zeet",
    price : 199
}

function handleObject(anyobject){// we can pass anyobeject not only user object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    // we have to check that what key we are extracting is available in object in this case it is price and username
}

handleObject(user);// we have to pass that specific object in this case user object
//it reuturns => Username is zeet and price is 199
//or we can directly pass the object 
handleObject({
    username: "gogo",
    price: 400

})//Username is gogo and price is 400

//we can pass arrqy to functions too
function returnSecondValue(getArray){
    return getArray[2] //returns s2nd value of array
}

const myArray = [200,100,300]
console.log(returnSecondValue(myArray));//we can create array and then pass it to function or
console.log(returnSecondValue([100,200,400]));// we can also directly pass an array 

