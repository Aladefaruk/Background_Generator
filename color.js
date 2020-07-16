let color1=document.getElementById("uno");
let color2=document.getElementById("deux");
let bodyy=document.getElementById("bod");
let hc=document.getElementById("h3");

const changecolor=()=>{
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

