
var randomNumber1= Math.floor(Math.random()*6)+1;
var randpic="images/dice"+ randomNumber1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",randpic);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randpic2="images/dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randpic2);

if(randomNumber1<randomNumber2)document.querySelector("h1").innerHTML="player 2 wins🥇";
if(randomNumber1>randomNumber2)document.querySelector("h1").innerHTML="player 1 wins🥇";
else document.querySelector("h1").innerHTML="draw!";