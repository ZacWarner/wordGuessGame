function myFunction() {
    document.getElementById("directions").innerHTML = "Ok First we need to Pick a word.";
}

function getWord() {
    var word = prompt("OK enter a word.");
    document.getElementById("directions").innerHTML = "Ok you chose " + word + " as your word!";
}

function setUpGame() {
    var word = "ironman";
    var wordArray = [];
    var wordLength = word.length;
    for (var i = 0; i < wordLength; i++) {
        wordArray[i] = "_";
    }

    text = '<ul class="list-group list-group-horizontal-md">';
    for (i = 0; i < wordLength; i++) {
        text += '<li class="list-group-item">' + wordArray[i] + '</li>';
    }
    text += "</ul>";

    document.getElementById("directions").innerHTML = text;
}

function letterGuess() {
    var word = "ironman";
    var wordArray = ["_", "_", "_", "_", "_", "_", "_",];
    var wordLength = word.length;
    var letterTest = 1;
    document.onkeyup = function (event) {
        var userGuess = event.key;
        console.log(userGuess);

        letterTest = word.indexOf(userGuess);

        if (letterTest >= -1) {
            wordArray[letterTest] = userGuess;
        }

        text = '<ul class="list-group list-group-horizontal-md">';
        for (i = 0; i < wordLength; i++) {
            text += '<li class="list-group-item">' + wordArray[i] + '</li>';
        }
        text += "</ul>";

        document.getElementById("directions").innerHTML = text;
    }


}



