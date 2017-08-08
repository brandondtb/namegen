const fs = require('fs');

//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const adjs = fs.readFileSync('./adjectives.txt').toString().split('\n');
const animals = fs.readFileSync('./animals.txt').toString().split('\n');

for (let i=0; i<20; i++) {
	const theAdjective = adjs[getRandomIntInclusive(0, adjs.length - 1)].trim().toLowerCase();
	const theAnimal = animals[getRandomIntInclusive(0, animals.length - 1)].trim().toLowerCase();
	console.log(theAdjective + " " + theAnimal);
}

