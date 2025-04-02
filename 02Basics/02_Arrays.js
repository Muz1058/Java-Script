 const marvelHeros=["thor","Iron man","SpiderMan"]
 const dc=["Super MAn","Flash","Batman"]

// marvelHeros.push(dc);  //in JS array can store data with different data types even arrays,
// //                     //in this case marvelHeros will store dc as third element of array
// console.log(marvelHeros[3][0]);  // we can access eash element of pushed array by marvelHeros[3][1] 
                           
// console.log(marvelHeros);

//--------------Array Concatination---------------------------
//    .concat method merge two existing arrays and will produce new resultant array
 
const concatenatedHero= marvelHeros.concat(dc);

//console.log(concatenatedHero);

//-----------------Spread operator-----------------------

const spreadHeros =[...marvelHeros,...dc]
console.log(spreadHeros);