const user={
    username :"abs",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username= "xyz";
// user.welcomeMessage();

//console.log(this);

// function chai(){
//     console.log(this);
// }

const chai=()=>{
    console.log(this);
}
//chai()

//const addTwo=(num1,num2)=>( num1+num2)
console.log(addTwo());

const addTwo=(num1,num2)=>({user:"hit"})


