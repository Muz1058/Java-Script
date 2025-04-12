// generate random colour
const randomColour=function(){
    const  hex="123456789ABCDEF"
    let colour='#'

    for (let i = 0; i < 6; i++) {
        colour+= hex[Math.floor(Math.random()*16)];
        
    };
    return colour;
};

let intervalReferance;
const startChangingColour = function(){
    if(!intervalReferance){
        intervalReferance = setInterval(changeBGC,1000)
    }
   

function changeBGC(){
    document.body.style.backgroundColor = randomColour()
}
}

const stopChangingColour = function(){
   clearInterval(intervalReferance);
   intervalReferance=null;
}

document.querySelector('#start').addEventListener('click',startChangingColour)

document.querySelector('#stop').addEventListener('click',stopChangingColour)