let arrayCardss = [document.querySelectorAll(".card")];

console.log("services success")

arrayCardss.forEach(el=> {
    el.forEach(element => {
        let p = element.lastElementChild;
            let img = element.children.item(1);
        element.addEventListener("mouseover", e=> {
            if(e.target && p.classList.contains("d-none")) {
                element.style.position = "relative";
                p.classList.replace("d-none", "d-block");
                p.style.position = "absolute";
                p.style.transition = "all 2s ease-in"
                p.style.color = "white";
                p.style.top = "15%";
                p.style.textAlign = "left"
                img.style.opacity = "5%";
                img.style.transition = "all 2s ease-out";    
            }
        })

        element.addEventListener("mouseout", e=> {            
            if(e.target && p.classList.contains("d-block")) {
                p.classList.replace("d-block", "d-none")
                element.style.position = "relative";
                img.style.opacity = "100%";
                img.style.transition = "all 2s ease-in";        
                p.style.transition = "all 2s ease-in"
                p.style.color = "white";
                p.style.top = "15%";
                p.style.textAlign = "left"
 
                
                


            }
        })
        
    })
    

})