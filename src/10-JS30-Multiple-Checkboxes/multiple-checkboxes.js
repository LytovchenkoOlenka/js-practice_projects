"use strict";

//  The following is a common layout you would see in an email client.
//  When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes in-between those two checkboxes should be checked.

const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");

let lastChecked;

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleChecked)
);

function handleChecked(e) {
  // Check if they had the shift key down
  // AND check that they are checking it

  let inBetween = false;

  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox

    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}
