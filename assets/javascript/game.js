//Global Variables
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var letter = ""
var guessArray = [];
var random = Math.floor(Math.random()*letters.length);
var guess = ""
var wins = 0;
var losses = 0;
var guessesLeft = 5;
start();
//User Function
document.onkeyup = function(event) {
    guess = event.key;
    // console.log(guess);
    if(guess === letter){
        wins++;
        reset();
    } else{
        guessesLeft--;
    }
    if (guessesLeft === 0) {
        losses++;
        alert("The letter was " + letter + ".");
        reset();
    }
    guessArray.push(guess);
    
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses").textContent = guessesLeft;
    document.getElementById("soFar").textContent = guessArray;
}

//Functions + Start game
function start(){
    //Finds letter and starts game
    letter = letters[random].toLowerCase();
    // console.log(letter);
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses").textContent = guessesLeft;
}

function nextLetter(){
    random = Math.floor(Math.random()*letters.length);
    letter = letters[random].toLowerCase();

}

function reset() {
    guessesLeft = 5;
    guessArray = [];
    nextLetter();
}

