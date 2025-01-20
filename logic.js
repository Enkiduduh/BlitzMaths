import {
  cardDwarf_0, cardDwarf_1, cardDwarf_2, cardDwarf_3, cardDwarf_4, cardDwarf_5, cardDwarf_6, cardDwarf_7, cardDwarf_8, cardDwarf_9
} from "./data.js";

console.log(cardDwarf_4);

const handCardContainerHTML = document.querySelector(".hand-card-container");






for (let i = 0; i < 7; i++) {
  const randomN = Math.floor(Math.random() * 10);
  const handCardInjection = `
  <div
  class="hand-card"><img src="${eval(`cardDwarf_${randomN}`).img}" alt="81" class="hand-card-img">
  </div>
  `;
  handCardContainerHTML.innerHTML += handCardInjection;
};


setTimeout(() => {
  const handCardItem = document.querySelectorAll(".hand-card-img");

  console.log(handCardItem);

  handCardItem.forEach(item => (
    item.addEventListener("click", function () {
      console.log(item)
    })
  ))
}, 2000);
