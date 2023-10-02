let arrayCardss = [document.querySelectorAll(".card")];

console.log("services success")

arrayCardss.forEach(el=> {
    el.forEach(element => {
        let img = element.children.item(1);
        let cardText = element.children.item(2).firstElementChild;
        let p = element.children.item(2).firstElementChild.firstElementChild;
        let cardBody = element.children.item(2);    
       
        element.addEventListener("mouseover", e=> {
            if(e.target) {
                img.style.transition = "all 3s";
                element.style.backgroundImage = "url(./public/img/barras-de-access.jpeg)";
                element.style.backgroundPosition ="center";
                element.style.transform = "scaleX(105%)";
                element.style.transition = "all 2s ease-out";
                img.style.display = "none";  
                p.classList.replace("d-none", "d-block");
            }
        })

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

        

        
    })
    

})