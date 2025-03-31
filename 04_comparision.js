// console.log(2>1);  //true 
// console.log(2>=1); //true
// console.log(2<1);  //false
// console.log(2==1); //false
// console.log(2!=1);  //true

console.log("2">1);    //true
console.log("02">1);   //true

console.log(null >0);  //false
console.log(null ==0);  //false
console.log(null >=0);  //true

// The reason is that an equality check == and comparisions >,<,>=,<= work differently
// Comparisions convert null to a number, treating it as zero 0
// Tats is why console.log(null >0);  is false and console.log(null >=0); is true

// Double Equal
// Triple Equal (it compare both data type and value)

console.log("2"==2); //true
console.log("2"===2); //false