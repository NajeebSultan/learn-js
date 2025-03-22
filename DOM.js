console.dir(document);
document.title = "My website";

//document.body.style.background = "black" ;

const username = "Najeeb";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === " " ? ` Guest` :  username;
