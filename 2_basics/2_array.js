const marvel_heros = ["thor", "ironMan", "spiderman"];
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);//this would not merge two , they just consider another array as element
//[ 'thor', 'ironMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// // NOT GOOD WAY TO MERGE

// const allHero = marvel_heros.concat(dc_heros);
// console.log(allHero);//now all arrays merged into one
//[ 'thor', 'ironMan', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]//... spread operator to merge arrays
console.log(all_new_heros);//[ 'thor', 'ironMan', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3, [4,5,6],7,[8,9,[1,2]]]

const real_another_array = another_array.flat(Infinity);//flat() spread all arrays elements 
console.log(real_another_array);