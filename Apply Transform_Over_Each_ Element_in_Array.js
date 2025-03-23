var map = function(arr, plusone) {
    let result=[];

    for(let i=0;i<arr.length;i++){
        result.push(plusone(arr[i],i))

    }
return result;
};

const arr=[1,2,3];

const plusone=function(a){return a+1;}
console.log(map(arr,plusone))