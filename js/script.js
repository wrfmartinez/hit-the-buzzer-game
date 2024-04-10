const body = document.querySelector("body");
const startButton = document.getElementById("start-btn");

const runGame = () => {
  const pElement = document.createElement("p");
  const gameSection = document.createElement("section");
  const scoreboardSection = document.createElement("section");
  const gameDisplaySection = document.createElement("section");
  const gameComponentsDiv = document.createElement("div");
  const cookieImg = document.createElement("img");
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
    pElement.textContent = "Score: " + 0;

    gameDisplaySection.setAttribute("id", "game-display");
    body.appendChild(gameDisplaySection);

    gameComponentsDiv.classList.add("game-components");
    
    cookieImg.setAttribute("id", "cookie");
    cookieImg.setAttribute("src", "assets/cookie.svg")
    cookieImg.setAttribute("alt", "cookie")

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
  }, 1200)
}

const score = () => {

}

startButton.addEventListener("click", runGame);