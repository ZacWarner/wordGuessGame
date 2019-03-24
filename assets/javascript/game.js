var word;
var wordArray = [];
var boardArray = [];
var wordLength;
var guesses = 0;
var wins = 0;
var losses = 0;
guessedLettersArray = [];

function getWord() {
    console.log("getWord start")
    var word = prompt("OK enter a word.");
    alert("Ok you chose " + word + " as your word!");
    word = word.toLowerCase();
    return word;
}

function getLength() {
    console.log("Getlength start");
    wordLength = word.length;
    return wordLength;
}

function setUpGame() {
    console.log("setUpGame start");
    for (var i = 0; i < wordLength; i++) {
        this.boardArray[i] = "_";
    }
    return boardArray;
}

function wordIntoArray() {
    for (var i = 0; i < word.length; i++) {
        wordArray[i] = word.charAt(i);
    }
}

function upDateBoard() {
    console.log("upDateBoard start");
    text = '<ul class="list-group list-group-horizontal-md">';
    for (i = 0; i < wordLength; i++) {
        text += '<li class="list-group-item">' + boardArray[i] + '</li>';
    }
    text += "</ul>";

    document.getElementById("directions").innerHTML = text;
}

function letterGuess() {
    console.log("letterGuess start");
    alert("Pick first guess!");

    var letterTest = 1;
    document.onkeyup = function (event) {
        var userGuess = event.key;
        console.log(userGuess);
        letterTest = wordArray.indexOf(userGuess);
        if (letterTest === -1) {
            guesses++;
            guessedLettersArray.push(userGuess);
        }
        else {
            for (var i = 0; i < wordLength; i++) {
                letterTest = wordArray.indexOf(userGuess);
                if (letterTest >= -1) {
                    boardArray[letterTest] = userGuess;
                    wordArray[letterTest] = 0;
                }
            }
        }
        upDateBoard();
        console.log(guesses);
        console.log(guessedLettersArray);
    }


}

function gameStart() {

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

    // upDateBoard();

}



