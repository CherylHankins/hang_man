var app=angular.module("Hang_man", []);
app.controller("GameController",['$scope',function($scope){


  var worldLandmarks = [{name:"statue of liberty", hint:"New York Harbor"},
                    {name:"eiffel tower", hint:"Paris"},
                    {name:"big ben", hint:"clock"},
                    {name:"the colosseum", hint:"Rome"},
                    {name:"notre dame", hint:"paris"},
                    {name:"stonehenge", hint:"rocks in England"},
                    {name:"arc de triomphe", hint: "arch in Paris"},
                    {name:"taj mahal", hint:"India"},
                    {name:"kilimanjaro", hint:"African mountain"},
                    {name:"louvre", hint:"Art"},
                    {name:"buckingham palace", hint:"Royal home"},
                    {name:"matterhorn", hint:"Alps"},
                    {name:"pompeii", hint:"Buried City"},
                    {name:"christ the redeemer", hint:"Rio de Janeiro"},
                    {name:"the grand canyon", hint:"Colorado river"},
                    {name:"niagara falls", hint:"3 falls"},
                    {name:"rock of gibraltar", hint:"Iberian Peninsula"},
                    {name:"the gherkin", hint:"London tower"},
                    {name:"moai", hint:"Polynesia"},
                    {name:"victoria falls", hint:"Zambezi River"},
                    {name:"wailing wall", hint:"Jerusalem"},
                    {name:"loch ness", hint:"Scotland"},
                    {name:"sistine chapel", hint:"Vatican City"},
                    {name:"gateway arch", hint:"St. Louis, Missouri, USA"},
                    {name:"kremlin", hint:"Moscow"},
                    {name:"blue mosque", hint:"Istanbul"},
                    {name:"winter palace", hint:"St. Petersburg"},
                    {name:"pond du garre", hint:"Roman aqueduct"},
                    {name:"golden gate bridge", hint:"San Francisco"}
                  ];

  var videoGameWords = [{name:"tetris", hint:"stack blocks"},
                        {name:"minecraft", hint:"survival/creative"},
                        {name:"guitar hero", hint:"music"},
                        {name:"assassins creed", hint:"Knights Templar"},
                        {name:"kingdom hearts", hint:"Heartless"},
                        {name:"fallout", hint:"Vault Dweller"},
                        {name:"sonic", hint:"hedgehodge"},
                        {name:"donkey kong", hint:"Ape"},
                        {name:"grand theft auto", hint:"criminal"},
                        {name:"portal", hint:"Glados"},
                        {name:"halo", hint:"Master Chief"},
                        {name:"pokemon", hint:"catch them all!"},
                        {name:"the legend of zelda", hint:"Link"},
                        {name:"super mario", hint:"Mario"},
                        {name:"call of duty", hint:"mainstream FPS"},
                        {name:"final fantasy", hint:"Square Enix"},
                        {name:"mortal kombat", hint:"Arcade Fighter"},
                        {name:"destiny", hint:"Guardian"},
                        {name:"overwatch", hint:"Blizzard FPS"},
                        {name:"world of warcraft", hint:"Blizzard RPG"},
                        {name:"diablo", hint:"Blizzard loot grind"},
                        {name:"titanfall", hint:"Mech FPS"},
                        {name:"elder scrolls", hint:"Skyrim"},
                        {name:"dragon age", hint:"Morrigan"},
                        {name:"mass effect", hint:"Commander Shepard"},
                        {name:"battlefield", hint:"Call of Duty with bullet drop"},
                        {name:"league of legends", hint:"MOBA"},
                        {name:"fire emblem", hint:"Marth"},
                        {name:"mario cart", hint:"Racing"}
                       ];

  var capitalCities = [{name:"kabul", hint:"Afghanistan"},
                       {name:"buenos aires", hint:"Argentina"},
                       {name:"canberra", hint:"Australia"},
                       {name:"vienna", hint:"Austria"},
                       {name:"nassau", hint:"Bahamas"},
                       {name:"minsk", hint:"Belarus"},
                       {name:"brussels", hint:"Belgium"},
                       {name:"sarajevo", hint:"Bosnia"},
                       {name:"phnom penh", hint:"Cambodia"},
                       {name:"ottawa", hint:"Canada"},
                       {name:"santiago", hint:"Chile"},
                       {name:"beijing", hint:"China"},
                       {name:"san jose", hint:"Costa Rica"},
                       {name:"havana", hint:"Cuba"},
                       {name:"prague", hint:"Czech Republic"},
                       {name:"copenhagen", hint:"Denmark"},
                       {name:"cairo", hint:"Egypt"},
                       {name:"helsinki", hint:"Finland"},
                       {name:"paris", hint:"France"},
                       {name:"berlin", hint:"Germany"},
                       {name:"athens", hint:"Greece"},
                       {name:"port au prince", hint:"Haiti"},
                       {name:"budapest", hint:"Hungary"},
                       {name:"reykjavik", hint:"Iceland"},
                       {name:"new delhi", hint:"India"},
                       {name:"jakarta", hint:"Indonesia"},
                       {name:"tehran", hint:"Iran"},
                       {name:"baghdad", hint:"Iraq"},
                       {name:"dublin", hint:"Ireland"},
                       {name:"jerusalem", hint:"Israel"},
                       {name:"rome", hint:"Italy"},
                       {name:"tokyo", hint:"Japan"},
                       {name:"nairobi", hint:"Kenya"},
                       {name:"beirut", hint:"Lebanon"},
                       {name:"mexico city", hint:"Mexico"},
                       {name:"monaco", hint:"Monaco"},
                       {name:"wellington", hint:"New Zealand"},
                       {name:"oslo", hint:"Norway"},
                       {name:"lima", hint:"Peru"},
                       {name:"warsaw", hint:"Poland"},
                       {name:"moscow", hint:"Russia"},
                       {name:"singapore", hint:"Singapore"},
                       {name:"seoul", hint:"South Korea"},
                       {name:"madrid", hint:"Spain"},
                       {name:"stockholm", hint:"Sweden"},
                       {name:"bern", hint:"Switzerland"},
                       {name:"damascus", hint:"Syria"},
                       {name:"taipei", hint:"Taiwan"},
                       {name:"washington d c", hint:"United States"},
                       {name:"caracas", hint:"Venezuela"},
                       {name:"hanoi", hint:"Vietnam"}
                     ];

  var popCulture = [{name:"taylor swift", hint:"Album of the Year artist"},
                    {name:"ryan reynolds", hint:"Deadpool"},
                    {name:"george martin", hint:"'Fifth Beatle'"},
                    {name:"superman", hint:"Batman v "},
                    {name:"rio de janeiro", hint:"2016 Olympics"},
                    {name:"rolling stones", hint:"played free concert in Cuba"},
                    {name:"zootopia", hint: "2016 Disney film"},
                    {name:"nyquist", hint:"Kentucky Derby"},
                    {name:"pittsburgh penguins", hint:"Stanley Cup"},
                    {name:"denver broncos", hint:"Super Bowl"},
                    {name:"sully", hint:"Tom Hanks role"},
                    {name:"finding dory", hint:"Disney fish"},
                    {name:"jason bourne", hint:"Matt Damon"},
                    {name:"cake by the ocean", hint:"DNCE"},
                    {name:"bruno mars", hint:"24k Magic"},
                    {name:"keith urban", hint:"Blue Ain't Your Color"},
                    {name:"muhammad ali", hint:"boxing great"},
                    {name:"brexit", hint:"European Union"},
                    {name:"carrie fisher", hint:"debbie reynolds"},
                    {name:"lemonade", hint:"Beyonce"},
                    {name:"michael phelps", hint:"Olympic swimmer"},
                    {name:"fences", hint:"Denzel and Viola"},
                    {name:"suicide squad", hint:"anti-hero team"},
                    {name:"hidden figures", hint:"NASA females"},
                    {name:"prince", hint:"purple"},
                    {name:"gene wilder", hint:"original willy wonka"},
                    {name:"glenn frey", hint:"The Eagles"}
                  ];

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
 // control views
$scope.intropage = false;
$scope.gamepage = false;
$scope.loginpage = true;
$scope.letterbank = false;
$scope.newgame = false;
$scope.myCanvas = false;
 //info for win/lose stats
$scope.currentPlayer = "";
$scope.gamesPlayed = 0;
$scope.gamesWon = 0;
$scope.currentPlayerStats = "";
$scope.catName = "";
$scope.playerScores = [];
  // display gameword hint
$scope.HINT = false;

// capture current player info and change view
$scope.add = function(){
  console.log($scope.currentPlayer);
  $scope.intropage = true;
  $scope.gamepage = false;
  $scope.loginpage = false;
}
// select random word from selected category
$scope.getpopCulture = function(){
  rand = [Math.floor(Math.random() * popCulture.length)];
  selection = popCulture[rand];
  $scope.word = selection.name;
  $scope.hint = selection.hint;
  $scope.category = "popCulture";
  $scope.catName = "2016 Pop Culture";
  setGameboard();
}

$scope.getcapitalCities = function(){
  rand = [Math.floor(Math.random() * capitalCities.length)];
  selection = capitalCities[rand];
  $scope.word = selection.name;
  $scope.hint = selection.hint;
  $scope.category = "capitalCities";
  $scope.catName = "Capital Cities";
  setGameboard();
}

$scope.getvideoGameWords = function(){
  rand = [Math.floor(Math.random() * videoGameWords.length)];
  selection = videoGameWords[rand];
  $scope.word = selection.name;
  $scope.hint = selection.hint;
  $scope.category = "videoGameWords";
  $scope.catName = "Video Games";
  setGameboard();
}

$scope.getworldLandmarks = function(){
  rand = [Math.floor(Math.random() * worldLandmarks.length)];
  selection = worldLandmarks[rand];
  $scope.word = selection.name;
  $scope.hint = selection.hint;
  $scope.category = "worldLandmarks";
  $scope.catName = "World Landmarks";
  setGameboard();
}

//set blank spaces for the gameword
var setGameboard = function(){
  $scope.intropage = false;
  $scope.gamepage = true;
  $scope.letterbank = true;
  $scope.myCanvas = true;
  $scope.gamesPlayed += 1;
  console.log("games played", $scope.gamesPlayed);
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
      $scope.HINT = true;
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
      $scope.gamesWon += 1;
      $scope.displayresult = "You Win!";
    }else
      if ($scope.result=="game over"){
      fetchAndDisplayGif();
      $scope.displayresult = "Try Again :(";
  }
  angular.element(document.querySelector("#myCanvas")).addClass("animated hinge");
  $scope.letterbank = false;
  $scope.newgame = true;
  console.log("games won", $scope.gamesWon);
  currentPlayerStats();
}
// calculate win percentage
var currentPlayerStats = function(){
  console.log($scope.gamesWon/$scope.gamesPlayed*100);
  $scope.currentPlayerStats = ($scope.gamesWon/$scope.gamesPlayed*100);
}

//start new game with new category selection
$scope.changeCategory = function(){
  $scope.category = "";
  $scope.catName = "";
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
  $scope.letterbank = true;
  $scope.newgame = false;
  $scope.HINT = false;
  $("#gif").hide();
  clearCanvas();
  removeclass();
  angular.element(document.querySelector("#myCanvas")).removeClass("animated hinge");

  if($scope.category == "popCulture"){
    $scope.getpopCulture();
  }
  if($scope.category == "capitalCities"){
    $scope.getcapitalCities();
  }
  if($scope.category == "videoGameWords"){
    $scope.getvideoGameWords();
  }
  if($scope.category == "worldLandmarks"){
    $scope.getworldLandmarks();
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
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(100,65,4,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();
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

$scope.logout = function() {
  console.log($scope.currentPlayer, $scope.currentPlayerStats);
  $scope.playerScores.push({
    name: $scope.currentPlayer,
    score: $scope.currentPlayerStats
  });
  console.log($scope.playerScores);
  $scope.gameWord=[];
  $scope.gameLines=[];
  $scope.lives = 6;
  $scope.numWrong = 0;
  $scope.word="";
  $scope.wordLine="";
  $scope.result = "";
  $scope.category = "";
  $scope.guesses = [];
  $scope.intropage = false;
  $scope.gamepage = false;
  $scope.loginpage = true;
  $scope.letterbank = false;
  $scope.newgame = false;
  $scope.myCanvas = false;
  $scope.currentPlayer = "";
  $scope.gamesPlayed = 0;
  $scope.gamesWon = 0;
  $scope.currentPlayerStats = "";
  $scope.catName = "";
  $scope.displayresult = "";
  $scope.HINT = false;
  $("#gif").hide();
  clearCanvas();
  removeclass();
  angular.element(document.querySelector("#myCanvas")).removeClass("animated hinge");
}
}]);
