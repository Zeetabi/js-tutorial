const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.map( (num) => num +10) 
//console.log(newNums);
//[
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]
myNums.forEach( (num) => {
    num = num+10
    console.log(num)
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
})

// // chaining
// const newNum = myNums.map().map() // we can use two maps()
const newNum = myNums.map((num) => num * 10).map( (num) => num+1)
// we can add filterstoo here like .filter( (num) => num >=40) returns only no greater than 40

console.log(newNum);

// [
//   11, 21, 31, 41,  51,
//   61, 71, 81, 91, 101
// ]