const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const score = document.querySelector(".score-number");

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};
let pontuation = 0

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
  } else if (pipePosition <= 120 && pipePosition > 0 && marioPosition > 80){
    pontuation += 1
    score.innerHTML = pontuation
    
  }
}, 10);

document.addEventListener("keydown", jump);

// const scoreImplement = () => {
//     score.innerHTML(s++)
// }

// document.addEventListener("keydown", scoreImplement);