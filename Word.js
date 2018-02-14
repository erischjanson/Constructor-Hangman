// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require("./Letter.js");
var userLetter = new Letter("A");
console.log(userLetter);
var wordChoices = ["minnesota", "instauration", "embargo", "mnemonic", "recuse", "preternatural", "logomachy", "spavined"];
//randomly generated number for choosing a word from the wordChoices array

//userLetter.displayCharacter();

// console.log("INITIAL STATE OF LETTER: ", userLetter);
userLetter.checkCharacter("A");
console.log(userLetter);
// var displayCharacter = userLetter.displayCharacter();
// console.log("DISPLAYED CHARACTER: " , displayCharacter);
// console.log("USER LETTER AFTER CHECK LETTER FUNCTION ", userLetter);


function Word(word){
	this.word = word;
	this.wordArray = [];
	

	this.splitWord = function(){
		for(var i = 0; i < this.word.length; i++){
			var letter = new Letter(word[i]);
			this.wordArray.push(letter);
			
		}
		console.log(this.wordArray);
	}

}


var randomNumber = Math.floor(Math.random()*wordChoices.length);
var newWord = new Word(wordChoices[randomNumber]);
console.log("TESTING NEW WORD FOR REAL: " , newWord.word);
console.log("NEW WORD: " , newWord);
console.log("THIS.WORD: " , newWord.word);

newWord.splitWord();
console.log("WORD ARRAY AFTER ", newWord.wordArray);

console.log(newWord.wordArray);


// var testingRandomNumber = wordChoices[randomNumber];
// console.log("RANDOM WORD: " , testingRandomNumber);
	// this.selectWord = function(){
	// 	var randomNumber = Math.floor(Math.random()*wordChoices.length);
	// 	console.log(randomNumber);
	// 	var newWord = new Word(this.wordArray[randomNumber]);
	// 	console.log("TESTING NEW WORD: " , newWord);

	// }




module.exports = Word;