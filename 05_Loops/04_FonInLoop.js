const myObj={
    js:"JavaScript",
    cpp:'C++',
    rb:"Ruby",
    sw : "swift "
}

for (const key in myObj) {
   // console.log(key);
   // console.log(myObj[key]);
   //console.log(`${key} ==> ${myObj[key]}`);
    
}

const coding=["JS","C++","Java","SQL"]


for (const key in coding) {
   // console.log(key);
   //console.log(coding[key]);
   console.log(`${coding[key]} is at index ${key}`);
}