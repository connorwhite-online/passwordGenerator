const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "=+-_)(*&^%$#@!";


// define element selectors
const length = document.getElementById('length')
// const lowercase = document.getElementById('lowercase')
const uppercase = document.getElementById('uppercase')
const numerical = document.getElementById('numerical')
const symbols = document.getElementById('symbols')
const form = document.getElementById('password-form')
const passwordText = document.getElementById('password')

// define charCode arrays
const LOWER_CHAR_CODES = arrayLowToHigh(97, 122)
const UPPER_CHAR_CODES = arrayLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayLowToHigh(33,47).concat(
  arrayLowToHigh(58, 64)
).concat(
  arrayLowToHigh(91, 96)
).concat(
  arrayLowToHigh(123, 126)
);

// read checkbox status and prevent submit from refreshing page
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterLength = document.getElementById('length').value
  const includeUpper = document.getElementById('uppercase').checked
  const includeNumbers = document.getElementById('numerical').checked
  const includeSymbols = document.getElementById('symbols').checked
  const password = generatePassword(length, uppercase, numerical, symbols)
  passwordText.innerText = password
  document.getElementById('password').innerText = password
})

// generate password based on ASCII character codes criteria
function generatePassword(length, lowercase, uppercase, numerical, symbols) {
  let charCodes = LOWER_CHAR_CODES
  if (UPPER_CHAR_CODES) charCodes = charCodes.concat(UPPER_CHAR_CODES)
  if (NUMBER_CHAR_CODES) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (SYMBOL_CHAR_CODES) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < length; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

// create range for charCodes
function arrayLowToHigh(low, high) {
  const array = []
  for (let i = low; i<= high; i++) {
    array.push(i)
  }
  return array
}



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