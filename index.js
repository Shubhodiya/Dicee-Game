var randomNumber1=(Math.floor(Math.random()*6))+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2=(Math.floor(Math.random()*6))+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2){
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.textContent="🚩Player1 Wins";
}
else if (randomNumber2>randomNumber1){
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.textContent="Player2 Wins🚩";
}
else{
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.textContent="It's a draw!";
}
