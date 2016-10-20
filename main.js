var Word = require('./word');
var RandomWord = require('./game');
var inquirer = require('inquirer');
var guessesWrong = 0;

var MyWord = new Word();
var newWord = RandomWord.getRandomWord();
MyWord.setWord('testing hangman');

function playGame() {
	console.log('guesses wrong: ' + guessesWrong + '\n');
    if ((guessesWrong < 8) && (!MyWord.isComplete())) {
        inquirer.prompt([ {
        					type: 'string',
        					message: 'Enter a letter',
        					name: 'letter'
        				}]).then(function(answers) {
            // Use user feedback for... whatever!!
            MyWord.addLetter(answers.letter);
            if (!MyWord.isCorrectGuess(answers.letter)) {
            	guessesWrong++;
            }
            MyWord.displayWord();
            playGame();x
        });
    } else {
    	if (MyWord.isComplete()) {
    		console.log('you win');
    	} else {
    		console.log('game over');
    	}
    	guessesWrong = 0;
    }
}

playGame();