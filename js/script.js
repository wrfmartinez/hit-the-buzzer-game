const startButton = document.getElementById("start-btn");
const pElement = document.createElement("p");
let scoreState = 0;
const cookieImg = document.createElement("img");

const score = () => {
  scoreState++;
  pElement.textContent = "Score: " + scoreState;
}

const runGame = () => {
  const body = document.querySelector("body");
  const gameSection = document.createElement("section");
  const scoreboardSection = document.createElement("section");
  const gameDisplaySection = document.createElement("section");
  const gameComponentsDiv = document.createElement("div");
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

    buzzer.setAttribute("id", "buzzer");

    // Add scoreboard to the page
    const game = document.getElementById("game");
    game.appendChild(scoreboardSection);
    game.appendChild(gameDisplaySection);

    const gameDisplay = document.getElementById("game-display");
    gameDisplay.appendChild(gameComponentsDiv);

    // Add the buzzer to the page
    const gameComponents = document.querySelector(".game-components");
    gameComponents.appendChild(buzzer);

    buzzer.addEventListener("click", score);
  }, 1200)  
}

startButton.addEventListener("click", runGame);