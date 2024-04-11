const userImg = document.querySelector(".you-img");
const compImg = document.querySelector(".comp-img");
const youimgWinner = document.querySelector(".yuo-img-bg");
const compImgWinner = document.querySelector(".comp-img-bg");
// const score = document.querySelector(".score-num");

// console.log(typeof(+'score'));

const choseImgMap = {
  0: { image: "0.png", alt: "Paper" },
  1: { image: "1.png", alt: "Scissors" },
  2: { image: "2.png", alt: "Rock" },
};

const params = new URLSearchParams(window.location.search);

if (!params.has("user") || !params.has("comp")) {
  window.location.href = `./index.html`;
}

let user = params.get("user");
let comp = params.get("comp");
let scoreIndex = params.get('scoreIndex')
console.log(scoreIndex);
let score =(+scoreIndex);
console.log(score);

userImg.src = `./image/${choseImgMap[user].image}`;
userImg.alt = choseImgMap[user].alt;

compImg.src = `./image/${choseImgMap[comp].image}`;
compImg.alt = choseImgMap[comp].alt;


function checkWin() {
  let winner = "";
  if (user === comp) {
    winner = "tie";
  } else if (user === "0" && comp === "1") {
    winner = "comp";
  } else if (user === "0" && comp === "2") {
    winner = "user";
  } else if (user === "1" && comp === "0") {
    winner = "user";
  } else if (user === "1" && comp === "2") {
    winner = "comp";
  } else if (user === "2" && comp === "0") {
    winner = "comp";
  } else if (user === "2" && comp === "1") {
    winner = "user";
  }
  if (winner === "tie") {
    document.querySelector(".play-again-text").innerText = "TIE";
    document.querySelector('.score-num').innerText = score
  } else if (winner === "user") {
    document.querySelector(".play-again-text").innerText = "YOU WIN";
    youimgWinner.src = `./image/Group 14.png`;
    counter()

  } else if (winner === "comp") {
    document.querySelector(".play-again-text").innerText = "YOU LOST";
    compImgWinner.src = `./image/Group 14.png`;
    document.querySelector('.score-num').innerText = score

  }
}
checkWin();

 function counter (i){
  i = score + 1;
  console.log(i);
  score = i;
  document.querySelector('.score-num').innerText = i

}

document
document.querySelector(".play-again-btn").addEventListener("click", () => {
  window.location.href = `./index.html?score=${score}`;
});
console.log(score);