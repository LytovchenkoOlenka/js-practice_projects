"use strict";

window.addEventListener("keydown", handlePlaySound);

const buttons = document.querySelector(".keys");
buttons.addEventListener("click", handlePlaySound);

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function handlePlaySound(event) {
  let btnSound;
  let keyCode;

  if (event.type === "keydown") {
    keyCode = event.keyCode;
    btnSound = document.querySelector(`.key[data-key="${keyCode}"]`);
  } else if (event.type === "click") {
    btnSound = event.target.closest(".key");
    if (!btnSound) return;
    keyCode = btnSound.dataset.key;
  }

  if (btnSound) {
    const audio = document.querySelector(`audio[data-key='${keyCode}']`);
    if (!audio) return;

    btnSound.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
