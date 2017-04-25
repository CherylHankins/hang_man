console.log("start");

// things we need to keep track of
var model= {
  // individual letters of current Game Word
  gameWord: [],
  // individual blank lines of current Game Word
  gameLines: [],
  // Total lives for game
  lives: 6,
  //number of incorrect guesses
  numWrong: 0,
  // current Game Word
  word: "",
  wordLine: "",
  result: "",
  // current selected category
  category: ""
}

// list of game words
var launchCodeWords = ["launchcode", "javascript",
      "python", "cascading style sheet", "document",
      "object oriented programming", "function",
      "server", "frontend", "backend", "attribute",
      "framework", "bootstrap","database", "github",
      "version control", "hypertext markup language",
      "attribute", "developer", "command line"]

var videoGameWords = ["mario", "yoshi"]

var kansasCityWords = ["chiefs", "royals"]

var randomWords = ["random"]

$(document).ready(function(){
  $("#intropage").show();
  $("#gamepage").hide();
});

function changeCategory() {
  $("#intropage").show();
  $("#gamepage").hide();
  model.category = "";
  newGame();
}

// select random entry from randomWords array
function getrandomWords() {
  rand = [Math.floor(Math.random() * randomWords.length)];
  model.word = randomWords[rand];
  model.category = "randomWords";
  setGameboard();
}

// select random entry from kansasCityWords array
function getkansasCityWords() {
  rand = [Math.floor(Math.random() * kansasCityWords.length)];
  model.word = kansasCityWords[rand];
  model.category = "kansasCityWords";
  setGameboard();
}

// select random entry from videoGameWords array
function getvideoGameWords() {
  rand = [Math.floor(Math.random() * videoGameWords.length)];
  model.word = videoGameWords[rand];
  model.category = "videoGameWords";
  setGameboard();
}

// select random entry from launchCodeWords array
function getlaunchCodeWords() {
  rand = [Math.floor(Math.random() * launchCodeWords.length)];
  model.word = launchCodeWords[rand];
  model.category = "launchCodeWords";
  setGameboard();
}


// create game board with appropriate blank lines
// and spaces between words
function setGameboard(){
  console.log("here!");
  $("#intropage").hide();
  $("#gamepage").show();
  $("#result").empty();
  hangman();
  console.log(model.word);
  for (var i= 0; i< model.word.length; i++) {
    model.gameWord[i] = model.word.charAt(i);
    if (model.gameWord[i] === " "){
      model.gameLines[i] = "\u00A0\u00A0";
    }else{
    model.gameLines[i] = "_ ";
   }
   $("#WORD").html(model.gameLines);
  }
}

// update letter in Gameword or hangman image
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
    model.numWrong = model.numWrong + 1;
    $("#lives").html(model.lives);
  }
  model.wordLine = model.gameLines.join("");
  $("#WORD").html(model.wordLine);

  var word1 = model.gameWord.join("");
  var word2 = model.gameLines.join("");

  word1 = word1.replace(/\s/g, '');
  word2 = word2.replace(/\s/g, '');

  // add body parts to hangman image
  if(model.numWrong == 1){
    head();
  }
  if(model.numWrong == 2){
    body();
  }
  if(model.numWrong == 3){
    leftArm();
  }
  if(model.numWrong == 4){
    rightArm();
  }
  if(model.numWrong == 5){
    leftLeg();
  }
  if(model.numWrong == 6){
    rightLeg();
  }
  if(word1 == word2) {
    model.result = "victory";
    endGame();
  }
  if (model.lives < 1) {
    $("#WORD").html(model.word);
    model.result = "game over";
    endGame();
  }
}

//clear hangman image
function clearCanvas(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.save();
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0, 0, 200, 100);
  ctx.restore();
}

//start new game
function newGame(){
  model.gameWord = [];
  model.gameLines = [];
  model.lives = 6;
  model.word = "";
  model.wordLine = "";
  model.numWrong = 0;
  model.result = "";
  $("#gif").hide();
  $("#lives").html(model.lives);
  clearCanvas();
  resetLetterBank();
  //setGameboard();
  if(model.category == "randomWords"){
    getrandomWords();
  }
  if(model.category == "kansasCityWords"){
    getkansasCityWords();
  }
  if(model.category == "videoGameWords"){
    getvideoGameWords();
  }
  if(model.category == "launchCodeWords"){
    getlaunchCodeWords();
  }
  $("#WORD").html(model.gameLines);
}

//reset letterbank for new game
function resetLetterBank(){
  $("#a").removeClass("disabled");
  $("#b").removeClass("disabled");
  $("#c").removeClass("disabled");
  $("#d").removeClass("disabled");
  $("#e").removeClass("disabled");
  $("#f").removeClass("disabled");
  $("#g").removeClass("disabled");
  $("#h").removeClass("disabled");
  $("#i").removeClass("disabled");
  $("#j").removeClass("disabled");
  $("#k").removeClass("disabled");
  $("#l").removeClass("disabled");
  $("#m").removeClass("disabled");
  $("#n").removeClass("disabled");
  $("#o").removeClass("disabled");
  $("#p").removeClass("disabled");
  $("#q").removeClass("disabled");
  $("#r").removeClass("disabled");
  $("#s").removeClass("disabled");
  $("#t").removeClass("disabled");
  $("#u").removeClass("disabled");
  $("#v").removeClass("disabled");
  $("#w").removeClass("disabled");
  $("#x").removeClass("disabled");
  $("#y").removeClass("disabled");
  $("#z").removeClass("disabled");
}

//read letter selection and disable button
$(function() {
  $("#a").click(function(event){
    updateLetter("a");
    $("#a").addClass("disabled");
  });
});
$(function() {
  $("#b").click(function(event){
    updateLetter("b");
    $("#b").addClass("disabled");
  });
});
$(function() {
  $("#c").click(function(event){
    updateLetter("c");
    $("#c").addClass("disabled");
  });
});
$(function() {
  $("#d").click(function(event){
      updateLetter("d");
    $("#d").addClass("disabled");
  });
});
$(function() {
  $("#e").click(function(event){
      updateLetter("e");
    $("#e").addClass("disabled");
  });
});
$(function() {
  $("#f").click(function(event){
    updateLetter("f");
    $("#f").addClass("disabled");
  });
});
$(function() {
  $("#g").click(function(event){
      updateLetter("g");
    $("#g").addClass("disabled");
  });
});
$(function() {
  $("#h").click(function(event){
        updateLetter("h");
    $("#h").addClass("disabled");
  });
});
$(function() {
  $("#i").click(function(event){
    updateLetter("i");
    $("#i").addClass("disabled");
  });
});
$(function() {
  $("#j").click(function(event){
      updateLetter("j");
    $("#j").addClass("disabled");
  });
});
$(function() {
  $("#k").click(function(event){
    updateLetter("k");
    $("#k").addClass("disabled");
  });
});
$(function() {
  $("#l").click(function(event){
    event.preventDefault();
    updateLetter("l");
    $("#l").addClass("disabled");
  });
});
$(function() {
  $("#m").click(function(event){
    event.preventDefault();
    updateLetter("m");
    $("#m").addClass("disabled");
  });
});
$(function() {
  $("#n").click(function(event){
    event.preventDefault();
    updateLetter("n");
    $("#n").addClass("disabled");
  });
});
$(function() {
  $("#o").click(function(event){
    event.preventDefault();
    updateLetter("o");
    $("#o").addClass("disabled");
  });
});
$(function() {
  $("#p").click(function(event){
    event.preventDefault();
    updateLetter("p");
    $("#p").addClass("disabled");
  });
});
$(function() {
  $("#q").click(function(event){
    event.preventDefault();
    updateLetter("q");
    $("#q").addClass("disabled");
  });
});
$(function() {
  $("#r").click(function(event){
    event.preventDefault();
    updateLetter("r");
    $("#r").addClass("disabled");
  });
});
$(function() {
  $("#s").click(function(event){
    event.preventDefault();
    updateLetter("s");
    $("#s").addClass("disabled");
  });
});
$(function() {
  $("#t").click(function(event){
    event.preventDefault();
    updateLetter("t");
    $("#t").addClass("disabled");
  });
});
$(function() {
  $("#u").click(function(event){
    event.preventDefault();
    updateLetter("u");
    $("#u").addClass("disabled");
  });
});
$(function() {
  $("#v").click(function(event){
    event.preventDefault();
    updateLetter("v");
    $("#v").addClass("disabled");
  });
});
$(function() {
  $("#w").click(function(event){
    event.preventDefault();
    updateLetter("w");
    $("#w").addClass("disabled");
  });
});
$(function() {
  $("#x").click(function(event){
    event.preventDefault();
    updateLetter("x");
    $("#x").addClass("disabled");
  });
});
$(function() {
  $("#y").click(function(event){
    event.preventDefault();
    updateLetter("y");
    $("#y").addClass("disabled");
  });
});
$(function() {
  $("#z").click(function(event){
    event.preventDefault();
    updateLetter("z");
    $("#z").addClass("disabled");
  });
});

//DRAW HANGMAN body parts
//starting hangman image
//bottom line
function hangman(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(70,90);
    ctx.lineTo(120,90);
    ctx.stroke();
    //left side
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(70,90);
    ctx.lineTo(70,10);
    ctx.stroke();
    //top bar
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(70,10);
    ctx.lineTo(100,10);
    ctx.stroke();
    //noose
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,10);
    ctx.lineTo(100,20);
    ctx.stroke();
}
function head(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,30,10,0,2*Math.PI);
    ctx.stroke();
    ctx.moveTo(95,27);
    ctx.lineTo(95,28);
    ctx.stroke();
    ctx.moveTo(105,27);
    ctx.lineTo(105,28);
    ctx.stroke();
    ctx.moveTo(97,34);
    ctx.lineTo(103,34);
    ctx.stroke();
    ctx.closePath();
}
function body(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,40);
    ctx.lineTo(100,70);
    ctx.stroke();
}
function leftArm(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,50);
    ctx.lineTo(85,60);
    ctx.stroke();
}
function rightArm(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,50);
    ctx.lineTo(115,60);
    ctx.stroke();
}
function leftLeg(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,70);
    ctx.lineTo(85,80);
    ctx.stroke();
}
function rightLeg(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,70);
    ctx.lineTo(115,80);
    ctx.stroke();
}


function endGame() {
    if (model.result=="victory") {
      (fetchAndDisplayGif());
      $("#result").html("You Win!");
    }else
      if (model.result=="game over"){
      (fetchAndDisplayGif());
      $("#result").html("Try Again :(");
    }
}

function fetchAndDisplayGif(event) {
    //parameters to attach to our request
    var params = {
        api_key: "dc6zaTOxFJmzC",
        //send request for win or lose GIF
        tag : model.result
    };
    $("#loader").toggle();
    // make an ajax request for a random GIF
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/random",
        data: params,
        success: function(response) {
            console.log("we received a response!");
            console.log(response);

            var image = response.data.image_url;
            $("#gif").attr("src", image);
            $("#feedback").show();
            $("#gif").show();
            $("#loader").toggle();
        },
        error: function() {
            $("#feedback").text("Sorry, could not load GIF. Try again!");
            setGifLoadedStatus(false);
        }
    });
}

/**
 * toggles the visibility of UI elements based on whether a GIF is currently loaded.
 * if the GIF is loaded: displays the image and hides the feedback label
 * otherwise: hides the image and displays the feedback label
 */
function setGifLoadedStatus(isCurrentlyLoaded) {
    $("#gif").attr("hidden", !isCurrentlyLoaded);
    $("#feedback").attr("hidden", isCurrentlyLoaded);
}



console.log("end");
