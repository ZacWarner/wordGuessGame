//variable declaration.
var word;
var wordArray = [];
var boardArray = [];
var wordLength;
var guesses = 0;
var wins = 0;
var losses = 0;
var gameOver = false;
var victory = false;
var guessedLettersArray = [];

//function that takes word 
function getWord() {
    console.log("getWord start")
    var word = prompt("OK enter a word. Don't let the other player see!");
    alert("Ok you chose:   " + word);
    word = word.toLowerCase();
    return word;
}

//function to set var wordlength to the length of word given
function getLength() {
    console.log("Getlength start");
    wordLength = word.length;
    return wordLength;
}

//sets up the blank board ie _ _ _ _
function setUpGame() {
    console.log("setUpGame start");
    for (var i = 0; i < wordLength; i++) {
        this.boardArray[i] = "_";
    }
    return boardArray;
}

//loads word into an array so easier to edit
function wordIntoArray() {
    for (var i = 0; i < word.length; i++) {
        wordArray[i] = word.charAt(i);
    }
}

//update the _ _ _ on board to show correct guesses
function upDateBoard() {
    console.log("upDateBoard start");
    text = '<ul class="list-group list-group-horizontal-md">';
    for (i = 0; i < wordLength; i++) {
        text += '<li class="list-group-item">' + boardArray[i] + '</li>';
    }
    text += "</ul>";

    document.getElementById("playBoard").innerHTML = text;
}

function upDateScoreBoard() {
    text = "Wins = " + wins + " || Losses = " + losses;
    document.getElementById("scoreBoard").innerHTML = text;
}

//when guesses = 6 ends game.
function checkLoss() {
    if (guesses === 6) {
        gameOver = true;
        return gameOver;
    }
    else {
        gameOver = false;
        return gameOver;
    }
}

//check if they have won
function winCheck() {
    var str = boardArray.join('');
    if (str === word) {
        victory = true;
        console.log("victory = " + victory);
    }
    else {
        return;
    }
}

//alert that you won!
function victoryAlert() {
    alert("Congrats you guessed " + word + " correctly!!");
    wins++;
}

//alerts user they lost.
function gameOverAlert() {
    alert("Oh no Game Over! The word was " + word);
    losses++;
}

//update the lower board to show letters that have been guessed
function showGuessLetters() {
    console.log("showGuessLetters Start");
    text = guessedLettersArray.toString();
    document.getElementById("guessBoard").innerHTML = text;
}

//this changes the picture
function changeGallows() {
    if (guesses === 1) {
        document.getElementById("gallows").src = "assets/images/one.png";
    }
    else if (guesses === 2) {
        document.getElementById("gallows").src = "assets/images/two.png";
    }
    else if (guesses === 3) {
        document.getElementById("gallows").src = "assets/images/three.png";
    }
    else if (guesses === 4) {
        document.getElementById("gallows").src = "assets/images/four.png";
    }
    else if (guesses === 5) {
        document.getElementById("gallows").src = "assets/images/five.png";
    }
    else if (guesses === 6) {
        document.getElementById("gallows").src = "assets/images/six.png";
    }
    else {
        document.getElementById("gallows").src = "assets/images/gallows.png";
    }

}

// the meat of the game, takes user guess and tests if its correct or not, then loads into arrays
function letterGuess() {
    console.log("letterGuess start");
    alert("Ok press the key of the letter you want to guess! Hint: the word is " + wordLength + " letters long. Guess wrong six times and you lose!");

    var letterTest = 1;

    document.onkeyup = function (event) {
        var userGuess = event.key;
        console.log(userGuess);
        letterTest = wordArray.indexOf(userGuess);
        if (gameOver === false || victory === false) {
            if (letterTest === -1) {
                guesses++;
                guessedLettersArray.push(userGuess + " ");
                checkLoss();
                if (gameOver === true) {
                    gameOverAlert();
                    showGuessLetters();
                    upDateScoreBoard();
                }
            }
            else {
                for (var i = 0; i < wordLength; i++) {
                    letterTest = wordArray.indexOf(userGuess);
                    if (letterTest >= -1) {
                        boardArray[letterTest] = userGuess;
                        wordArray[letterTest] = 0;
                    }
                }
                winCheck();
                if (victory === true) {
                    upDateBoard();
                    victoryAlert();
                    upDateScoreBoard();
                }
            }
            upDateBoard();
            showGuessLetters();
            changeGallows();
            console.log(guesses);
            console.log(guessedLettersArray);
        }

        else {
            return;
        }
    }
}

//the gamestart that will call functions in correct order.
function gameStart() {
    victory = false;
    gameOver = false;
    guesses = 0;
    guessedLettersArray = [];

    changeGallows();

    showGuessLetters();

    word = getWord();
    console.log(word);

    wordLength = getLength();
    console.log(wordLength);

    wordIntoArray();
    console.log(wordArray);

    boardArray = setUpGame();
    console.log(boardArray.toString());

    upDateBoard();

    letterGuess();



}



