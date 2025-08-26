const msg = new SpeechSynthesisUtterance();
let voices = [];

const voicesDropdown = document.querySelector('[name="voice"]');
// const voicesDropdown2 = document.querySelector("#voices");

const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
