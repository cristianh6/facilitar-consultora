let arrayCardss = [document.querySelectorAll(".card")];

console.log("services success")

let btn = document.getElementById("btn-access");
let arrayBtn = document.querySelectorAll(".btn");
let bodyService = document.querySelector("body");
let offCanvas = document.querySelectorAll(".offcanvas-body")





        window.addEventListener("DOMContentLoaded", () => {
            arrayBtn.forEach(el => {
                el.addEventListener("click", (e) => {
                    if(e.target) {
                        bodyService.style.paddingRight = "0px";
                        bodyService.style.overflow = "scroll";


                    }
                })
            })
        })


/* arrayCardss.forEach(el=> {
    el.forEach(element => {
        let img = element.children.item(1);
        let cardText = element.children.item(2).firstElementChild;
        let p = element.children.item(2).firstElementChild.firstElementChild;
        let cardBody = element.children.item(2);    
        console.log(img)
        element.addEventListener("mouseover", e=> {
            if(e.target) {
                selectedCard = e.target;
                console.log(element.children.item(0));                
                selectedCard.style.backgroundImage = "url(./public/img/barras-de-access.jpeg)";
            }
        })   
    })
}) */




/* document.addEventListener("DOMContentLoaded", e=> {
   let cards = recorrer();
   let selectedCard;
   let img;
   let cardText;
   for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.addEventListener("mouseover", (e) => {
        if(e.target) {
            selectedCard = element;
            img = selectedCard.children.item(1);
            cardText = selectedCard.children.item(2).firstElementChild;
            selectedCard.style.backgroundImage = "url(./public/img/logo-v1.png)";
            selectedCard.style.backgroundPosition = "bottom";
            selectedCard.style.transition = "4s ease-in-out";
            selectedCard.style.position = "relative";
            img.style.opacity = "0";
            img.style.transition = "4s ease-in-out";
            img.style.transform = "scale(120%)";
            cardText.classList.replace("d-none", "d-block");
            cardText.classList.add("text-black");
            cardText.style.transition = "4s ease-in";   

            setTimeout(() => {
                img.style.display = "none";
                
                cardText.style.transform = "translateY(-10%)";
            }, 2000);
        } 

    })
        
   } 
}) 


let recorrer = function() {
    for (let index = 0; index < arrayCardss.length; index++) {
        const element = arrayCardss[index];
        return element;
    }
}

*/

/* element.addEventListener("mouseout", e=> {            
            if(e.target && p.classList.contains("d-block")) {
                element.style.position = "relative";
                p.classList.replace("d-block", "d-none")
                p.style.transition = "all 2s ease-out"
                p.style.color = "white";
                p.style.top = "15%";
                p.style.textAlign = "left"
                img.style.opacity = "100%";
                img.style.transition = "all 2s ease-in";        

            }
        })   */

        /* element.addEventListener("mouseover", e=> {
            if(e.target && p.classList.contains("d-none")) {
                element.style.position = "relative";
                p.classList.replace("d-none", "d-block");
                p.style.position = "absolute";
                p.style.transition = "all 2s ease-in"
                
                p.style.color = "white";
                p.style.top = "15%";
                p.style.textAlign = "left"
                img.style.opacity = "5%";
                img.style.transition = "all 1s ease-out";    
                element.appendChild(button);
                button.classList.add("btn", "btn-success", "w-75", "mx-auto");
                button.style.transition = "all 1s ease-in";
                
                
            }
        }) */