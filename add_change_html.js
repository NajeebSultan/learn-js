const newH1 = document.createElement("h1");

newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//document.getElementById("box1").append(newH1);
//document.body.prepend(newH1);
document.getElementById("box1").prepend(newH1);