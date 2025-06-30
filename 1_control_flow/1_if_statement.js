//if statement
// if(condition==true){
// scope  }
const isUserLoggedIN = true
// if(isUserLoggedIN){
//     console.log("user logged in");
// }
// comparision operator
// < , > , <= , >= , ==(checks both sides are equal or not), !==, ===(compare both side and thier datatypes too)
// if(2=="2"){//here 2 num is not equal to '2' string here is when we needed === this  
//     console.log("equal");
// }
// if(2==="2"){//here 2 num is not equal to '2' string here is when we needed === this  
//     console.log("equal");
// }
// if(2 != 3){
//     console.log("both er not eq");
// }

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); results in error coz its out of scope

// short hand notation  in if else
const balance = 1000

//if(balance > 500 ) console.log("test"), console.log("test2"); //implicit  bad practice
//multiple conditions
// if (balance < 500){
//     console.log("less that 500")
// } else if(balance < 750){
//     console.log("less than 750");
// }
// else {
//     console.log("less than 1200")
// }

//logical operator
const UserLoggedIn = true
const debitCard = true
if(UserLoggedIn && debitCard){
    console.log("allow to buy courses");
}

const loggedInFromGoogle = true
const loggedInFromEmail = false
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user can logged in");

}
