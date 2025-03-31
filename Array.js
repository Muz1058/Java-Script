//Filter Elements from Array

var filter = function(arr, fn) {
    let filteredArray=[],count=0;
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArray[count++]=arr[i];
        }
    }
    return filteredArray;
};

const fn=function(n){return n>10};
function firstIndex(n, i) { return i === 0; };

let arr=[10,20,30];
console.log(filter(arr,fn))

let arr1=[1,2,3];
console.log(filter(arr1,firstIndex))

const arr3 = [-2, -1, 0, 1, 2];
const plusOne = function (n) { return n + 1; };
console.log(filter(arr3, plusOne)); 

