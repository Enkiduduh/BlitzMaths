export let a = 0;
export let b = 0;
export const randomDice = Math.floor((Math.random() * 6) + 1);

export const playerDataScore = {};
export const botDataScore = {};
export let battleScorePlayer = 0;
export let battleScoreBot = 0;

export function battleRuleLesserWins() {
  if (a < b) {
    console.log("Red battle won by Player")
    battleScorePlayer += 1
  } else {
    console.log("Red battle won by Bot")
    battleScoreBot += 1;
  }
}

export function battleRuleGreaterWins(a, b) {
  if (a > b) {
    console.log("Red battle won by Player")
    battleScorePlayer += 1
  } else if (a < b) {
    console.log("Red battle won by Bot")
    battleScoreBot += 1;
  } else {
    console.log("Draw, no victor")
  }
}





export function recoverDataNumberColor() {
  const botSideRedOne = document.querySelector(`.bot-red-1`).textContent;
  const botSideBlueOne = document.querySelector(`.bot-blue-1`).textContent;
  const botSideYellowOne = document.querySelector(`.bot-yellow-1`).textContent;

  const botSideRedTwo = document.querySelector(`.bot-red-2`).textContent;
  const botSideBlueTwo = document.querySelector(`.bot-blue-2`).textContent;
  const botSideYellowTwo = document.querySelector(`.bot-yellow-2`).textContent;

  const botSideRedThree = document.querySelector(`.bot-red-3`).textContent;
  const botSideBlueThree = document.querySelector(`.bot-blue-3`).textContent;
  const botSideYellowThree = document.querySelector(`.bot-yellow-3`).textContent;

  const playerSideRedOne = document.querySelector(`.player-red-1`).textContent;
  const playerSideBlueOne = document.querySelector(`.player-blue-1`).textContent;
  const playerSideYellowOne = document.querySelector(`.player-yellow-1`).textContent;

  const playerSideRedTwo = document.querySelector(`.player-red-2`).textContent;
  const playerSideBlueTwo = document.querySelector(`.player-blue-2`).textContent;
  const playerSideYellowTwo = document.querySelector(`.player-yellow-2`).textContent;

  const playerSideRedThree = document.querySelector(`.player-red-3`).textContent;
  const playerSideBlueThree = document.querySelector(`.player-blue-3`).textContent;
  const playerSideYellowThree = document.querySelector(`.player-yellow-3`).textContent;

  playerDataScore.one = { red: playerSideRedOne, yellow: playerSideYellowOne, blue: playerSideBlueOne }
  playerDataScore.two = { red: playerSideRedTwo, yellow: playerSideYellowTwo, blue: playerSideBlueTwo }
  playerDataScore.three = { red: playerSideRedThree, yellow: playerSideYellowThree, blue: playerSideBlueThree }

  botDataScore.one = { red: botSideRedOne, yellow: botSideYellowOne, blue: botSideBlueOne }
  botDataScore.two = { red: botSideRedTwo, yellow: botSideYellowTwo, blue: botSideBlueTwo }
  botDataScore.three = { red: botSideRedThree, yellow: botSideYellowThree, blue: botSideBlueThree }


  console.log(playerDataScore)
  console.log(playerDataScore.two)
  console.log(playerDataScore.two.red)

  // test combat
  const colors =[ "red", "blue", "yellow"];
  const numbers =[ "one", "two", "three"];
    battleRuleGreaterWins(playerDataScore.one.yellow, botDataScore.one.yellow)

  


  console.log("battleScorePlayer:", battleScorePlayer)
  console.log("battleScoreBot:", battleScoreBot)

  if (battleScorePlayer > battleScoreBot) {
    console.log("Player won the battle !")
  } else if (battleScorePlayer < battleScoreBot) {
    console.log("Bot won the battle !")
  } else {
    console.log("There's no victorious challenger!")
  }
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
