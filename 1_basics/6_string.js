const name = "hiit-etc"
const repoCount = 50

// console.log(name + repoCount +" value");// not modern syntax

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
// instead of using + we use place holders it is modern way
const gameName = new String('xeet-etsjkj');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
 console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('e'));

// const newString = gameName.substring(0,3)
// console.log(newString);

const anotherString = gameName.slice(-11,7)
console.log(anotherString);

const newString1 = " name  "
console.log(newString1);
console.log(newString1.trim());//eleminates white space in start and end both

const url = "https://hiit.com?hit%20cahacha"
console.log(url.replace('%20','-'));
console.log(url.includes('set'));// search mentioned word if exist return true else false
console.log(gameName.split('-'));
