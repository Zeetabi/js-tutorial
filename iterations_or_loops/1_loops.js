//for loop

for(let i = 0; i < 10; i++){
const element = i;
if(element == 5){
    //console.log("5 is best no");
}
//console.log(element);
}

for(let i= 0; i < 5; i++){
    //console.log(`outer loop ${i}`);
    for(let j=0; j<=10; j++){
       // console.log(`innerloop ${j}, outer loog ${i}`);
       //console.log(`${i} * ${j} = ${i*j}`);

    }
}
let myArray = ["flash", "batman", "superman"]
for(let i = 0; i < myArray.length; i++){
    const element = myArray[i]
//    console.log(element);   
}

//break and continue keyword
for(let i = 0; i <= 20; i++){
    if(i===5) {
       // console.log("detected");
       // break; 5 not printed and out  of loop
       continue;//printed detected in 5 and not exit the loop
    }
    //console.log(`value of i is ${i}`);
}


