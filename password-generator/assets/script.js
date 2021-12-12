// Assignment code here

// Define the length of the password
var length = function() { 
  var characterLength = window.prompt("Enter the length of characters in your desired password.", "Number between 8 and 128.");
    console.log(characterLength);

  if (characterLength === "" || characterLength === null) {
    window.alert("Please enter a numerical value between 8 and 128.")
    return length();
  }

  if (characterLength <= 7 || characterLength >= 129) {
    window.alert("Please enter a numerical value between 8 and 128.")
    return length();
  }
  console.log(
  "Password is " + characterLength + " characters long"
  );
};

// Ask to include lowercase letters

//Ask to include uppercase letters

//Ask to include numerical values

//Ask to include special characters

length();

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