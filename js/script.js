const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const score = document.querySelector(".score-number");

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

  } else if (pipePosition <= 120 && pipePosition > 0 && marioPosition > 80) {
    gameScore += 1;
      score.innerHTML = gameScore;
  }

}, 300);



document.addEventListener("keydown", jump);
document.addEventListener("mousedown", jump);
document.addEventListener("touchstart", jump);