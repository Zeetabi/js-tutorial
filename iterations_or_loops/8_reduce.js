// reduce() method it returns the sum of array number elements like 1,2,3,4returns 10

const myNums = [1,2,3,4]
const myTotal = myNums.reduce((acumulator, current_value) =>{
        //console.log(`acc:${acumulator} and current value: ${current_value}`);
// acc:0 and current value: 1
// acc:1 and current value: 2
// acc:3 and current value: 3
// acc:6 and current value: 4

    return acumulator + current_value

},0//it its initial value
)
//console.log(myTotal);// 10
// mostly used in carts in online shopping instead of for each loops

const shoppingCart = [
{
    itemName :'js course',
    price: 999
},
{
    itemName :'python course',
    price: 2999
},
{
    itemName :' dsa course',
    price: 1999
}
];

//add all price in shopping cart using reduce method
const shopingCost = shoppingCart.reduce( (acc,crr_val) => {
    return acc + crr_val.price//we can access object key but any parameter name like here it is crr_val but key must be same 
},0)

//console.log(shopingCost);//5997 total cost


