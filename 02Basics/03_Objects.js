/*
//singelton
Object.create()
*/


//Object literels
 
const jsUser={
    user:"abc",
    "full name":"abc xyz",// cant't accessed by dot (.) method ,square bracket notation will be used for it's access
    age: 18,
    location: "UK",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(jsUser.email);  //abc@gmail.com
//console.log(jsUser[email]);  //error  ,must be string in square brackets
console.log(jsUser['email']); //abc@gmail.com
