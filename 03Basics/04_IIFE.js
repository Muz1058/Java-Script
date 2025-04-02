/*
Use cases of IIFEs include:

Avoiding polluting the global namespace by creating a new scope.
Creating a new async context to use await in a non-async context.
Computing values with complex logic, such as using multiple statements as a single expression.
*/

(function chai() {
    console.log(`DB one connected`);
})();

//semicolon is essential to end context
(()=> {
    console.log(`DB Twe connected`);
})();


//named IIFE
((name)=> {
    console.log(`DB Three connected ${name}`);
})("chai");