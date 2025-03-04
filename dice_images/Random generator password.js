
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




  return '';
}



const passwordLength = 12;
const includeLowercase = true ;
const includeUppercase = true ;
const includeNumber = true ;
const includeSymbols = true ;

 const password = generatePassword(PasswordLength ,includeLowercase , includeUppercase , includeNumber ,includeSymbols );
 console.log('Generated password: ${password}');




