var win = 0;
var lose = 0;
var randomNuber = "";
var userPoint = 0;
var crystalList = [];
var redPoint;
var greenPoint;
var yellowPoint;
var bluePoint;
var result = 0;

function score() {
  $("#win-score").text(win);
  $("#lose-score").text(lose);
}
function randomChoice() {
  randomNuber = Math.floor(Math.random() * 100 + 20);
  $("#given-number").html(randomNuber);
}
function randomCrystalPonit() {
  for (var i = 0; i < 4; i++) {
    var randomPoint = Math.floor(Math.random() * 9 + 1);
    crystalList[i] = randomPoint;
    console.log(crystalList);
    redPoint = crystalList[0];
    greenPoint = crystalList[1];
    yellowPoint = crystalList[2];
    bluePoint = crystalList[3];
    console.log(redPoint, greenPoint, yellowPoint, bluePoint);
  }
}
function clear() {
  result = 0;
  randomChoice();
  randomCrystalPonit();
  score();
}
function resultCheck() {
  if (randomNuber == result) {
    win++;
    clear();
  } else if (randomNuber < result) {
    lose++;
    clear();
  }
}

clear();

$("#red").click(function(event) {
  result = result + redPoint;
  resultCheck();
  $("#user-score").text(result);
});
$("#green").click(function(event) {
  result = result + greenPoint;
  resultCheck();
  $("#user-score").text(result);
});
$("#yellow").click(function(event) {
  result = result + yellowPoint;
  resultCheck();
  $("#user-score").text(result);
});
$("#blue").click(function(event) {
  result = result + bluePoint;
  resultCheck();
  $("#user-score").text(result);
});

console.log(result);
console.log(randomNuber);
console.log(win);
console.log(lose);
