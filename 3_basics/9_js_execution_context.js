//javascript Execution Context EC
// whenever we give code to the js => it converts to global EC 
// it works on single thread
// Global Execution Context
// FUnction Execution Context
// Eval Execution COntext   in js
// how js code is executed
// it is executed in 2 phases
// 1st is Memory Creation Phase or creation phase 
// in this phase we allocate memory to variabolles only no execution
// 2nd phase is Execution phase
// in this code is executed
let val1 = 10
let val2 = 5
function addNum (num1, num2){
    let total = num1, num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
//1=> Global execution is also know as Global environment
// code is run using Global EC and it is allocaed to this 
// 2=> memory phase
// take variables name and put undefined in it
// val1 => store undefined
// val2 => store undefined
// addNum => store the function definition not undefined
// result1 => undefined
//result2 => undefined
// fisrt cycle is completed
// next phase is Execution phase
// in this val1 <= 10 store
// val2 <= 5 store
// result1 <=(stores) addNum => new EC (new varialble environment + execution thread)
// now this new EC starts a new cycle
// memory Phase
// val1, val2 => undefined
// total => undefined 
// execution context phase
// calculationa and processs
// num1=> 10, num2 => 5 and total =>15
// total is now return to global Execution COntext
// if all work is done the new EC is deleted 
// result2=>(stores)addnum => new EC (new varialble environment + execution thread)(sandbox)
// memory phase
// val1, val2 => undefined
// total => undefined 
// execution context phase
// calculationa and processs
// num1=> 10, num2 => 2 and total =>12
// total is now return to global Execution COntext
// if all work is done the new EC is deleted 

//call stack concept
//1st is global EC
// 2nd is any funciton such as one()
// executed and removed from stack
// if function is nested like one function calls another functions
// if one() function comes in call stack and it calls 2nd() function and then if it has another function it will call three()
// in sstack and execute it and remove three(), then two() and at last one() in nestion functions
