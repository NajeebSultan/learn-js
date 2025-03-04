
function generatePassword(length ,includeLowercase , includeUppercase , includeNumber ,includeSymbols ){

const lowercaseChars = "abcdefghigklmnopqrstuvwxyz";
const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolsChars = "!@#$%^&*()_+-="; 

let allowedChars = "";
let password = "";

allowedChars += includeLowercase ? lowercaseChars : "";
allowedChars += includeUppercase ? uppercaseChars : "";
allowedChars += includeNumber ? numberChars : "";
allowedChars += includeSymbols ? symbolsChars : "";

if(length <= 0){
  return '(password length must be at least 1)';

}

  return '';
}



const passwordLength = 12;
const includeLowercase = true ;
const includeUppercase = true ;
const includeNumber = true ;
const includeSymbols = true ;

 const password = generatePassword(PasswordLength ,includeLowercase , includeUppercase , includeNumber ,includeSymbols );
 console.log('Generated password: ${password}');




