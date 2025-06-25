// const score = 400
// const balance = new Number(100.212)
// console.log(score);

// console.log(balance);
// console.log(balance.toString().length);// we can use this to find the no. of digits 
// console.log(balance.toFixed(2));// cutoff the decimals

// const otherNumber = 23.12521
// console.log(otherNumber.toPrecision(4));//it roundoff and focus on the no of digits

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In')); // indian number system comma place system




//++++++++++++++++++++++++++++++++++++ maths ++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-21));
// console.log(Math.round(4.5));// normal roundoff
// console.log(Math.ceil(4.2));// => //top value only
// console.log(Math.floor(4.2));// => //top value only
// console.log(Math.sqrt(144));
// console.log(Math.min(1,4, 41));
// console.log(Math.max(1,4, 41));
//console.log((Math.random()*10)+1);//values be in between 0 and 1 and always different now +1 results in always min 1 not 0 

const min = 10
const max = 20

console.log(Math.floor(Math.random() *  (max - min + 1)) + min);// formula 
//math.random give == value btw 0 to 1 
//we use this formula to get minimum 1 

