const [mario, pipe, restart] = [".mario", ".pipe", ".restart"].map((item) =>
  document.querySelector(item)
);

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
 
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", ""); 
  console.log(marioPosition); 
  if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./assets/game-over.png";
    mario.style.width = "100px";
    mario.style.marginLeft = "25px";

    mario.classList.remove("jump");
    mario.classList.add("game-over");
    console.log(mario)
    clearInterval(loop);
  }
}, 10);
document.addEventListener("keydown", jump);

restart.addEventListener("click", () => {
  location.reload(true);
});