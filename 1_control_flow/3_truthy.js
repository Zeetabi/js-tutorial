const userEmail = "hiit@gmail.ai"// it is a truthy value
//const userEmail = ""// empty string is a falsy value

if(userEmail){
    console.log("got usermail:");
}
else if(userEmail.length === 0)
{
    console.log("dont have user email");

}

// falsy value => false, 0, -0, ""(empty string), 0n(in big int), null, undefined, NaN(not a number)
// truthy valye => true, [](empty array), "0"(zero within string), 'false', " "(space), {}, function(){}

const emtObj ={}
if(Object.keys(emtObj).length === 0){//convert the obj into an array then use array length property
    console.log("obj is empty");
}

//Nullis Coalescing Operator (??): null ,Undefined (keywords)
let val1;
// val1 = 5 ?? 10
val1 = undefined ?? 10// if errror occurs then it handle use
 // = null ?? 10// when we work with db so when we dont get value then we can assign null or number if it comes
// console.log(val1);

//terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");

//both op are different