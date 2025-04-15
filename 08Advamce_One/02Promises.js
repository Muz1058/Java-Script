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


