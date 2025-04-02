/*
//singelton
Object.create()
*/


//Object literels
 const mySym= Symbol("key1");
const jsUser={
    user:"abc",
    "full name":"abc xyz",// cant't accessed by dot (.) method ,square bracket notation will be used for it's access
    [mySym]:"myKey789",  //Symbol in objects
    age: 18,
    location: "UK",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// //-------------------dot Notation------------------------
// console.log(jsUser.email);  //abc@gmail.com

// //------------------Bracket Notation----------------------

// //console.log(jsUser[email]);  //error  ,must be string in square brackets
// console.log(jsUser['email']); //abc@gmail.com
// console.log(jsUser["full name"]);  //abc xyz

// //-------------------Symbol in Objects-------------------------------

// console.log(jsUser[mySym]);   //myKey789
// console.log(typeof jsUser[mySym]);  //string

// //------------------------Over eritting values of objects-------------

// jsUser.email="Xyz@gmail.com";  //will overwrite email value


// //--------------------Object Freeze Method-----------------
// Object.freeze(jsUser);  //will make object immutable
// jsUser.email="aaa@gmail.com";  //will not show any run time error and oject will be same ,without change

// console.log(jsUser);

// /*
// {
//   user: 'abc',
//   'full name': 'abc xyz',
//   age: 18,
//   location: 'UK',
//   email: 'Xyz@gmail.com',  //unchanged after freeze
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'myKey789'  //Showing that mySym is Symbol
// }
// */


//---------------------Functions in Objects---------------------

jsUser.greeting= function(){
  console.log("Hello Js User");
}
jsUser.greeting2= function(){
  console.log(`Hello ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());