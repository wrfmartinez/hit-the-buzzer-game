const startButton = document.getElementById("start-btn");
const pElement = document.createElement("p");
const gameComponentsDiv = document.createElement("div");
const cookieImg = document.createElement("img");
let scoreState = 0;

const showCookie = () => {
  cookieImg.classList.remove("hide");
}

const removeCookie = () => {
  cookieImg.classList.add("hide");
}

const scoreCounter = () => {
  scoreState++;
  pElement.textContent = "Score: " + scoreState;
  showCookie();
  setTimeout(() => {
    removeCookie();
  }, 1000)
}

const runGame = () => {
  const body = document.querySelector("body");
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
    gameComponents.appendChild(cookieImg);
    gameComponents.appendChild(buzzer);

    buzzer.addEventListener("click", scoreCounter);
  }, 1200)  
}

startButton.addEventListener("click", runGame);