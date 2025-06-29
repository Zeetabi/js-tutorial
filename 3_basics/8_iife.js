//Immediately Invoked Function Expression (IIFE)
//when application runs this function execute immidiately

function chai(){
    console.log(`1db connected`);
}
chai();// this function executed immediatly 
// to prevent the pollution from global varialble so we write IIfe

(function chai(){//named iife
    console.log(`1db connected use iffe`);
})();
//() first parenthesis is function definition and second () is execution call and it is called iife
//problem arrises duw to global polution so to avoid it we use IIFE it is a fucntion code that execute immidiatly

// it needs to be end with semi colon or it will cause error

// we can write it using arrow function
// (() => {
//     console.log(`we are using arrow function`);
// })();
((name) => {// parameter passed
    console.log(`we are using arrow function ${name}`);//we are using arrow function riya
})("riya");
