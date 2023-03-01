// Declare the coinFlip variable
let coinFlip;

// Ask the user for the number of times to flip the coin
const numberOfFlips = parseInt(prompt("How many times do you want to flip the coin?"));

// Loop a certain amount of times and flip the coin
for (let i = 0; i < numberOfFlips; i++) {
  // Generate a random number between 0 and 1
  coinFlip = Math.floor(Math.random() * 2);

  // Check the result of the coin flip and write out the result
  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
}