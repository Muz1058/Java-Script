
var createCounter = function(n) {
    var count=n;
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

