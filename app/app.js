// A function to get the set of possible letters
function getLetters() {
  // Select the element with the id 'letters'
  var lettersContainer = document.querySelector('#letters');

  // Get the text content of the element
  var letters = lettersContainer.innerText;

  // Return the letters
  return letters;
}

// A function to get the user's guess
function getGuess() {
  // Select the input element where the user enters their guess
  var wordGuess = document.querySelector('input#word-guess');

  // Get the text content of the element
  var guess = wordGuess.value;

  // Return the guess
  return guess;
}

// A function to display a message on the screen
function showMessage(messageText) {
  // Select the element to display a message
  var messageElem = document.querySelector('#game-message');

  // Set the text value of the element to the provided text
  messageElem.innerText = messageText;
}


// A function to check whether the guessed word is correct or not
function checkGuess() {
  // Collect the text from the letters and the guess
  var letters = getLetters();
  var guess = getGuess();

  // Convert both to uppercase so we can compare equals
  guess = guess.toUpperCase();
  letters = letters.toUpperCase();

  // Determine if all the characters in the guess are in the letters
  for (var i = 0; i < guess.length; i++) {
    var currentChar = guess[i];

    // If the current character can't be found in letters, the guess is incorrect
    if (letters.indexOf(currentChar) === -1) {
      // Show a message saying guess is incorrect
      showMessage("Wrong guess, try again.");
      // Return false to exit the function
      return false;
    }
  }

  // If we've made it this far, then the guess must be correct!
  // Show a message saying guess is correct
  showMessage("Good guess, that is correct!");
  // Return true to exit the function
  return true;
}

function updateLetters(){
  var newLetters = "ABCD";
  var updatedLetters = document.querySelector('#letters');

  // Set the text value of the element to the provided text
  updatedLetters.innerText = newLetters;
  //return updatedLetters;

}
function randomLetters(){
  //create array of all letters
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var vowels = ["A", "E", "I", "O", "U"];
  var newWord = [];



  for(var i=0; i<5; i++){

    var randomNumber = Math.floor((Math.random() * 26));
    var randomLetter = letters[randomNumber];
    newWord.push(randomLetter);

}
  for(var i=0; i<2; i++){
    var randomNumber = Math.floor((Math.random() * 5));
    var randomLetter = vowels[randomNumber];
    newWord.push(randomLetter);
  }
  newWord = newWord.join('');
  updatedLetters = document.querySelector('#letters');

  // Set the text value of the element to the provided text
  updatedLetters.innerText = newWord;
  //return updatedLetters;
  //two must be vowels - check that two of the randoms are in the vowels array
  //make counter, run through array using for loop
  //ch
  //return string
  return newWord;

  //make button that runs updateLetters
}
function getWord(){
  var word= document.querySelector('#letters');
  document.querySelector("#letters").innerText = shuffle(word);

}


function shuffle(word){
  var word = word.innerText;
  console.log(word);
  word = word.split('');
  for(var i=word.length-1;i>-1;i--){
    var number= Math.floor(Math.random()*word.length);
    var temp=word[i];
    word[i]=word[number];
    word[number]=temp;
  }
  console.log(word.join(""));
  return word.join('');

}
