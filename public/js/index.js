
let body = document.querySelector('body')
let card1 = document.getElementById('card-1');
let card2 = document.getElementById('card-2');
let card3 = document.getElementById('card-3');
let indexMain = document.querySelector(".index__main-nav");
let img = document.getElementById("imgprueba");
let imgLogo = document.getElementById("img-logo");
let cards = document.querySelectorAll("cards");
let buttons = document.querySelectorAll("btn");

 console.log(cards)



console.log("sucess");

/* const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element); */

let bodyStyle = function() {
      body.style.position = "absolute";
      body.style.inset = 0;
      body.style.content = "";
      body.style.backgroundImage = "url('../img/logo-v1.png')";
      body.style.backgroundRepeat = "repeat";
      body.style.backgroundPosition = "center";
      body.style.backgroundSize = "cover";
      body.style.backgroundClip = "border-box";
      body.style.opacity = "0.09";
      body.style.zIndex = "-1";
}

  window.addEventListener("DOMContentLoaded", (e) => { 
    if(e.target) {
        setTimeout(() => {
            body.classList.replace("opacity-0", "opacity-100");
            body.style.transform = "scale(100%)";
            body.style.transition = "all 1s ease-in";
        },1000)
        setTimeout(() => {
          imgLogo.classList.replace("opacity-0", "opacity-100");
          imgLogo.style.transform = "scale(100%)";
          imgLogo.style.transition = "all 1s ease-in";
        }, 2000)
        }
        
    });

  


    



 

