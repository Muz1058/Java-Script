// //Arrays declaration

// const myArr=[1,2,3,4,5]
// const myName=["abc",'xyz']
// const myArr2=new Array(1,2,3,4,5)

// // Note ------------------>>> Array always allow shallow copy in JS 
// myArr.push(6); //1,2,3,4,5,6
// myArr.push(8); //1,2,3,4,5,6,8

// myArr.pop() ;//1,2,3,4,5,6

// myArr.unshift(9);  //9,1,2,3,4,5,6

// myArr.shift();     //1,2,3,4,5,6

// console.log(myArr.includes(9));  //false

// console.log(myArr.indexOf(9));  //  -1

// const newArr= myArr.join();

// console.log(newArr);  //1,2,3,4,5,6
// console.log(typeof newArr);  //String


// /*
// In JavaScript, arrays are a special type of object.
// Arrays are actually instances of the built-in Array class, which is a subclass of Object.
// This means an array is an object with special properties for handling ordered data.
// */
// console.log(myArr);  //[ 1, 2, 3, 4, 5, 6 ]
// console.log(typeof myArr);  //object
// console.log(Array.isArray(myArr));  //true


// ------------SLICE,SPLICE--------------

const arr=[1,2,3,4,5];
console.log("Original Array : ",arr);  //Original Array :  [ 1, 2, 3, 4, 5 ]

const aslice=arr.slice(1,3);  

console.log("slice : ",aslice);   //  slice :  [ 2, 3 ]
console.log("Array After Slice : ",arr);//  Array After Slice :  [ 1, 2, 3, 4, 5 ]

const asplice=arr.splice(1,3);
console.log("splice : ",asplice);   //   splice :  [ 2, 3, 4 ]

console.log("Array After Slice : ",arr);   //  Array After Slice :  [ 1, 5 ]




 



