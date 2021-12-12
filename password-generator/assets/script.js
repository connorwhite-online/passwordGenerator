// Assignment code here
var length = function() {
  var characterLength = window.prompt("Enter the length in characters of your desired password.")

  if (characterLength === "" || characterLength === null) {
  window.alert("Please choose a length between 8 and 128 characters.");
  return length();
  }

  if (characterLength -= 7 || characterLength += 129) {
    window.alert("Please choose a length between 8 and 128 characters.");
    return length ();
  }
};



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