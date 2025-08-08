"use strict";
// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

const currentYear = new Date().getFullYear();

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

console.log("N1");

const isAdult = people.some((person) => currentYear - person.year >= 19);
console.log(isAdult);

const isAllAdult = people.every((person) => currentYear - person.year >= 19);
console.log(isAllAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

console.log("N2");

const comment = comments.find((comment) => comment.id === 823423);
console.log(comment.text);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

console.log("N3");

const commentIndex = comments.findIndex((comment) => comment.id === 823423);

console.log(commentIndex);

const deleteComment = (index) => {
  const updatedComments = comments.filter((comment, i) => i !== index);
  return updatedComments;
};
console.log(deleteComment(commentIndex));

//OR

// const newComments = [
//   ...comments.slice(0, commentIndex),
//   ...comments.slice(commentIndex + 1),
// ];

// console.log(newComments);
