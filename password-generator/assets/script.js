// Assignment code here

var length = document.getElementById('#length');
var lowercase = document.getElementById('#lowercase');
var uppercase = document.getElementById('#uppercase');
var numerical = document.getElementById('#numerical');
var symbols = document.getElementById('#symbols');

var lowerCodes = arrayLowToHigh(97, 122);
var upperCodes = arrayLowToHigh(65, 90);
var numericalCodes = arrayLowToHigh(48, 57);
var symbolCodes = arrayLowToHigh(33,47).concat(
  arrayLowToHigh(58, 64)
).concat(
  arrayLowToHigh(91, 96)
).concat(
  arrayLowToHigh(123, 126)
)


var generatePassword = function() {
  var characterLength = length.value
  var includeLower = lowercase.checked
  var includeUpper = uppercase.checked
  var includeNumbers = numerical.checked
  var includeSymbols = symbols.checked
};


function createPassword(length, lowercase, uppercase, numerical, symbols) {
  var charCodes = lowerCodes
  if (upperCodes) charCodes = charCodes.concat(upperCodes)
  if (numericalCodes) charCodes = charCodes.concat(numericalCodes)
  if (symbolCodes) charCodes = charCodes.concat(symbolCodes)

  var passwordCharacters = []
  for (let i = 0; i < length; i++) {
    var character = charCodes[Math.floor(Math.random() *
    length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}


function arrayLowToHigh(low, high) {
  var array = []
  for (let i = low; i<= high; i++) {
    array.push(i)
  }
  return array
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(length, lowercase, uppercase, numerical, symbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);