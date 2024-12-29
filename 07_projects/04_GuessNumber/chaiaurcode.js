let randomNumber=parseInt(Math.random()*100+1);
const form=document.querySelector('form')
const submit=document.querySelector('#subt');
const guessField=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const startOver=document.querySelector('.resultParas');
const lowOrHi=document.querySelector('.lowOrHi');

const p=document.createElement('p');
let previousGuesses=[];
let numOfGuesses=1;

let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(guessField.value)
        console.log(guess);
        
        validateGuess(guess);
    })
}


function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess<1){
        alert('Please enter a number greater than 1');  
} else if(guess>100){
    alert('Please enter a number less than 100');
}else{
    previousGuesses.push(guess);
    if(numOfGuesses===10){
        displayGuess(guess)
        displayMessage(`Game Over! Random number was ${randomNumber}`);
        endGame();
    } else{
        displayGuess(guess);
        checkguess(guess);
    }
}
}

function  checkguess(guess) {

    if(guess===randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numOfGuesses} guesses!`);
        endGame();
    } else if(guess<randomNumber){
        displayMessage('Wrong! Guess higher');
    }else if(guess>randomNumber){
        displayMessage('Wrong! Guess lower');
    }
    
}

function displayGuess(guess) {

    guessField.value='';
    guessSlot.innerHTML+=`${guess} `;
    numOfGuesses++;
    remaining.innerHTML=`${11-numOfGuesses}`;
    
}


function displayMessage(message) {
    lowOrHi.innerHTML=`${message}`;

    
}

function endGame() {
    guessField.value='';
    guessField.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id='newGame'>Start new game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame()
    
    
}

function newGame() {
   const newGameButton= document.querySelector('#newGame');
   newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    previousGuesses=[];
    numOfGuesses=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numOfGuesses}`;
    guessField.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
   })
       
   
   
    
}


