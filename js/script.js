const body = document.querySelector("body");
const startButton = document.getElementById("start-btn");
const divElement = document.createElement("div");
const pElement = document.createElement("p");
const gameComponentsDiv = document.createElement("div");
const cookieImg = document.createElement("img");
let message = document.createElement("p");
let scoreState = 0;

const displayMessage = () => {
  message.textContent = "You Win A Cookie!";
  cookieImg.replaceWith(message);
}

const showCookie = () => {
  cookieImg.classList.remove("hide");

  cookieImg.classList.add("rotate");

  setTimeout(() => {
    cookieImg.classList.remove("rotate");
    cookieImg.classList.add("scale");
  }, 300)

  setTimeout(() => {
    cookieImg.classList.remove("scale");
    cookieImg.classList.remove("rotate");
  }, 1200)
}

const removeCookie = () => {
  displayMessage();
  setTimeout(() => {
    message.replaceWith(cookieImg);
    cookieImg.classList.add("hide");
  }, 700)
}

const scoreCounter = () => {
  if (scoreState < 20) {
    scoreState++;
    pElement.textContent = "Score: " + scoreState;
    showCookie();
    setTimeout(() => {
    removeCookie();
    }, 1000)
  } else {
    message.textContent = "You ate too much cookies.. Game Over";
    cookieImg.replaceWith(message);
  }
}

const runGame = () => {
  const gameSection = document.createElement("section");
  const scoreboardSection = document.createElement("section");
  const gameDisplaySection = document.createElement("section");
  const buzzer = document.createElement("button");
  const gameIntro = document.getElementById("game-intro");
  
  // Adds fade out animation to the game intro elements
  gameIntro.classList.add("fade-out");
  startButton.classList.add("fade-out");
  
  // Waits 1.2 seconds before removing the game intro elements off the page and setting intial state of the game
  setTimeout(() => {
    gameIntro.classList.add("remove");
    startButton.classList.add("remove");

    // Dynamically adding game elements onto the page
    gameSection.setAttribute("id", "game");
    body.appendChild(gameSection);

    scoreboardSection.setAttribute("id", "scoreboard");
    scoreboardSection.appendChild(pElement);
    pElement.textContent = "Score: " + scoreState;

    gameDisplaySection.setAttribute("id", "game-display");
    body.appendChild(gameDisplaySection);

    gameComponentsDiv.classList.add("game-components");

    cookieImg.setAttribute("id", "cookie");
    cookieImg.setAttribute("src", "assets/cookie.svg");
    cookieImg.setAttribute("alt", "cookie");
    cookieImg.classList.add("hide");

    buzzer.setAttribute("id", "buzzer");

    // Add scoreboard to the page
    const game = document.getElementById("game");
    game.appendChild(scoreboardSection);
    game.appendChild(gameDisplaySection);

    const gameDisplay = document.getElementById("game-display");
    gameDisplay.appendChild(gameComponentsDiv);

    // Add the buzzer to the page
    const gameComponents = document.querySelector(".game-components");
    gameComponents.appendChild(divElement);
    divElement.appendChild(cookieImg)
    // gameComponents.appendChild(cookieImg);
    gameComponents.appendChild(buzzer);

    buzzer.addEventListener("click", scoreCounter);
  }, 1200)  
}

document.addEventListener("keydown", runGame);
startButton.addEventListener("click", runGame);