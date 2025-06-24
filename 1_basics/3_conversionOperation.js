let score = true
 
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score) // Number is a datatype we are doing type conversion
// console.log(typeof valueInNumber);
// console.log(valueInNumber);// opt Nan is a value 
// "33" => 33
// "33bc"=> NaN
// true => 1; false => 0

let isLoggedIn = "";
let booleanIsLoggedIN = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIN);
//   1 = true; 0 => false
// "" => false
//  "hii" => true

let someNumber = 33
 let stringNumber = String(someNumber);
//  console.log(stringNumber);
//  console.log(typeof stringNumber);

 // converted to string

//  ******************** Operation in js *****************

let value = 3
let negValue = -value
// console.log(negValue); 

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2%2);

let str1 = "hiii"
let str2 = " zeet"
let str3 = str1 + str2;
// console.log(str3);
// // its simple string addition

// console.log("1"+2); //=>12
// console.log(1+"2"); //=>12 but not converted 
// //  this is complex
// console.log("1"+ 2 +2);// first is strring so all of it will be treated as string =>122
// console.log(1+2+"3");// as string is at last it will only be treated as string not other =>33 

// console.log(3 + 4 * 5 % 3);// not good practice use parenthesis
// console.log((3+4) * 5 % 3);


// console.log(+true);//=>1
// //console.log(true+);//=> error not possible
// console.log(true);//=> true
// console.log(+"");//=> true , not good practice

let num1, num2, num3
num1 = num2 = num3 = 2+2 // not good practice (2+2)

let gameCounter = 100
gameCounter++; // =>101 
// console.log(gameCounter);
++gameCounter;// =>101
// console.log(gameCounter);



