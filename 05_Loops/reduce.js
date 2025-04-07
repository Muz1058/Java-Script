// //accumulator = initial value
// //after first iteration accumulator= returned value

const muNums=[1,2,3]

// const myTotal=muNums.reduce(function(acc,curr){
//     console.log(`acc: ${acc} and  curr: ${curr}`);
//     return acc+curr;
// },0)
// /*
//   (function(acc,curr){
//     console.log(`acc: ${acc} and  curr: ${curr}`);
//     return acc+curr;
// })  this is accumulator

//   (0 )this is current value
// */
// console.log(myTotal);


//-------------------------Reduce method with arrow function---------

const myTotal=muNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal);


const coursePrice=[
    {
        name:"JS",
        price:1999
    },
    {
        name:"py",
        price:2999
    },
    {
        name:"java",
        price:3999
    }
]

const total= coursePrice.reduce((acc,item)=> acc+item.price,0)
console.log(total);