/*
let score=null;

console.log(typeof(score));


let valueInNumer=Number(score);

console.log(typeof valueInNumer);

console.log(valueInNumer);
*/


//"33"       ==>33
// "33ab"    ==>NaN
// true =>1,false=>0

/*
let isLoggedIn=1;
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.table([isLoggedIn,booleanIsLoggedIn]);
*/

let isLoggedIn="a";
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.table([isLoggedIn,booleanIsLoggedIn]); 

// 1       ==>true,   0==>false
// ""      ==>false
// "abc"   ==> true

let sumnumber =33;
let stringNumber= String(sumnumber);
console.table([sumnumber ,stringNumber]);
console.table([typeof(sumnumber) ,typeof(stringNumber)]);

console.log("stringNumber : ", stringNumber);



let str1="hello";
let str2=" world";
console.log(str1+str2);// hello world


console.log("1"+2);  //12
console.log(1+"2");  //12
console.log("1"+2+2); //122

console.log(1+2+"2"); //32

console.log(true);  // true
console.log(+true);  //1
console.log(-true);  //-1
console.log(+""); //0
console.log(-""); //-0


let gameCounter =100;

console.log(gameCounter); //100
console.log(++gameCounter); //101
console.log(gameCounter);   //101
console.log(gameCounter--); //101
console.log(gameCounter);   //100