// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:


// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

function Letter(character) {
	this.character = character; 	
	this.correctlyGuessed = false;

	this.displayCharacter = function(){		
		if(this.correctlyGuessed===true){
			return this.character;
		} else {
			return "_";
		}
		console.log("display letter or underscore");
	};

	this.checkCharacter = function(letter){
		if(this.character===letter){
			this.correctlyGuessed=true;
		}
		console.log("check character");
	}
};



// userLetter.displayCharacter();

// console.log("INITIAL STATE OF LETTER: ", userLetter);
// userLetter.checkCharacter("B");
// var displayCharacter = userLetter.displayCharacter();
// console.log("DISPLAYED CHARACTER: " , displayCharacter);
// console.log("USER LETTER AFTER CHECK LETTER FUNCTION ", userLetter);


module.exports = Letter;