//array
const myArr = [0, 1, 2, 3, 4]
const myHeros = ["shina", "mina", "tina"]

const myArr2 = new Array(1,2,3,4,5)// we give just values in parenthesis
console.log(myArr[3]);

//array methods

// myArr.push(6);//it used to add values in the array
// myArr.push(7);//it used to add values in the array
// myArr.pop(7);//it removes the last value in the array
// myArr.unshift(0);//it insert the valuein the start of the array and 
// // reshift the whole value but not good ways as it shift all elements
// myArr.shift();// its remove the first elemnt
// console.log(myArr.includes(0));//returns true if the elment is present
// console.log(myArr.indexOf(0));//if element not exist it returns negative one index

// const newArr = myArr.join();// it will convert the array into string and join the lements into one word
// console.log(newArr);
// console.log(typeof newArr);// return string


//slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)//it slice the array first include 2 include and thirsd not include (1,3) value 
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("c ",myArr);

console.log(myn2);
//slice and splice difference is that one doesnot changes in original array and other one does
//it is known as shallow and deep 


