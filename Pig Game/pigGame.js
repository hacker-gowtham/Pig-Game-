`use strict`;
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const winner0=document.querySelector(".win0");
const winner1N=document.querySelector(".win1")

//now button
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

//init

function init(){
  score = [0, 0];
  currentScore = 0;
  playingPlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  dice.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document
  .querySelector(`.win${0}`).textContent='';
  document
  .querySelector(`.win${1}`).textContent='';
}
init();

//switch function

function nextPlayer() {
    document.querySelector(`#current--${playingPlayer}`).textContent = 0;
    currentScore = 0;
    playingPlayer = playingPlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

btnRoll.addEventListener("click", function () {
    if (playing) {
        const number = Math.trunc(Math.random() * 6) + 1;
        console.log(number);

        dice.classList.remove("hidden");
        dice.src = `dice-${number}.png`;

        if (number !== 1) {
            currentScore += number;
            document.querySelector(`#current--${playingPlayer}`).textContent =
                currentScore;
        } else {
            nextPlayer();
        }
    }
});

btnHold.addEventListener("click", function () {
    console.log("hello world");

    if (playing) {

        score[playingPlayer] += currentScore;
        console.log(score[playingPlayer]);
        document.getElementById(`score--${playingPlayer}`).textContent =
        score[playingPlayer];

        if (score[playingPlayer] >= 100) {
            playing = false;
            
            document
                .querySelector(`.win${playingPlayer}`).textContent='win';

            document
                .querySelector(`.player--${playingPlayer}`)
                .classList.add("player--winner");
            document
                .querySelector(`.player--${playingPlayer}`)
                .classList.remove("player--active");
        } else {
            nextPlayer();
        }
    }
});

btnNew.addEventListener('click', init);
