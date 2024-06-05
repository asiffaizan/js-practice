#For get a random number on specific numbers we can use the following function.

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 6);
console.log(rndInt);