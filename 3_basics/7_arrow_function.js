// this keyword is used in arrow functions
const user = {
    username : "fisha",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)// this keyword is used for current context
        console.log(this);// it returns current object {username: 'fisha',price: 999, }
    }

}
// user.welcomeMessage // it runs but not prints anything
// user.welcomeMessage();//returns fisha, welcome to the website
// user.username = "newname"
// user.welcomeMessage();//newname, welcome to the website

//console.log(this);// context is {} empty ,results in empty object

//in browser, we have window as global object

// // function chai(){
// //     console.log(this.username);//returns undefined ,we cant use this here
// // }
// chai()

// const chai = () => { // remove function keyword and add an arrow then it would become arrow functions
//     let username = " hit"
//     console.log(this.username);//  returns undefined, but we can still not use this keywords
//     console.log(this);//returns {} empty object
// }
// chai();// returns undefined


//++++++++++ pure arrow functions
// () => {} is an arrow function

const add2 = (num1, num2) => { // it is explicit  in this we use return keyword and within {} curly braces 
    return num1 + num2
}
const add3 = (num1, num2) =>  (num1 + num2) // it is implicit return and it must be in one line


console.log(add2(3,6));
console.log(add3(9,6));
