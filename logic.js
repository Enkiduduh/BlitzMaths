import {
  cardDwarf_0, cardDwarf_1, cardDwarf_2, cardDwarf_3, cardDwarf_4, cardDwarf_5, cardDwarf_6, cardDwarf_7, cardDwarf_8, cardDwarf_9
} from "./data.js";

const data = [cardDwarf_0, cardDwarf_1, cardDwarf_2, cardDwarf_3, cardDwarf_4, cardDwarf_5, cardDwarf_6, cardDwarf_7, cardDwarf_8, cardDwarf_9
]
const handCardContainerHTML = document.querySelector(".hand-card-container");
const cardEmpPlayerHTML = document.querySelectorAll(".emplacement-player");
const cardEmpBotHTML = document.querySelectorAll(".emplacement-bot");

// function handCardBot() {
//   for (let i = 1; i < 4; i++) {
//     const handCardInjectionBot = `
//   <div
//   class="hand-card playedCard-bot"><img src="assets/cards/testCardBgBot.png" alt="81" class="hand-card-img">
//   </div>
//   `;
//     cardEmpBotHTML.innerHTML += handCardInjectionBot;
//   }
// }

let playerDeck = 30;
const deckCount = document.querySelector(".deck-count");


function initializeGame() {
  for (let i = 1; i < 7; i++) {
    const randomN = Math.floor(Math.random() * 10);
    const handCardInjection = `
    <div
    class="hand-card"><img src="${eval(`cardDwarf_${randomN}`).img}" alt="81" class="hand-card-img ">
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
      class="hand-card"><img src="${eval(`cardDwarf_${randomN}`).img}" alt="81" class="hand-card-img ">
      </div>
      `;
    handCardContainerHTML.innerHTML += handCardInjection;
    playerDeck -= 1;
    deckCount.textContent = `${playerDeck} cartes restantes`;
  };
  console.log("Pioche 3 cartes.")
}

const redHTML = document.querySelector(".r-red");
const blueHTML = document.querySelector(".r-blue");
const yellowHTML = document.querySelector(".r-yellow");

let tempArr = [];
let cardChoiceText = "";
let actualCardArr = []
let cardChoice = false;
let counterEmpl = 0
let objCardArr = [];
setTimeout(() => {
  const handCardItems = document.querySelectorAll(".hand-card-img");
  handCardItems.forEach(card => {
    actualCardArr.push(handCardItems)
    console.log(actualCardArr)
  })
  handCardItems.forEach(item => (
    item.addEventListener("click", function () {
      cardChoice = true;
      tempArr = [];
      console.log(item)
      item.classList.toggle("chosen");
      tempArr.push(item.outerHTML);
      cardChoiceText = tempArr[0];
      console.log(cardChoiceText.replace("chosen", ""))
      verifyEmplFree(item);
    })
  ))


  cardEmpPlayerHTML.forEach(empl => (
    empl.addEventListener("click", () => {
      if (cardChoice) {
        console.log("La carte choisie doit être détruite")
        empl.innerHTML = cardChoiceText.replace("chosen", "");
        empl.classList.add("playedCard")
        const chosenCard = document.querySelector(".hand-card-img.chosen");
        counterEmpl += 1;
        if (chosenCard) {
          chosenCard.parentElement.remove();
        }
        cardChoice = false;
        if (handCardContainerHTML.childElementCount <= 3) {
          CardRecover();
        }

        if (empl.id == "empl-1") {
          console.log(empl, "empl-1")
          displayDataCard(empl, empl.id)
        } else if (empl.id == "empl-2") {
          console.log(empl, "empl-2")
          displayDataCard(empl, empl.id)
        } else if (empl.id == "empl-3") {
          console.log(empl, "empl-3")
          displayDataCard(empl, empl.id)
        }

      }
    })
  ))

}, 10)


function displayDataCard(empl,emplId) {
  const fullSrc = empl.querySelector("img").src;
  const baseUrl = "http://127.0.0.1:5500/";
  const itemSrc = fullSrc.replace(baseUrl, "");
  const objCard = data.filter(card => card.img == itemSrc);
  const emplIdSuppressor = "empl-"
  const emplIdRecover = emplId.replace(emplIdSuppressor, "");

  if (objCard.length > 0) {
    const resultHTML = document.querySelector(`.result-player-${emplIdRecover}`);
    console.log(resultHTML, emplIdRecover)
      const red = objCard[0].red;
      const blue = objCard[0].blue;
      const yellow = objCard[0].yellow;
      console.log(`red: ${red}`, `blue: ${blue}`, `yellow: ${yellow}`)
      document.querySelector(`.r-red-${emplIdRecover}`).textContent = red;
      document.querySelector(`.r-blue-${emplIdRecover}`).textContent = blue;
      document.querySelector(`.r-yellow-${emplIdRecover}`).textContent = yellow;
  }
}


// function playerTurnValid(emplacementCard) {
//   if (counterEmpl == 3) {
//     console.log("Trois cartes ont été jouées.");
//     const swordBgCard = `<img
//                 class="emplacement-player-img"
//                 src="/assets/cards/sword2_bg.png"
//                 alt=""
//               />`;
//     emplacementCard.innerHTML = swordBgCard;
//   }
// }


function verifyEmplFree(item) {
  if (item.classList.contains("chosen")) {
    cardEmpPlayerHTML.forEach(empl => {
      if (!empl.classList.contains("playedCard")) {
        empl.classList.add("available");
      } else {
        empl.classList.remove("available");
      }
    })
  }
}



// placeCardOnEmplacement();
initializeGame();
