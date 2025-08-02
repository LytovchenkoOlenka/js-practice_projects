"use strict";

const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();

  if (seconds === 0) {
    secHand.style.transition = "none";
  } else {
    secHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }

  const secDeg = (seconds / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secDeg}deg)`;

  const minutes = now.getMinutes();
  const minDeg = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
