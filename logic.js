import {
  cardDwarf_0, cardDwarf_1, cardDwarf_2, cardDwarf_3, cardDwarf_4, cardDwarf_5, cardDwarf_6, cardDwarf_7, cardDwarf_8, cardDwarf_9
} from "./data.js";

const handCardContainerHTML = document.querySelector(".hand-card-container");
const cardEmpPlayerHTML = document.querySelectorAll(".emplacement-player");
const cardEmpBotHTML = document.querySelectorAll(".emplacement-bot");

function handCardBot() {
  for (let i = 1; i < 4; i++) {
    const handCardInjectionBot = `
    <div
    class="hand-card"><img src="assets/cards/testCardBgBot.png" alt="81" class="hand-card-img">
    </div>
    `;
    cardEmpBotHTML.innerHTML += handCardInjectionBot;
  }
}

let playerDeck = 30;
const deckCount = document.querySelector(".deck-count");


function initializeGame() {
  for (let i = 1; i < 7; i++) {
    const randomN = Math.floor(Math.random() * 10);
    const handCardInjection = `
    <div
    class="hand-card"><img src="${eval(`cardDwarf_${randomN}`).img}" alt="81" class="hand-card-img">
    </div>
    `;
    handCardContainerHTML.innerHTML += handCardInjection;
    playerDeck -= 1;
    deckCount.textContent = `${playerDeck} cartes restantes`;
  };
}

function CardRecover() {
  for (let i = 1; i < 4; i++) {
    const randomN = Math.floor(Math.random() * 10);
    const handCardInjection = `
      <div
      class="hand-card"><img src="${eval(`cardDwarf_${randomN}`).img}" alt="81" class="hand-card-img">
      </div>
      `;
    handCardContainerHTML.innerHTML += handCardInjection;
    playerDeck -= 1;
    deckCount.textContent = `${playerDeck} cartes restantes`;
  };
}




let tempArr = [];
let cardChoiceText = "";
let actualCardArr = []
setTimeout(() => {
  const handCardItems = document.querySelectorAll(".hand-card-img");
  handCardItems.forEach(card => {
    actualCardArr.push(handCardItems)
    console.log(actualCardArr)
  })
  handCardItems.forEach(item => (
    item.addEventListener("click", function () {
      tempArr = [];
      console.log(item)
      item.classList.toggle("chosen");
      tempArr.push(item.outerHTML);
      cardChoiceText = tempArr[0];
      console.log(cardChoiceText.replace("chosen", ""))

      cardEmpPlayerHTML.forEach(empl => (
        empl.addEventListener("click", function () {
          empl.innerHTML = cardChoiceText.replace("chosen", "");
          item.parentElement.remove();
          console.log(`Number of children after removing a card: ${handCardContainerHTML.childElementCount}`);

          if (handCardContainerHTML.childElementCount <= 3) {
            CardRecover();
          }
        })
      ))
    })
  ))


}, 2000)







// placeCardOnEmplacement();
initializeGame();
handCardBot();
