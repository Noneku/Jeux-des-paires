
//////////*****************VALUES*****************//////////

let content = document.getElementById('Content');
let Time = document.getElementById('Time');

let cards = [
  "red",
  "red",
  "blue",
  "blue",
  "yellow",
  "yellow",
  "green",
  "green",
  "grey",
  "grey",
  "purple",
  "purple"
];
//Array for compare cards
let compareChoice = [];
//Array with cards pair
let pairs = [];

//////////*****************VALUES*****************//////////

//////////*****************FUNCTIONS*****************//////////

//Start game
function start(){
  let startContent = document.getElementById('Start').style.display = 'none';
  let bgImage = document.getElementById('bg.image').style.backgroundImage = "url('img/jeuxpaires.jpg')";
  Time.style.display = 'flex';
  content.style.display = 'flex';
  //Sort randome cards
  cards = randomize(cards);
  //Display Cards
  showCards();
  //Start timer
  timer();
}

//Randomize array
function randomize(array){
  return array.sort(function(a, b){return 0.5 - Math.random()});
}

//Create card
function makeCard() {
  var card = document.createElement('div');
  card.classList.add("carte");
  card.style.backgroundColor = "black";
  return card;
}

function timer(){
  var timer = 30;
  Time.innerHTML = timer;
  Time.style.fontSize = "25px";
  var content = setInterval(function(){
    Time.innerHTML = timer--;
    Time.style.fontSize = "25px";
    if(timer <= 14){
      Time.style.fontSize = "45px";
    }
    if(timer === -1){
      clearInterval(content);
      alert('Vous avez perdu');
      location.reload();
    }
  }, 1000);
}

//Event CLick
function eventClick(value, color, compareChoice){
  value.onclick = function() {
    if(this.style.backgroundColor === 'black'){
      this.style.background = color;
      compareChoice.push(this);
      //Compare two card in Array compareChoice
      compareColor(compareChoice);
    }
  }
}

//Add cards on board game
function showCards() {
    for (var i = 0; i < cards.length; i++) {
      var card = makeCard();
      //Create childs of content
      content.appendChild(card);
      //Add event
      eventClick(card, cards[i], compareChoice);
    }
}

//Compare 2 cards background
function compareColor(compareChoice) {
  //Compare if array compareChoice got 2 elements
  if (compareChoice.length === 2) {
    if(compareChoice[0].style.backgroundColor != compareChoice[1].style.backgroundColor){
      setTimeout(function(){
        compareChoice[0].style.backgroundColor = 'black';
        compareChoice[1].style.backgroundColor = 'black';
        compareChoice.length = 0;
      }, 700);
    }
    else
    {
      pairs.push(compareChoice[0], compareChoice[1]);
      checkFinishGame(pairs);
      compareChoice.length = 0;
    }
  }
}
//Check if all pairs are finded
function checkFinishGame(pairs){
  if(pairs.length === 12){
    setTimeout(function(){
      location.reload();
    }, 1500);
    alert('Bien joué');
  }
}


//////////*****************FUNCTIONS*****************//////////

//////////*****************LOGIC CODE*****************//////////
//////////*****************LOGIC CODE*****************//////////
