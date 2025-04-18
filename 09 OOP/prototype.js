// Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.
// Note: The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.

function multipleBy5(num){
    return num*5;
}

multipleBy5.power=2


console.log(multipleBy5(5));
console.log(multipleBy5.power);  //behavior of object
console.log(multipleBy5.prototype);

function createUser(userName,score){
    
}