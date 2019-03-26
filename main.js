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
//Array for compare cards
let choice = [];
//Array with cards pair
let pairs = [];
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
    //Compare two card in Array choice
    compareColor(choice);
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

//Compare 2 card background
function compareColor(choice) {
  if (choice.length === 2) {
    if(choice[0].style.background != choice[1].style.background){
      setTimeout(function(){
        choice[0].style.background = 'black';
        choice[1].style.background = 'black';
        choice.length = 0;
      }, 1000);
    }
    else
    {
      pairs.push(choice[0], choice[1]);
      choice.length = 0;
      console.log(pairs);
    }
  }
}
//Check if all pairs are finded
function checkFinishGame(pairs){
  
}
//Sort randome cards
cards = randomize(cards);

//Display Cards
showCards();
