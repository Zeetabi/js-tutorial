// array specific loops

//for of loop
const arr = [1,2,3,4,5]
//for (const element of object) {      //here object means for wihich element we want to implement loop on here it is arr
  //  } and element array element variable

  for (const num of arr) {
   // console.log(num);// prent all element of array
  }
  const greetings = " hello"
  for (const greet of greetings) {
    //console.log(`each char is${greet}`);
//returns 
// each char is 
// each char ish
// each char ise
// each char isl
// each char isl
// each char iso

  }
//map is an object is in key and value pair
  const map = new Map()
  map.set('state','uttar paradesh');
 // console.log(map);//Map(1) { 'state' => 'uttar paradesh' }
//   maps are unique and give value in order they are stored

for (const [key,value] of map) {// we destructure the array and can extract key and bvalues separately
    console.log(key);//state
}

const myObject = {
    'game1':'gofo',
    'game2': 'stupidman',
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);// object can be itrate like this method but map can use for of loop
// } results in error