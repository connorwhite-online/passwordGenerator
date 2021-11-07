// Assignment code here

function passcode () {

  var prompt = window.prompt("What year were you born in?");

  var promptTwo = window.prompt("What was your first street name?")

}

// What is this?
document.getElementById("password").innerHTML = passcode;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
