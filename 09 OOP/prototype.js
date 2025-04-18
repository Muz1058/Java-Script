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
    this.userName=userName;
    this.score=score;
}

createUser.prototype.incremennt=function(){
    this.score++;
}


createUser.prototype.printMe=function(){
    console.log(`Price : ${this.score}`);
}

const chai=new createUser("chai",5)
const tea=new createUser("Tea ",25)


chai.printMe()




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/