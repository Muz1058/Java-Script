//For of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
   // console.log(`value = ${num}`);
    
}


const greet="Hello world"

for (const element of greet) {
    
  //  console.log(`${element}`);
    
}


//Maps


const map=new Map()
map.set("pk","Pakistan")
map.set("KSA","Saudi Arabia")
map.set("UAE","United Arab Emirates")
for (const key of map) {
   // console.log(key);    
}

for (const [key,value] of map) {
   // console.log(key);    
   // console.log(value);
   //console.log(key,"->",value);
}
//console.table(map);

const myObj={
    'g1':'NFC',
    'g2':'Spiderman'
}

// for (const key of myObj) {  //TypeError: myObj is not iterable
//     console.log(key);
// }