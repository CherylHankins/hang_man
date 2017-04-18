console.log("start");

// things we need to keep track of
var model= {
  // individual letters of current Game Word
  gameWord: [],
  // individual blank lines of current Game Word
  gameLines: [],
  // Total lives for game
  lives: 7,
  //numInWordBank: Words.length,
  // current Game Word
  word: "",
  wordLine: ""
}
// list of game words
var launchCodeWords = ["launchCode", "javaScript",
      "python", "cascading style sheet", "document",
      "object oriented programming", "function",
      "server", "frontend", "backend", "attribute",
      "framework", "bootstrap","database", "github",
      "version control", "hypertext markup language",
      "attribute", "developer", "command line"]

// select random entry from launchCodeWords array
function getLaunchCodeWord() {
  rand = [Math.floor(Math.random() * launchCodeWords.length)];
  model.word = launchCodeWords[rand];
  //gameLetters = word.split("");
  //model.gameWord.push(gameLetters);
  //setGameboard();
  }

// create game board with appropriate blank lines
// and spaces between words
function setGameboard(){
  getLaunchCodeWord();
  //var answerArray = [];
  for (var i= 0; i< model.word.length; i++) {
      //if (word[i] === " "){
          //answerArray [i] = "\u00A0 \u00A0";
      //}
      //else{
        //  answerArray [i] = "___ ";
      //}
    //$("#game_blanks").html(answerArray);
    model.gameWord[i] = model.word.charAt(i);
    model.gameLines[i] = "_ ";
  }
  //model.wordLine = model.gameLines.join("");
  $("#WORD").html(model.gameLines);
  $("#numLetters").html(model.word.length);
}

function updateLetter(letter) {
  var changes = 0;
  for (var i= 0; i< model.word.length; i++) {
    model.gameWord[i] = model.word.charAt(i);
    if (model.word.charAt(i) == letter) {
      model.gameLines[i] = letter;
      changes = changes + 1;
    }
  }
  if(changes < 1) {
    model.lives -= 1;
    $("#lives").html(model.lives);
  }
  model.wordLine = model.gameLines.join("");
  $("#WORD").html(model.wordLine);

  var word1 = model.gameWord.join("");
  var word2 = model.gameLines.join("");

  if(word1 == word2) {
    alert("Winner");
  }
  if (model.lives < 1) {
    $("#WORD").html(word1);
    alert("Loser");
  }
}

$(function() {
  $("#a").click(function(event){
    event.preventDefault();
    updateLetter("a");
  });
});
$(function() {
  $("#b").click(function(event){
    event.preventDefault();
    updateLetter("b");
  });
});
$(function() {
  $("#c").click(function(event){
    event.preventDefault();
    updateLetter("c");
  });
});
$(function() {
  $("#d").click(function(event){
    event.preventDefault();
    updateLetter("d");
  });
});
$(function() {
  $("#e").click(function(event){
    event.preventDefault();
    updateLetter("e");
  });
});
$(function() {
  $("#f").click(function(event){
    event.preventDefault();
    updateLetter("f");
  });
});
$(function() {
  $("#g").click(function(event){
    event.preventDefault();
    updateLetter("g");
  });
});
$(function() {
  $("#h").click(function(event){
    event.preventDefault();
    updateLetter("h");
  });
});
$(function() {
  $("#i").click(function(event){
    event.preventDefault();
    updateLetter("i");
  });
});
$(function() {
  $("#j").click(function(event){
    event.preventDefault();
    updateLetter("j");
  });
});
$(function() {
  $("#k").click(function(event){
    event.preventDefault();
    updateLetter("k");
  });
});
$(function() {
  $("#l").click(function(event){
    event.preventDefault();
    updateLetter("l");
  });
});
$(function() {
  $("#m").click(function(event){
    event.preventDefault();
    updateLetter("m");
  });
});
$(function() {
  $("#n").click(function(event){
    event.preventDefault();
    updateLetter("n");
  });
});
$(function() {
  $("#o").click(function(event){
    event.preventDefault();
    updateLetter("o");
  });
});
$(function() {
  $("#p").click(function(event){
    event.preventDefault();
    updateLetter("p");
  });
});
$(function() {
  $("#q").click(function(event){
    event.preventDefault();
    updateLetter("q");
  });
});
$(function() {
  $("#r").click(function(event){
    event.preventDefault();
    updateLetter("r");
  });
});
$(function() {
  $("#s").click(function(event){
    event.preventDefault();
    updateLetter("s");
  });
});
$(function() {
  $("#t").click(function(event){
    event.preventDefault();
    updateLetter("t");
  });
});
$(function() {
  $("#u").click(function(event){
    event.preventDefault();
    updateLetter("u");
  });
});
$(function() {
  $("#v").click(function(event){
    event.preventDefault();
    updateLetter("v");
  });
});
$(function() {
  $("#w").click(function(event){
    event.preventDefault();
    updateLetter("w");
  });
});
$(function() {
  $("#x").click(function(event){
    event.preventDefault();
    updateLetter("x");
  });
});
$(function() {
  $("#y").click(function(event){
    event.preventDefault();
    updateLetter("y");
  });
});
$(function() {
  $("#z").click(function(event){
    event.preventDefault();
    updateLetter("z");
  });
});

console.log(getLaunchCodeWord());
console.log(setGameboard());
console.log(updateLetter());
console.log("end");
