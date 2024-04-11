const body = document.querySelector("body");
const startButton = document.getElementById("start-btn");
const divElement = document.createElement("div");
const pElement = document.createElement("p");
const gameInstruction = document.createElement("p");
const gameComponentsDiv = document.createElement("div");
const scoreboardSection = document.createElement("section");
const buzzer = document.createElement("button");
const cookieImg = document.createElement("img");
let message = document.createElement("p");
let scoreState = 0;
const randomCookieGoal = Math.floor(Math.random() * 205);

const displayMessage = () => {
  message.textContent = "You Win A Cookie!";
  cookieImg.replaceWith(message);
}

const showCookie = () => {
  cookieImg.classList.remove("hide");

  cookieImg.classList.add("rotate");

  setTimeout(() => {
    cookieImg.classList.remove("rotate");
  }, 200)
}

const removeCookie = () => {
  displayMessage();
  setTimeout(() => {
    message.replaceWith(cookieImg);
  }, 400)
}

const scoreCounter = () => {
    scoreState++;
    pElement.textContent = "Score: " + scoreState + " Your Cookie Target Is: " + randomCookieGoal;
    showCookie();
    setTimeout(() => {
      removeCookie();
    }, 1000);
}

const startTimer = () => {
  setTimeout(() => {
    endGame();
  }, 20000);
}

const endGame = () => {
  scoreboardSection.classList.add("hide");
  buzzer.classList.add("hide");
  if (scoreState < randomCookieGoal) {
    message.textContent = "You did not satisfy your cravings.." + " You only ate " + scoreState + " cookies ☹︎";
  } else {
    message.textContent = "You satisfied your cravings.. Come back next time for more!" + " You ate " + scoreState + " cookies!";
  }
  cookieImg.replaceWith(message);
}

const runGame = () => {
  const gameSection = document.createElement("section");
  const gameDisplaySection = document.createElement("section");
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
    gameComponents.appendChild(buzzer);

    gameInstruction.textContent = "You have 2 minutes to eat as many cookies to satisfy your cookie craving by clicking the button! Eat up!";

    divElement.appendChild(gameInstruction);

    buzzer.addEventListener("click", () => {
      buzzer.classList.add("de-scale");
      setTimeout(() => {
        buzzer.classList.remove("de-scale");
      }, 200)
      gameInstruction.remove();
      startTimer();
      scoreCounter();
    });
  }, 1200)  
}

window.addEventListener("keydown", runGame, { once: true });
startButton.addEventListener("click", runGame);