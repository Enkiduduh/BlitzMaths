import {
  cardDwarf_0, cardDwarf_1, cardDwarf_2, cardDwarf_3, cardDwarf_4, cardDwarf_5, cardDwarf_6, cardDwarf_7, cardDwarf_8, cardDwarf_9,
  cardOrc_0, cardOrc_1, cardOrc_2, cardOrc_3, cardOrc_4, cardOrc_5, cardOrc_6, cardOrc_7, cardOrc_8, cardOrc_9
} from "./data.js";


import {
  recoverDataNumberColor, battleRuleLesserWins,battleRuleGreaterWins
} from "./rules.js"

const data = [cardDwarf_0, cardDwarf_1, cardDwarf_2, cardDwarf_3, cardDwarf_4, cardDwarf_5, cardDwarf_6, cardDwarf_7, cardDwarf_8, cardDwarf_9
]
const dataOrc = [cardOrc_0, cardOrc_1, cardOrc_2, cardOrc_3, cardOrc_4, cardOrc_5, cardOrc_6, cardOrc_7, cardOrc_8, cardOrc_9
]
const handCardContainerHTML = document.querySelector(".hand-card-container");
const cardEmpPlayerHTML = document.querySelectorAll(".emplacement-player");

function InitializeBotCard() {
  for (let i = 1; i < 4; i++) {
    const handCardInjectionBot = `
    <div class="playedCard-bot ">
                  <img
                    src="assets/cards/testCardBgBot.png"
                    alt="81"
                    class="hand-card-img"
                  />
                </div>
    `;
    document.querySelector(`.bot-emplacement-card-${i}`).innerHTML = handCardInjectionBot;
  }
}

function DisplayCardBot() {
  for (let i = 1; i < 4; i++) {
    const randomN = Math.floor(Math.random() * 10);
    const handCardInjectionBot = `
    <div
    class="playedCard-bot"><img src="${dataOrc[randomN].img}" alt="81" class="hand-card-img ">
    </div>
    `;
    document.querySelector(`.bot-emplacement-card-${i}`).innerHTML = handCardInjectionBot;
  }
}

let playerDeck = 30;
const deckCount = document.querySelector(".deck-count");


function initializeGame() {
  for (let i = 1; i < 7; i++) {
    const randomN = Math.floor(Math.random() * 10);
    const handCardInjection = `
    <div
    class="hand-card"><img src="${data[randomN].img}" alt="81" class="hand-card-img ">
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
      class="hand-card"><img src="${data[randomN].img}" alt="81" class="hand-card-img ">
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

let tempArr = [];
let cardChoiceText = "";
let actualCardArr = []
let cardChoice = false;
let counterEmpl = 0

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

        validateTurnPlayer(empl, empl.id);

      }
    })
  ))

}, 10)

function verifyEmplCardBot() {
  const cardEmpBotHTML = document.querySelectorAll(".emplacement-bot");
  cardEmpBotHTML.forEach(empl => {
    if (empl.id == "empl-bot-1") {
      console.log(empl, "empl-bot-1")
      displayDataCardBot(empl, empl.id)
    }
    if (empl.id == "empl-bot-2") {
      console.log(empl, "empl-bot-2")
      displayDataCardBot(empl, empl.id)
    } else if (empl.id == "empl-bot-3") {
      console.log(empl, "empl-bot-3")
      displayDataCardBot(empl, empl.id)
    }
  })
  battleReady();
}

function displayDataCardBot(empl, emplId) {
  if (!empl) {
    console.error("empl is undefined");
    return;
  }
  const fullSrc = empl.querySelector("img").src;
  const baseUrl = window.location.origin + "/";
  const itemSrc = fullSrc.replace(baseUrl, "");
  const objCard = dataOrc.filter(card => card.img == itemSrc);
  const emplIdSuppressor = "empl-bot-"
  const emplIdRecover = emplId.replace(emplIdSuppressor, "");
  const resultHTML = document.querySelector(`.result-bot-${emplIdRecover}`);
  console.log(objCard);
  if (objCard.length > 0) {
    console.log(resultHTML, emplIdRecover)
    const red = objCard[0].red;
    const blue = objCard[0].blue;
    console.log(`red: ${red}`, `blue: ${blue}`)
    document.querySelector(`.bot-red-${emplIdRecover}`).textContent = red;
    document.querySelector(`.bot-blue-${emplIdRecover}`).textContent = blue;
  }
}

function displayDataCard(empl, emplId) {
  if (!empl) {
    console.error("empl is undefined");
    return;
  }
  const fullSrc = empl.querySelector("img").src;
  const baseUrl = window.location.origin + "/";
  const itemSrc = fullSrc.replace(baseUrl, "");
  const objCard = data.filter(card => card.img == itemSrc);
  const emplIdSuppressor = "empl-"
  const emplIdRecover = emplId.replace(emplIdSuppressor, "");
  const resultHTML = document.querySelector(`.result-player-${emplIdRecover}`);

  if (objCard.length > 0) {
    const red = objCard[0].red;
    const blue = objCard[0].blue;
    document.querySelector(`.player-red-${emplIdRecover}`).textContent = red;
    document.querySelector(`.player-blue-${emplIdRecover}`).textContent = blue;
  }
}

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

let cardEmpl1Valid = false;
let cardEmpl2Valid = false;
let cardEmpl3Valid = false;

function validateTurnPlayer(emplacement, emplacementId) {
  const cardEmpl1 = document.getElementById("empl-1");
  const cardEmpl2 = document.getElementById("empl-2");
  const cardEmpl3 = document.getElementById("empl-3");

  console.log("Player turn not done yet.")
  if (cardEmpl1.firstElementChild) {
    console.log("cardEmpl1.firstElementChild:", cardEmpl1.firstElementChild);
    if (cardEmpl1.firstElementChild.classList.contains("hand-card-img")) {
      cardEmpl1Valid = true;
      console.log("CardEmpl1Valid ?", cardEmpl1Valid);
    }
  }
  if (cardEmpl2.firstElementChild) {
    console.log("cardEmpl2.firstElementChild:", cardEmpl2.firstElementChild);
    if (cardEmpl2.firstElementChild.classList.contains("hand-card-img")) {
      cardEmpl2Valid = true;
      console.log("CardEmpl2Valid ?", cardEmpl2Valid);
    }
  }
  if (cardEmpl3.firstElementChild) {
    console.log("cardEmpl3.firstElementChild:", cardEmpl3.firstElementChild);
    if (cardEmpl3.firstElementChild.classList.contains("hand-card-img")) {
      cardEmpl3Valid = true;
      console.log("CardEmpl3Valid ?", cardEmpl3Valid);
    }
  }
  if (cardEmpl1Valid && cardEmpl2Valid && cardEmpl3Valid) {
    console.log("Player turn done.")
    DisplayCardBot();
    verifyEmplCardBot();
    displayDataCard(emplacement, emplacementId);

    cardEmpl1Valid = false;
    cardEmpl2Valid = false;
    cardEmpl3Valid = false;
  }
}

function battleReady() {
  console.log("let's battle begins.")
  recoverDataNumberColor();

}

function startGame() {
  initializeGame(); // Pour les cartes du joueur
  InitializeBotCard(); // Pour injecter les cartes des Bots
  verifyEmplCardBot(); // Vérifie et affiche les données des Bots
}
startGame();
