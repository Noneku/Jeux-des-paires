//Variables
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

let choice = [];
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
//Event CLick
function eventClick(value, color, choice){
  value.onclick = function() {
    value.style.background = color;
    choice.push(value);
    if (choice.length === 2) {
      if(choice[0].style.background != choice[1].style.background){
        setTimeout(function(){
          choice[0].style.background = 'black';
          choice[1].style.background = 'black';
          choice.length = 0;
        }, 1000);
      }
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
      eventClick(card, cards[i], choice);
    }
}
//Sort randome cards
cards = randomize(cards);

//Display Cards
showCards();
