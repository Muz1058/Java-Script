const coding=["JS","C++","Java","SQL"]

coding.forEach(index => {
    //console.log(index);     
});

function print(index){
   // console.log(index);
}
coding.forEach(print)


coding.forEach((item,index,arr)=>{
//console.log(`${item} / ${index}, / ${arr}`);
})


const programming=[
    {
       LN: "Java",
       FL:".java"
    },
    {
       LN: "JavaScript",
       FL:".jS"
    },
    {
       LN: "C++",
       FL:".cpp"
    }
]

programming.forEach( (item)=>{
//console.log(item.FL);
//console.log(item.LN);
console.log(item);
}  )

