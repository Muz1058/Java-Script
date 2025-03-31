"strict use";   // treat complete code as new java script

//alert(3+3);  // error , as we are using node.js not a browser

// number     ==> has exactly 18,437,736,874,454,810,627 (that is, 2**64 means (64bit) 2**53 + 3) values
//                Note that there is both a positive zero and a negative zero
//bigint      ==>
// String     ==> single and double quote   maximum length of 2**53 - 1 elements
//boolean     ==> true/false
//null        ==> stand alone value
//undefined   ==> Any variable that has not been assigned a value has the value undefined.
//symol       ==> unique and immutable
//object      ==>(null is also an object)

//NaN         ==>Any operation involving NaN results in NaN, and NaN is never equal to anything—not even itself.



//typeof      ==> use to find Data Type


// Number::unaryMinus(x) in JavaScript (Concept)
console.log(-5);   // ✅ -5
console.log(-(-5)); // ✅ 5
console.log(-0);   // ✅ -0
console.log(-(-0)); // ✅ 0
console.log(-"42"); // ✅ -42 (string converted to number)
console.log(-true); // ✅ -1 (true → 1, then negated)
console.log(-false); // ✅ -0 (false → 0, then negated)
console.log(-null); // ✅ -0 (null → 0, then negated)
console.log(-undefined); // ✅ NaN (undefined can't be converted to number)
console.log(-"hello"); // ✅ NaN (non-numeric string → NaN)

