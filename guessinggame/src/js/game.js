'use strict';

// program data
// var number = 45;
var number = Math.floor(Math.random() * 100) + 1;
console.log('number is: ' + number);
var guess;
var limit = 5; // number of tries
var won = false;
var guesses = [];

for (let i = 1; i <= limit; i++){
	// prompt user for their guess
	do {
		guess = parseInt(window.prompt('Enter your guess number: '));
	}  while (isNaN(guess) || isPreviousGuess());


	if (guess === number) {		// if correct: let the user know they won
		document.write('Congrats, you won!');
		won = true;
		break;
	}
	else { // if NOT correct: let the user know
		guesses[i] = guess;
		window.alert('Nope, try again!\nStill have: ' + (limit-i) + 'times.\nYou\'ve guessed: ' + guesses.toString() + '.');
	}
}

// user ran out of tries
if (!won) {
	document.write('You ran out of tries. Game over!');
}

function isPreviousGuess() {
	for (let i = 0; i < guesses.length; i++) {
		if (guesses[i] === guess) {
			return true;
		}
	}

	return false;
}
