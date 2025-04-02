 const marvelHeros=["thor","Iron man","SpiderMan"]
 const dc=["Super MAn","Flash","Batman"]

// marvelHeros.push(dc);  //in JS array can store data with different data types even arrays,
// //                     //in this case marvelHeros will store dc as third element of array
// console.log(marvelHeros[3][0]);  // we can access eash element of pushed array by marvelHeros[3][1] 
                           
// console.log(marvelHeros);

// //--------------Array Concatination---------------------------
// //    .concat method merge two existing arrays and will produce new resultant array
 
// const concatenatedHero= marvelHeros.concat(dc);

// //console.log(concatenatedHero);

// //-----------------Spread operator-----------------------

// const spreadHeros =[...marvelHeros,...dc];
// //console.log(spreadHeros);

// //----------------flat method------------------
// /*The maximum recursion depth
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. */
// const anotherAyyay=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// console.log(anotherAyyay);   //[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
//                             // Array in array inside another Array
// const real_another_array=anotherAyyay.flat(Infinity)

// console.log(real_another_array);
// //output 
// /*[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]*/

//------------------To Array Conversion--------------------------
console.log(Array.isArray("Abs"));   //false because "abs"  is String
console.log(Array.from("Abs"));      //will convert string to Array

console.log(Array.from({name: "xyz"}));  //#intresting 


//-------------------of Array method---------------------
const score1=100
const score2=2100
const score3=3100

console.log(Array.of(score1,score2,score3));  //will  produce array of score1,2,3