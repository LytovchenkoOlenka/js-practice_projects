const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
const container = document.querySelector(".container");
const totalTimeText = document.querySelector(".total-time");

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds, 0);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

const markup = `Total duration: ${hours} hours, ${mins} minutes, ${secondsLeft} seconds`;

totalTimeText.textContent = markup;
