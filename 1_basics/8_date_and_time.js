//dates

let myDate = new Date()
// 
let myCreatedDate = new Date(2023, 0 ,23, 5, 3)
// console.log(myCreatedDate);//2023-01-23T00:00:00.000Z
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString());//1/23/2023, 5:03:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1750831642483 ms
// console.log(Math.floor(Date.now()/1000));//1750831642 s

let newDate = new Date()
// console.log(newDate);//2025-06-25T06:14:27.250Z
// console.log(newDate.getMonth()+1);//6 
// console.log(newDate.getDay());//3

// console.log(`${newDate.getDay() } is today `);

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));// we can customize how weekdays will look

