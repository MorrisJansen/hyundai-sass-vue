// antwoorden.js

// Initial state
let antwoorden = [];

// Function to add a new answer to the state
export function addAntwoord(answer) {
  antwoorden.push(answer);
}

// Function to get all answers
export function getAntwoorden() {
  return antwoorden;
}
