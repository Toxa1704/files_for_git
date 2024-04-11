const ballon = document.querySelector(".baloon");
const up = document.querySelector(".up");
const down = document.querySelector(".down");

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    adjustFontSize("increase");
  } else if (event.key === "ArrowDown") {
    adjustFontSize("decrease");
  }
});

function adjustFontSize(operation) {
  let fontSize = window.getComputedStyle(ballon).getPropertyValue("font-size");
  let fontSizeNumber = parseInt(fontSize);

  if (operation === "increase" && fontSizeNumber < 70) {
    fontSizeNumber += 10;
  } else if (operation === "decrease" && fontSizeNumber > 10) {
    fontSizeNumber -= 10;
  } else {
    ballon.textContent = "💥";
  }

  ballon.style.fontSize = `${fontSizeNumber}px`;
}

