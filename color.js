var color1=document.getElementById("uno");
var color2=document.getElementById("deux");
var bodyy=document.getElementById("bod");
var hc=document.getElementById("h3");

function changecolor(){
    bodyy.style.background= 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")" ;

   hc.textContent=bodyy.style.background + ';';
}

color1.addEventListener("input", changecolor)
color2.addEventListener("input", changecolor)

hc.innerHTML=   "linear-gradient(to right, " + color1.value + ", " + color2.value + ")" ;

