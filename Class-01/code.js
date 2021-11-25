let value = document.querySelector(".value");
let incbutton = document.querySelector(".incbutton")
let count = 0;
value.textContent=count;
window.addEventListener("click",(x)=>{
    if(x.target.classList=="incbutton"){
        count++
    }
    value.textContent=count;
})
