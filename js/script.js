const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const score = document.querySelector(".score-number");
const gameOverScreen = document.querySelector("#game-over");
const retryButton = document.querySelector(".game-button");
const startButton = document.querySelector(".start-button");

let gameScore = 0;
score.innerHTML = gameScore;



const jump = () => {
  mario.classList.add("jump-mario"); //adiciona a classe jump ao mario

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500); //remove a classe jump
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft; 
    const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");


  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    gameOverScreen.style.visibility = "visible";

 
    clearInterval(loopGame);
  } 


}, 10);



const scoreGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft; 
  const marioPosition = +window
  .getComputedStyle(mario)
  .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      
      clearInterval(scoreGame);

  } else/* if (pipePosition <= 120 && pipePosition > 0 && marioPosition > 80)*/ {
    gameScore += 1;
      score.innerHTML = gameScore;
  }

}, 300);

const restart = (() => {
  gameOverScreen.style.visibility = "hidden"
  gameScore = 0;
  window.location.reload();

});

// const startGame = (() => {
//   window.location.href = "index.html"
// });



document.addEventListener("keydown", jump);
document.addEventListener("mousedown", jump);
document.addEventListener("touchstart", jump);


retryButton.addEventListener("click", restart);

// startButton.addEventListener("click", startGame);
