export function battleRuleLesserWins() {
  recoverDataNumberColor()

  if (a < b) {
    console.log("Red battle won by Player")
  } else {
    console.log("Red battle won by Bot")
  }
}

export function battleRuleGreaterWins() {
  if (a > b) {
    console.log("Red battle won by Player")
  } else {
    console.log("Red battle won by Bot")
  }
}





export function recoverDataNumberColor() {
  const color = diceSixFaces();
  const botSideRed = document.querySelector(`.bot-${color}-1`).textContent;
  const playerSideRed = document.querySelector(`.player-${color}-1`).textContent;

  const botSideBlue = document.querySelector(`.bot-${color}-1`).textContent;
  const playerSideBlue = document.querySelector(`.player-${color}-1`).textContent;

  const botSideYellow = document.querySelector(`.bot-${color}-1`).textContent;
  const playerSideYellow = document.querySelector(`.player-${color}-1`).textContent;

  console.log("botSideRed:", botSideRed, "botSideYellow:", botSideYellow, "botSideBlue:", botSideBlue)
  console.log("playerSideRed:", playerSideRed, "playerSideYellow:", playerSideYellow, "playerSideBlue:", playerSideBlue)
  return botSideRed,
    playerSideRed,
    botSideBlue,
    playerSideBlue,
    botSideYellow,
    playerSideYellow;
}



export function diceSixFaces() {
  const randomN = Math.floor((Math.random() * 6) + 1)
  console.log(randomN)
  let color = "";
  switch (randomN) {
    case 1:
      color = "red";
      break;
    case 2:
      color = "red";
      break;
    case 3:
      color = "blue";
      break;
    case 4:
      color = "blue";
      break;
    case 5:
      color = "yellow";
      break;
    case 6:
      color = "yellow";
      break;
    default:
      break;
  }
  return color;
}
