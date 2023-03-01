let coinFlip;
let streak = 0;
do {
   coinFlip = Math.round(Math.random());
   if (coinFlip === 0) {
      alert("Heads");
      streak++;
   } else {
      alert("Tails");
      streak = 0;
   }
} while (streak < 3);
alert("Game over! Your streak ended at " + streak + ".");