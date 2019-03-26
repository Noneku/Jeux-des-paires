//Variables
var content = document.getElementById('Content');

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
//Function

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

function eventClick(value, color){
  value.onclick = function() {
    value.style.background = color;
  }
}

//Add cards on board game
function showCards() {
    for (var i = 0; i < cards.length; i++) {
      var card = makeCard();
      //Create childs of content
      content.appendChild(card);
      //Add event
      eventClick(card, cards[i]);
    }
}
//Sort randome cards
cards = randomize(cards);

//Display Cards
showCards();
