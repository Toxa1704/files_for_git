const pasInput = document.querySelector(".password-title");
const generetorCopy = document.querySelector(".generator");
const choiceLengthNum = document.querySelector(".choice-length-num");
const length = document.getElementById("length");
const checkBox = [...document.querySelectorAll("input")];
const indicationText = document.querySelector(".indication-text");
const light = document.querySelector(".indication-light");
const button = document.querySelector("button");
const loverCaseLettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCaseLettersArray = loverCaseLettersArray.map((letter) =>
  letter.toUpperCase()
);

const numArrey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolsArrey = ["!", "?", "#", "$", "%", "&"];
document.querySelector('svg').addEventListener("click", () => {
  console.log(pasInput.innerText);
  navigator.clipboard.writeText(pasInput.innerText);
  generetorCopy.innerText = 'COPIED'
});

const updPass = () => {
  choiceLengthNum.textContent = length.value;
  const checkboxValues = checkBox.slice(1).map((input) => input.checked);
  const password = generate(length.value, ...checkboxValues);
  console.log(checkboxValues);
  pasInput.innerText = password;
  let sumCheck = 0;
  checkboxValues.forEach((item) => {
    if (item === true) {
      sumCheck += 1;
      console.log(item);
    }
    return sumCheck;
  });
  if(sumCheck = 1 && password.length === 6 ){
    document.querySelector('.light-1').style.backgroundColor = "#f64a4a "
    document.querySelector('.light-2').style.backgroundColor = "#24232c"
  document.querySelector('.light-3').style.backgroundColor = "#24232c"
  document.querySelector('.light-4').style.backgroundColor = "#24232c"
    indicationText.innerText = "TOO WEAK!"
  }else if (sumCheck <= 2 && password.length <= 11 ){
    document.querySelector('.light-1').style.backgroundColor = "#fb7c58"
    document.querySelector('.light-2').style.backgroundColor = "#fb7c58"
    document.querySelector('.light-3').style.backgroundColor = "#24232c"
    document.querySelector('.light-4').style.backgroundColor = "#24232c"
    indicationText.innerText = "WEAK!"
  } else if (sumCheck <= 3 && password.length <= 16 && password.length > 11){
    document.querySelector('.light-1').style.backgroundColor = "#f8cd65"
    document.querySelector('.light-2').style.backgroundColor = "#f8cd65"
    document.querySelector('.light-3').style.backgroundColor = "#f8cd65"
    document.querySelector('.light-4').style.backgroundColor = "#24232c"
    indicationText.innerText = "MEDIUM"
  }else if(sumCheck <= 4 && password.length <= 20 && password.length > 16){
    document.querySelector('.light-1').style.backgroundColor = "#47ec5b"
  document.querySelector('.light-2').style.backgroundColor = "#47ec5b"
  document.querySelector('.light-3').style.backgroundColor = "#47ec5b"
  document.querySelector('.light-4').style.backgroundColor = "#47ec5b"
  pasInput.style.fontSize = "24px"
  indicationText.innerText = "STRONG"}
console.log(sumCheck);
};

const generate = (
  lengthPassword,
  hasUppercase,
  hasLowercase,
  hasNumbers,
  hasSymbols
) => {
  let availableCharacters = [
    ...(hasSymbols ? symbolsArrey : []),
    ...(hasNumbers ? numArrey : []),
    ...(hasLowercase ? loverCaseLettersArray : []),
    ...(hasUppercase ? upperCaseLettersArray : []),
  ];

  console.log(availableCharacters);

  if (availableCharacters.length === 0) return "";

  let password = "";
  for (let i = 0; i < lengthPassword; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }
  return password;
};
button.addEventListener("click", () => {
  generetorCopy.innerText = ''
  updPass();
});

