console.log("start");
// things we need to keep track of

// list of game words
var launchCodeWords = ["launchCode", "javaScript",
      "python", "cascading style sheet", "document",
      "object oriented programming", "function",
      "server", "frontend", "backend", "attribute",
      "framework", "bootstrap","database", "github",
      "version control", "hypertext markup language",
      "attribute", "developer", "command line"]

// select random entry from launchCodeWords
function getLaunchCodeWords() {
   rand = [Math.floor(Math.random() * launchCodeWords.length)];
   word = launchCodeWords[rand];
   hangman();
   }

// create game board with appropriate blank lines
// and spaces between words
function hangman(){
    var answerArray = [];
    for (var i= 0; i< word.length; i++) {
        if (word[i] === " "){
            answerArray [i] = "\u00A0 \u00A0";
        }
        else{
            answerArray [i] = "_ ";
        }
      $("#game").html(answerArray);
  }
}

console.log(getLaunchCodeWords());
console.log(word);
console.log("end");
