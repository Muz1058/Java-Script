
var createCounter = function(n) {
    let count=n;
    return function() {

        return count++;
    };
};

 
 const counter = createCounter(-2)
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());

