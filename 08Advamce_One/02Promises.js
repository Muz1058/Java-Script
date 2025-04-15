/*The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

*/


//creation
const promiseOne= new Promise(function(resolve,reject){
    //Do an async task
    //DB Calls, cryptoGraphy, network

    setTimeout(function(){
        console.log("async task is completed");
        resolve()
    },1000)
});

//CONSUPTION


// resolve connection .then()

promiseOne.then(function(){
    console.log("Promise consumed");
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 Resolve");
})



const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"JS",email:"JS@example.com"})

    },1000)
})


promiseThree.then(function(user){
console.log(user );
})


const promiseFour=new Promise(function(resolve,reject){
setTimeout(function(){
    let error=true;
    if(!error){
        resolve({username:"java",  password:"123"})
    }
    else{
        reject("Error Somthing went wrong")
    }
},1000)
})


promiseFour
.then((user)=>{
    console.log(user);
    return user.username;

}).then((myusername)=>{
console.log(myusername);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is either resolve or rejected");
})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"java5",  password:"123"})
        }
        else{
            reject("Error Five Somthing went wrong")
        }
    },1000)
})


async function consumePromiseFive() {
 try{
    const response=  await promiseFive
    console.log(response);
 }
 catch(error){
    console.log(error);
 }
}

consumePromiseFive()

// promiseFive.then(function(){

// }).then(()=>{

// }).catch(()=>{

// }).finally(()=>{

// })


async function getAllUser() {
 try{
    const response=await  fetch("https://jsonplaceholder.typicode.com/users")

    const data=await response.json()
    console.log(data);
 }
 catch(error){
console.log("E::",error);
 }
}
getAllUser()