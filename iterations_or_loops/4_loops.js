const myObject = {
    js:'javascript',
    cpp:'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

//forof loop cant be used by objects we use for in loop
for (const key in myObject) {
// console.log(key);
//js
// cpp
// rb
// swift

 //console.log(`${key} shortcuts is for ${myObject[key]}`);
//  js shortcuts is for javascript
// cpp shortcuts is for c++
// rb shortcuts is for ruby
// swift shortcuts is for swift by apple   

}
//can for in loop be used in arrays as well
const programming = ['js','rb', 'c++'];
for (const key in programming) {
   // console.log(key);
//0 it returns no.s
// 1
// 2
}
const map = new Map()
  map.set('state','uttar paradesh');
  for (const key in map) {
   //console.log(key);// returns nothing no errror either as it is not iterable on map
  }

  