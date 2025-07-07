const coding = ['js', 'ruby', 'java', 'c++', 'python']


const values = coding.forEach( (item) => {
    //console.log(item);// it will print as usual
   // return item 
   // // if we use return to return the value but it still returns only undefine coz it doesnt retrun values
})
//console.log(values);//if we want to store this item value it would return 'undefined'
// means foreach loop doesnt return any value

const myNums = [1,2,3,4,5,6,7,8,9,10]

myNums.filter( (num) => num > 4)// it is also a call back //it we want to store in num => and
// it returns  num should be greater than 4
//but it will not return anything we have tot store it in some variable and console it
// const newNum = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNum);//[] it returns empty array bcoz it becomes scope so we have to use return keyword
// [ 5, 6, 7, 8, 9, 10 ]

// if we use for each loop 
const newNum = []
myNums.forEach( (num) =>{
    if(num > 4){
        newNum.push(num);
    }
})
//console.log(newNum);//[ 5, 6, 7, 8, 9, 10 ]

const books = [
    {title: 'book1', genre:'fiction', publish:'1920'},
    {title: 'book2', genre:'non-fiction', publish:'1940'},
    {title: 'book3', genre:'history', publish:'1943'},
    {title: 'book4', genre:'fiction', publish:'1999'},
];

//const userBooks = books.filter( (bk) => bk.genre === 'history');
const userBooks = books.filter( (bk) => bk.publish <= '2000' && bk.genre === 'history');// we can add multiple filter conditions
//returns
// [
//   { title: 'book1', genre: 'fiction', publish: '1920' },
//   { title: 'book2', genre: 'non-fiction', publish: '1940' },
//   { title: 'book3', genre: 'history', publish: '1943' },
//   { title: 'book4', genre: 'fiction', publish: '1999' }
// ]
console.log(userBooks);//[ { title: 'book3', genre: 'history', publish: '1943' } ]


