const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incUpper = document.getElementById("uppercase");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
  let characters = lowercase;
  incUpper.checked ? (characters += uppercase) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);