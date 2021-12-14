// Establish characters to display in the password
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "=+-_)(*&^%$#@!";

// Add constants for DOM ID selectors
const passwordText = document.getElementById("password");
const length = document.getElementById("length");
const incUpper = document.getElementById("uppercase");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateButton = document.getElementById("generate");

// Event added to button and checkbox input values read. Generate string and append it to input value
generateButton.addEventListener("click", () => {
  let characters = lowercase;
  incUpper.checked ? (characters += uppercase) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
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