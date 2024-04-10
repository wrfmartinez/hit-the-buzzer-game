const body = document.querySelector("body");
const startButton = document.getElementById("start-btn");

const runGame = () => {
  const gameIntro = document.getElementById("game-intro");
  gameIntro.classList.add("fade-out");
  startButton.classList.add("fade-out");
  setTimeout(() => {
    gameIntro.classList.add("remove");
    startButton.classList.add("remove");
  }, 1200)
}

startButton.addEventListener("click", runGame);