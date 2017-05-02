var app=angular.module("Hang_man", []);
app.controller("GameController",['$scope','$timeout',function($scope,$timeout){


var launchCodeWords = ["launchcode", "javascript",
          "python", "cascading style sheet", "document",
          "object oriented programming", "function",
          "server", "frontend", "backend", "attribute",
          "framework", "bootstrap","database", "github",
          "version control", "hypertext markup language",
          "attribute", "developer", "command line"];

var videoGameWords = ["mario", "yoshi", "sega", "link"];

var kansasCityWords = ["chiefs", "royals", "kauffman", "bar b que", "liberty memorial", "crown center",
                         "jazz", "union station", "missouri", "kansas", "westport",
                          "brookside", "wprlds of fun", "sprint", "country club plaza",
                          "sporting kc", "american royal","loose park",
                          "swope park", "harry truman"];

var randomWords = ["two words", "random"];

// things we need to keep track of

  // individual letters of current Game Word
$scope.gameWord=[];
  // individual blank lines of current Game Word
$scope.gameLines=[];
  // total lives for game
$scope.lives = 6;
  //number of incorrect guesses
$scope.numWrong = 0;
  // current Game Word
$scope.word="";
$scope.wordLine="";
  //result of current game
$scope.result = "";
  //current category selected
$scope.category = "";
 // all guesses for current game
$scope.guesses = [];
$scope.intropage = true;
$scope.gamepage = false;

// select random word from selected category
$scope.getrandomWords = function(){
  rand = [Math.floor(Math.random() * randomWords.length)];
  $scope.word = randomWords[rand];
  $scope.category = "randomWords";
  setGameboard();
}

$scope.getkansasCityWords = function(){
  rand = [Math.floor(Math.random() * kansasCityWords.length)];
  $scope.word = kansasCityWords[rand];
  $scope.category = "kansasCityWords";
  setGameboard();
}

$scope.getvideoGameWords = function(){
  rand = [Math.floor(Math.random() * videoGameWords.length)];
  $scope.word = videoGameWords[rand];
  $scope.category = "videoGameWords";
  setGameboard();
}

$scope.getlaunchCodeWords = function(){
  rand = [Math.floor(Math.random() * launchCodeWords.length)];
  $scope.word = launchCodeWords[rand];
  $scope.category = "launchCodeWords";
  setGameboard();
}

//set blank spaces for the gameword
var setGameboard = function(){
  $scope.intropage = false;
  $scope.gamepage = true;
  hangman();
  for (var i= 0; i< $scope.word.length; i++) {
    $scope.gameWord[i] = $scope.word.charAt(i);
    if ($scope.gameWord[i] === " "){
      $scope.gameLines[i] = "\u00A0\u00A0";
    }else{
    $scope.gameLines[i] = "_ ";
   }
   $scope.wordLine = $scope.gameLines.join("");
  }
}

//review guessed letter, add correct guessed
//letter to gameboard, add body part for
//incorrect guessed letter
$scope.updateLetter = function(letter) {
  if($scope.guesses.indexOf(letter) == -1){
    $scope.guesses.push(letter);
    var changes = 0;
    for (var i= 0; i< $scope.word.length; i++) {
      $scope.gameWord[i] = $scope.word.charAt(i);
      if ($scope.word.charAt(i) == letter) {
        $scope.gameLines[i] = letter;
        changes = changes + 1;
      }
    }
    if(changes < 1) {
      $scope.lives -= 1;
      $scope.numWrong = $scope.numWrong + 1;
      }
    $scope.wordLine = $scope.gameLines.join("");
    var word1 = $scope.gameWord.join("");
    var word2 = $scope.gameLines.join("");

    word1 = word1.replace(/\s/g, '');
    word2 = word2.replace(/\s/g, '');

    // add body parts to hangman image
    if($scope.numWrong == 1){
      head1();
    }
    if($scope.numWrong == 2){
      body();
    }
    if($scope.numWrong == 3){
      clearCanvas();
      hangman();
      head2();
      body();
      leftArm();
    }
    if($scope.numWrong == 4){
      clearCanvas();
      hangman();
      head2();
      body();
      leftArm();
      rightArm1();
    }
    if($scope.numWrong == 5){
      clearCanvas();
      hangman();
      head3();
      body();
      leftArm();
      rightArm2();
      leftLeg();
    }
    if($scope.numWrong == 6){
      clearCanvas();
      hangman();
      head4();
      body();
      leftArm();
      rightArm3();
      leftLeg();
      rightLeg();
    }
    if(word1 == word2) {
      $scope.result = "victory";
      $scope.endGame();
    }
    if ($scope.lives < 1) {
      $scope.wordLine = $scope.word;
      $scope.result = "game over";
      $scope.endGame();
    }
  $scope.isDisabled(letter);
  }
}

//add disable class to button of letter chosen
$scope.isDisabled = function(letter){
  if($scope.guesses.indexOf(letter) >= 0) {
    if(letter == "a"){
      angular.element(document.querySelector("#a")).addClass("disabled");
    }
    if(letter == "b"){
      angular.element(document.querySelector("#b")).addClass("disabled");
    }
    if(letter == "c"){
      angular.element(document.querySelector("#c")).addClass("disabled");
    }
    if(letter == "d"){
      angular.element(document.querySelector("#d")).addClass("disabled");
    }
    if(letter == "e"){
      angular.element(document.querySelector("#e")).addClass("disabled");
    }
    if(letter == "f"){
      angular.element(document.querySelector("#f")).addClass("disabled");
    }
    if(letter == "g"){
      angular.element(document.querySelector("#g")).addClass("disabled");
    }
    if(letter == "h"){
      angular.element(document.querySelector("#h")).addClass("disabled");
    }
    if(letter == "i"){
      angular.element(document.querySelector("#i")).addClass("disabled");
    }
    if(letter == "j"){
      angular.element(document.querySelector("#j")).addClass("disabled");
    }
    if(letter == "k"){
      angular.element(document.querySelector("#k")).addClass("disabled");
    }
    if(letter == "l"){
      angular.element(document.querySelector("#l")).addClass("disabled");
    }
    if(letter == "m"){
      angular.element(document.querySelector("#m")).addClass("disabled");
    }
    if(letter == "n"){
      angular.element(document.querySelector("#n")).addClass("disabled");
    }
    if(letter == "o"){
      angular.element(document.querySelector("#o")).addClass("disabled");
    }
    if(letter == "p"){
      angular.element(document.querySelector("#p")).addClass("disabled");
    }
    if(letter == "q"){
      angular.element(document.querySelector("#q")).addClass("disabled");
    }
    if(letter == "r"){
      angular.element(document.querySelector("#r")).addClass("disabled");
    }
    if(letter == "s"){
      angular.element(document.querySelector("#s")).addClass("disabled");
    }
    if(letter == "t"){
      angular.element(document.querySelector("#t")).addClass("disabled");
    }
    if(letter == "u"){
      angular.element(document.querySelector("#u")).addClass("disabled");
    }
    if(letter == "v"){
      angular.element(document.querySelector("#v")).addClass("disabled");
    }
    if(letter == "w"){
      angular.element(document.querySelector("#w")).addClass("disabled");
    }
    if(letter == "x"){
      angular.element(document.querySelector("#x")).addClass("disabled");
    }
    if(letter == "y"){
      angular.element(document.querySelector("#y")).addClass("disabled");
    }
    if(letter == "z"){
      angular.element(document.querySelector("#z")).addClass("disabled");
    }
  }
}

//fetch gif for win/lose
$scope.endGame = function(){
  if ($scope.result=="victory") {
      fetchAndDisplayGif();
      $scope.displayresult = "You Win!";
    }else
      if ($scope.result=="game over"){
      fetchAndDisplayGif();
      $scope.displayresult = "Try Again :(";
    }
  angular.element(document.querySelector("#a")).addClass("disabled");
  angular.element(document.querySelector("#b")).addClass("disabled");
  angular.element(document.querySelector("#c")).addClass("disabled");
  angular.element(document.querySelector("#d")).addClass("disabled");
  angular.element(document.querySelector("#e")).addClass("disabled");
  angular.element(document.querySelector("#f")).addClass("disabled");
  angular.element(document.querySelector("#g")).addClass("disabled");
  angular.element(document.querySelector("#h")).addClass("disabled");
  angular.element(document.querySelector("#i")).addClass("disabled");
  angular.element(document.querySelector("#j")).addClass("disabled");
  angular.element(document.querySelector("#k")).addClass("disabled");
  angular.element(document.querySelector("#l")).addClass("disabled");
  angular.element(document.querySelector("#m")).addClass("disabled");
  angular.element(document.querySelector("#n")).addClass("disabled");
  angular.element(document.querySelector("#o")).addClass("disabled");
  angular.element(document.querySelector("#p")).addClass("disabled");
  angular.element(document.querySelector("#q")).addClass("disabled");
  angular.element(document.querySelector("#r")).addClass("disabled");
  angular.element(document.querySelector("#s")).addClass("disabled");
  angular.element(document.querySelector("#t")).addClass("disabled");
  angular.element(document.querySelector("#u")).addClass("disabled");
  angular.element(document.querySelector("#v")).addClass("disabled");
  angular.element(document.querySelector("#w")).addClass("disabled");
  angular.element(document.querySelector("#x")).addClass("disabled");
  angular.element(document.querySelector("#y")).addClass("disabled");
  angular.element(document.querySelector("#z")).addClass("disabled");
  }

//start new game with new category selection
$scope.changeCategory = function(){
  $scope.category = "";
  $scope.gamepage = false;
  $scope.intropage = true;
  $scope.newGame();
}

//start new game
$scope.newGame = function(){
  $scope.gameWord=[];
  $scope.gameLines=[];
  $scope.lives = 6;
  $scope.numWrong = 0;
  $scope.word="";
  $scope.wordLine="";
  $scope.result = "";
  $scope.displayresult = "";
  $scope.guesses = [];
  $("#gif").hide();
  clearCanvas();
  removeclass();

  if($scope.category == "randomWords"){
    $scope.getrandomWords();
  }
  if($scope.category == "kansasCityWords"){
    $scope.getkansasCityWords();
  }
  if($scope.category == "videoGameWords"){
    $scope.getvideoGameWords();
  }
  if($scope.category == "launchCodeWords"){
    $scope.getlaunchCodeWords();
  }
  $scope.wordLine = $scope.gameLines.join("");
}

//canvas created hangman
var hangman = function (){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //bottom line
    ctx.beginPath();
    ctx.rect(30,190,100,2);
    ctx.fillStyle = "black";
    ctx.fill();
    //left side
    ctx.beginPath();
    ctx.rect(30,10,12,180);
    ctx.fillStyle = "brown";
    ctx.fill();
    //top bar
    ctx.beginPath();
    ctx.rect(30,10,85,14);
    ctx.fillStyle = "brown";
    ctx.fill();
    //noose
    ctx.moveTo(100,24);
    ctx.lineTo(100,45);
    ctx.stroke();
}
var head1 = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,58,15,0,2*Math.PI);
    ctx.stroke();
    //eyes
    ctx.moveTo(95,51);
    ctx.lineTo(95,53);
    ctx.stroke();
    ctx.moveTo(105,51);
    ctx.lineTo(105,53);
    ctx.stroke();
    //mouth
    ctx.beginPath();
    ctx.arc(100,60,9,0,Math.PI);
    ctx.stroke();
}
var head2 = function(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100,58,15,0,2*Math.PI);
  ctx.stroke();
  //eyes
  ctx.moveTo(95,51);
  ctx.lineTo(95,53);
  ctx.stroke();
  ctx.moveTo(105,51);
  ctx.lineTo(105,53);
  ctx.stroke();
  //mouth
  ctx.moveTo(93,64);
  ctx.lineTo(106,64);
  ctx.stroke();
  //ctx.closePath();
  ctx.stroke();
}
var head3 = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,58,15,0,2*Math.PI);
    ctx.stroke();
    //eyes
    ctx.moveTo(95,51);
    ctx.lineTo(95,53);
    ctx.stroke();
    ctx.moveTo(105,51);
    ctx.lineTo(105,53);
    ctx.stroke();
    //mouth
    ctx.beginPath();
    ctx.arc(100,65,7,0,Math.PI,true);
    ctx.stroke();
    //ctx.closePath();
    ctx.stroke();
}
var head4 = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,58,15,0,2*Math.PI);
    ctx.stroke();
    //eyes
    ctx.moveTo(94,49);
    ctx.lineTo(96,55);
    ctx.stroke();
    ctx.moveTo(98,49);
    ctx.lineTo(92,55);
    ctx.stroke();

    ctx.moveTo(104,49);
    ctx.lineTo(106,55);
    ctx.stroke();
    ctx.moveTo(108,49);
    ctx.lineTo(102,55);
    ctx.stroke();
    //mouth
    ctx.beginPath();
    ctx.arc(100,65,4,0,2*Math.PI);
    ctx.stroke();
    //ctx.closePath();
    ctx.stroke();
}
var body = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,74);
    ctx.lineTo(100,130);
    ctx.stroke();
}
var leftArm = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,85);
    ctx.lineTo(80,110);
    ctx.stroke();
}
var rightArm1 = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,85);
    ctx.lineTo(120,110);
    ctx.stroke();
}
var rightArm2 = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,85);
    ctx.lineTo(130,85);
    ctx.stroke();
    //sign
    ctx.moveTo(130,85);
    ctx.lineTo(130,70);
    ctx.stroke();
    //bottom
    ctx.moveTo(120,70);
    ctx.lineTo(163,70);
    ctx.stroke();
    //left side
    ctx.moveTo(120,70);
    ctx.lineTo(120,30);
    ctx.stroke();
    //top
    ctx.moveTo(120,30);
    ctx.lineTo(163,30);
    ctx.stroke();
    //right side
    ctx.moveTo(163,70);
    ctx.lineTo(163,30);
    ctx.stroke();
    //h
    ctx.moveTo(125,65);
    ctx.lineTo(125,35);
    ctx.stroke();
    ctx.moveTo(130,65);
    ctx.lineTo(130,35);
    ctx.stroke();
    ctx.moveTo(125,50);
    ctx.lineTo(130,50);
    ctx.stroke();
    //e
    ctx.moveTo(134,65);
    ctx.lineTo(134,35);
    ctx.stroke();
    ctx.moveTo(134,65);
    ctx.lineTo(139,65);
    ctx.stroke();
    ctx.moveTo(134,35);
    ctx.lineTo(139,35);
    ctx.stroke();
    ctx.moveTo(134,50);
    ctx.lineTo(139,50);
    ctx.stroke();
    //l
    ctx.moveTo(143,65);
    ctx.lineTo(143,35);
    ctx.stroke();
    ctx.moveTo(143,65);
    ctx.lineTo(149,65);
    ctx.stroke();
    //p
    ctx.moveTo(153,65);
    ctx.lineTo(153,35);
    ctx.stroke();
    ctx.moveTo(153,35);
    ctx.lineTo(158,35);
    ctx.stroke();
    ctx.moveTo(153,50);
    ctx.lineTo(158,50);
    ctx.stroke();
    ctx.moveTo(158,50);
    ctx.lineTo(158,35);
    ctx.stroke();
}
var rightArm3 = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,85);
    ctx.lineTo(120,110);
    ctx.stroke();
    //sign
    ctx.moveTo(153,150);
    ctx.lineTo(153,135);
    ctx.stroke();
    //bottom
    ctx.moveTo(120,150);
    ctx.lineTo(163,150);
    ctx.stroke();
    //left side
    ctx.moveTo(120,150);
    ctx.lineTo(120,190);
    ctx.stroke();
    //top
    ctx.moveTo(120,190);
    ctx.lineTo(163,190);
    ctx.stroke();
    //right side
    ctx.moveTo(163,150);
    ctx.lineTo(163,190);
    ctx.stroke();
    //h
    ctx.moveTo(158,185);
    ctx.lineTo(158,155);
    ctx.stroke();
    ctx.moveTo(153,185);
    ctx.lineTo(153,155);
    ctx.stroke();
    ctx.moveTo(158,170);
    ctx.lineTo(153,170);
    ctx.stroke();
    //e
    ctx.moveTo(149,185);
    ctx.lineTo(149,155);
    ctx.stroke();
    ctx.moveTo(144,185);
    ctx.lineTo(149,185);
    ctx.stroke();
    ctx.moveTo(144,155);
    ctx.lineTo(149,155);
    ctx.stroke();
    ctx.moveTo(144,170);
    ctx.lineTo(149,170);
    ctx.stroke();
    //l
    ctx.moveTo(139,185);
    ctx.lineTo(139,155);
    ctx.stroke();
    ctx.moveTo(133,155);
    ctx.lineTo(139,155);
    ctx.stroke();
    //p
    ctx.moveTo(129,185);
    ctx.lineTo(129,155);
    ctx.stroke();
    ctx.moveTo(129,185);
    ctx.lineTo(124,185);
    ctx.stroke();
    ctx.moveTo(129,170);
    ctx.lineTo(124,170);
    ctx.stroke();
    ctx.moveTo(124,170);
    ctx.lineTo(124,185);
    ctx.stroke();
}
var leftLeg = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,130);
    ctx.lineTo(80,165);
    ctx.stroke();
}
var rightLeg = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,130);
    ctx.lineTo(120,165);
    ctx.stroke();
}

//clear canvas to start new game
var clearCanvas = function(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.save();
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0, 0, 200, 200);
  ctx.restore();
}

//AJAX request
var fetchAndDisplayGif = function(event) {
    //parameters to attach to our request
    var params = {
        api_key: "dc6zaTOxFJmzC",
        //send request for win or lose GIF
        tag : $scope.result
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
var setGifLoadedStatus = function(isCurrentlyLoaded) {
    $("#gif").attr("hidden", !isCurrentlyLoaded);
    $("#feedback").attr("hidden", isCurrentlyLoaded);
}

// remove disable class from buttons
// to start new game
var removeclass = function(){
  angular.element(document.querySelector("#a")).removeClass("disabled");
  angular.element(document.querySelector("#b")).removeClass("disabled");
  angular.element(document.querySelector("#c")).removeClass("disabled");
  angular.element(document.querySelector("#d")).removeClass("disabled");
  angular.element(document.querySelector("#e")).removeClass("disabled");
  angular.element(document.querySelector("#f")).removeClass("disabled");
  angular.element(document.querySelector("#g")).removeClass("disabled");
  angular.element(document.querySelector("#h")).removeClass("disabled");
  angular.element(document.querySelector("#i")).removeClass("disabled");
  angular.element(document.querySelector("#j")).removeClass("disabled");
  angular.element(document.querySelector("#k")).removeClass("disabled");
  angular.element(document.querySelector("#l")).removeClass("disabled");
  angular.element(document.querySelector("#m")).removeClass("disabled");
  angular.element(document.querySelector("#n")).removeClass("disabled");
  angular.element(document.querySelector("#o")).removeClass("disabled");
  angular.element(document.querySelector("#p")).removeClass("disabled");
  angular.element(document.querySelector("#q")).removeClass("disabled");
  angular.element(document.querySelector("#r")).removeClass("disabled");
  angular.element(document.querySelector("#s")).removeClass("disabled");
  angular.element(document.querySelector("#t")).removeClass("disabled");
  angular.element(document.querySelector("#u")).removeClass("disabled");
  angular.element(document.querySelector("#v")).removeClass("disabled");
  angular.element(document.querySelector("#w")).removeClass("disabled");
  angular.element(document.querySelector("#x")).removeClass("disabled");
  angular.element(document.querySelector("#y")).removeClass("disabled");
  angular.element(document.querySelector("#z")).removeClass("disabled");
}
}]);
