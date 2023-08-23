//Variables
const message = document.querySelector(`.message`);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Functions
function scoreAmount(highorlow) {
  if (score > 1) {
    message.textContent = `Your number is too ${highorlow}`;
    score--;
    document.querySelector(`.score`).textContent = score;
  } else {
    message.textContent = `You lost the game!`;
    score = 0;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = "#FF0000";
  }
}

function hscoreAmount() {
  if (score > highscore) {
    highscore = score;
    document.querySelector(`.highscore`).textContent = highscore;
  }
}

//Main Logic
document.querySelector(`.check`).addEventListener("click", function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess && score != 0) {
    message.textContent = "You must type any number certainly!";
  } else if (guess === secretNumber && score != 0) {
    message.textContent = "Congrats, You win!";
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = "#60b347";

    hscoreAmount();
  } else if (guess > secretNumber) {
    scoreAmount(`high!`);
  } else if (guess < secretNumber) {
    scoreAmount(`low!`);
  }
});

//Game Restart
document.querySelector(`.again`).addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`body`).style.backgroundColor = "#222";
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = "?";
  document.querySelector(`.guess`).value = "";
  message.textContent = "Start guessing...";
});
