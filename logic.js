import {
  cardDwarf_0, cardDwarf_1, cardDwarf_2, cardDwarf_3, cardDwarf_4, cardDwarf_5, cardDwarf_6, cardDwarf_7, cardDwarf_8, cardDwarf_9
} from "./data.js";

const handCardContainerHTML = document.querySelector(".hand-card-container");
const cardEmpPlayerHTML = document.querySelectorAll(".emplacement-player");


for (let i = 1; i < 7; i++) {
  const randomN = Math.floor(Math.random() * 10);
  const handCardInjection = `
  <div
  class="hand-card"><img src="${eval(`cardDwarf_${randomN}`).img}" alt="81" class="hand-card-img">
  </div>
  `;
  handCardContainerHTML.innerHTML += handCardInjection;
};

function placeCardOnEmplacement() {
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

          if (empl.innerHTML == null) {
          }
        })
      ))
    })
  ))


}, 2000)







// placeCardOnEmplacement();
