let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const startOver=document.querySelector('.resultParas');
const lowOrHi=document.querySelector('.lowOrHi');
const p=document.createElement('p');

let prevGuess=[];
let guessCount=1;
let play=true;

if(play){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess=(parseInt(userInput.value))
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a valid number")
    }
    else if(guess<1){
        alert("Please Enter a valid number greater than 0")
    }
    else if(guess>100){
        alert("Please Enter a valid number Less than 100")

    }
    else{
        prevGuess.push(guess);
        if(guessCount>=10){
            displayGuess(guess);
            displayMsg(`Game Over, Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess=== randomNumber){
        displayMsg(`You Guesses it Right `)
        endGame()
    }
    else if(guess<randomNumber){
        displayMsg(`Number is toooo Low `)
    }
    else if(guess>randomNumber){
        displayMsg(`Number is toooo High `)
    }
}

function displayGuess(guess){
 userInput.value=''
 guessSlot.innerHTML+=` ${guess}`
 guessCount++;
 remaining.innerHTML=`${11-guessCount}`
}

function displayMsg(msg){
lowOrHi.innerHTML =`<h2>${msg}</h2>`
}

function endGame(){
    userInput.value==' '
    userInput.setAttribute('disabled','')
    p.classList.add("button")
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    play=false;
    newGame()
}

function newGame(){
const newButton=document.querySelector('#newGame')
    newButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1)
    prevGuess=[]
    guessCount=1;
    guessSlot.innerHTML=' '
    remaining.innerHTML=`${11-guessCount}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    play=true;  
})
}


