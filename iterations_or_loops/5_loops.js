// for each loop
const coding = ['js', 'ruby', 'java', 'c++', 'python']

coding.forEach( function (item) {
   // console.log(item);
} )// it is callback funstion just remove the function name
//  and (parameter is basically elements of array)
// js
// ruby
// java
// c++
// python

// we can use arrow function
coding.forEach( (val) => {
   //  console.log(val);
    //same result above
} )

function printMe(item){
    //console.log(item);//return nother here but we use forech
}

coding.forEach(printMe);// now it prints
//above results

coding.forEach( (item, index, arr) => {//we can uss or pass various parameters in it 
//     console.log(item, index, arr);
//     js 0 [ 'js', 'ruby', 'java', 'c++', 'python' ]
// ruby 1 [ 'js', 'ruby', 'java', 'c++', 'python' ]
// java 2 [ 'js', 'ruby', 'java', 'c++', 'python' ]
// c++ 3 [ 'js', 'ruby', 'java', 'c++', 'python' ]
// python 4 [ 'js', 'ruby', 'java', 'c++', 'python' ]
})

const myCoding = [
    {languageName:'javascript',
        languageFileName: 'js'
    },
    {languageName:'java',
        languageFileName: 'java'
    },
    {languageName:'python',
        languageFileName: 'py'
    }
]//object in an array
//iterations on objectsinside of array

myCoding.forEach( (item) => {

  //  console.log(item.languageFileName);// now our itms are objects we can access it by using object dot method
// js
// java
// py
})

//we use this on db, db send an array we can get access to any property or fields