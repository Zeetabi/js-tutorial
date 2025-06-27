const tinderUser = new Object()// singleton user
//const tinderUser ={} // non singleton object

tinderUser.id = "12k3"
tinderUser.name = "samm"
tinderUser.isLoggedIn = false
console.log(tinderUser);// return { id: '12k3', name: 'samm', isLoggedIn: false }

const regularUser = {
    email: "email@gamial.com",
    fullname: {
        userfullname:{
            firstName: "bob",
            lastName:"chacha"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName);//bob

console.log(regularUser.fullname.userfullname.lastName);//chacha

const obj1 = { 1:"a",2: "b"}
const obj2 = { 3:"a",4: "b"}
//const obj3 = { obj1, obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({},obj1,obj2);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } merge object we assign empty object as target 
//assign(EventTarget, source) we basically put all sources into target object
const obj3 = {...obj1, ...obj2}// spread operator we use this mostly
console.log(obj3);

const user3 = [
    { 
        name:"gogg",
        email:"gogo@gmail.com"
    }
    ,{

    name:"toto",
    email:"toto@gmail.com"
    }
]

console.log(user3[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));//returs keys inside the tinderuser obj
console.log(Object.values(tinderUser));//returs keys' values inside the tinderuser obj
console.log(Object.entries(tinderUser));//returs [ [ 'id', '12k3' ], [ 'name', 'samm' ], [ 'isLoggedIn', false ] ]


// toto@gmail.com
// { id: '12k3', name: 'samm', isLoggedIn: false }
// [ 'id', 'name', 'isLoggedIn' ]
// [ '12k3', 'samm', false ]
