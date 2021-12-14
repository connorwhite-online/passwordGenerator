// Establish characters to display in the password
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "=+-_)(*&^%$#@!";

// Add constants for DOM ID selectors
const passwordText = document.getElementById("password");
const length = document.getElementById("length");
const includeUpper = document.getElementById("uppercase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");
const generateButton = document.getElementById("generate");

// Event added to button and checkbox input values read and added to lowercase set. Generate string and append it to input value
generateButton.addEventListener("click", () => {
  let characters = lowercase;
  includeUpper.checked ? (characters += uppercase) : "";
  includeNumbers.checked ? (characters += numbers) : "";
  includeSymbols.checked ? (characters += symbols) : "";
  passwordText.value = generatePassword(length.value, characters);
});

// Return an indexed character and round the randomized number to an integer and multiply it by the # input. 
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};