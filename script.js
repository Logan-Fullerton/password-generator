//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


// Assignment code here

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase= "abcdefghijklmnopqrstuvwxyz"
const symbols = "!$-/><?+@#%"
const numbers = "0123456789"
let possibleCharecters=""
let finalPassword=""
function generatePassword(){
  var length= prompt("enter charecter length between 8 and 128")
  if (length<8 ||length>128 || isNaN(length)) {
    alert("please enter a valid number between 8 and 128")
    return
  }
  var includelowercase = confirm("would you like to include lowercase charecters?")
  var includeuppercase = confirm("would you like to include uppercase charecters?")
  var includesymbols = confirm("would you like to include symbols?")
  var includenumbers = confirm("would you like to include numbers?")
 if(includeuppercase===true){
  possibleCharecters+=uppercase
 }
 if(includesymbols===true){
  possibleCharecters+=symbols
 }
 if(includenumbers===true){
  possibleCharecters+=numbers
 }
 if(includelowercase===true){
  possibleCharecters+=lowercase
 }
 for(i=0; i<length; i++){
var randomeindex = Math.floor(Math.random()*possibleCharecters.length)
finalPassword+=possibleCharecters[randomeindex]
 }
 return finalPassword
}







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
