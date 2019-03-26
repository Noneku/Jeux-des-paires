
//////////*****************VALUES*****************//////////

let content = document.getElementById('Content');

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
  content.style.display = 'flex';
 //Sort randome cards
  cards = randomize(cards);

  //Display Cards
  showCards();

}
//Randomize array
function randomize(array){
  return array.sort(function(a, b){return 0.5 - Math.random()});
}

//Create card
function makeCard() {
  var card = document.createElement('div');
  card.classList.add("carte");
  return card;
}
//Event CLick
function eventClick(value, color, compareChoice){
  value.onclick = function() {
    value.style.background = color;
    compareChoice.push(value);
    //Compare two card in Array compareChoice
    compareColor(compareChoice);
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

//Compare 2 card background
function compareColor(compareChoice) {
  if (compareChoice.length === 2) {
    if(compareChoice[0].style.background != compareChoice[1].style.background){
      setTimeout(function(){
        compareChoice[0].style.background = 'black';
        compareChoice[1].style.background = 'black';
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
