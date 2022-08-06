import './index.css';

const deckBtn = document.getElementById('getDeck');
const drawBtn = document.getElementById('drawCards');
const player1Img = document.getElementById('player1-img');
const player2Img = document.getElementById('player2-img');

let deckId = 0;
function newDeck() {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      deckId = data.deck_id;
    });
}

function drawCards() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log();
      document.getElementById('player1-img').src = `${data.cards[0].image}`;
      document.getElementById('player2-img').src = `${data.cards[1].image}`;
    });
}

deckBtn.addEventListener('click', newDeck);
drawBtn.addEventListener('click', drawCards);
