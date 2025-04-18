// const user={
// userName :"javaScript",
// age:"10",
// signedIn:true,


// getUserDetails: function(){
//     //console.log("Got user details from DB");
//    // console.log(`User Name ${this.userName}`);
//    console.log(this);   //current object
// }
// }

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);  //empty object


//constructor

function User(userName,age,signedIn) {
    this.userName=userName;
    this.age=age
    this.signedIn=signedIn
    
    return this;
}

const userOne=new User("JS",10,true);
const userTwo=new User("java",20,false)


// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor)
console.log(userOne instanceof User)

