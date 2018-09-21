// Code goes here

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace','King','Queen','Jack',
      'Ten', 'Nine', 'Eight', 'Seven', 'Six',
      'Five','Four', 'Three', 'Two'];

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

function createDeck() {
  let deck = [];
  for(let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for(let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        let card = {
          suit: suits[suitIdx],
          value: values[valueIdx]
        };
         deck.push(card); 
      }
    }
    return deck;
  }

hitButton.style.display = 'none';
stayButton.style.display = 'none';

newGameButton.addEventListener('click', function(){
  textArea.innerText= 'Started...';
  newGameButton.style.display = 'none';
  
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
});

let deck = createDeck();

function getNextCard() {
  return deck.shift();
}

function  getCardString(card) {
  return card.value + ' of  ' + card.suit;
  
}



let playerCards = [ getNextCard() ,  getNextCard() ];
console.log("Welcome to Blackjack!");
 
console.log("You are dealt: ");
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));
