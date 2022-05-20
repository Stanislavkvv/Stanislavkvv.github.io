"use strict"
//body settings
setInterval(()=>{
    document.body.style.paddingTop = `${document.querySelector("header").offsetHeight}px`
},1000)

//toggle header menu
const toggleHeaderBtn = document.querySelector("header .container nav.navbar .toggle");

toggleHeaderBtn.addEventListener("click",function(){
    this.classList.toggle("active")
    document.querySelector("header .container nav.navbar ul.navbar-menu").classList.toggle("active")
    let navbar = document.querySelector("header .container nav.navbar")
    navbar.querySelector("ul.navbar-menu").style.top = `${navbar.offsetHeight}px`
})
window.addEventListener("scroll",hideToggleMenu)
window.addEventListener("resize",hideToggleMenu)
function hideToggleMenu(){
    toggleHeaderBtn.classList.remove("active")
    document.querySelector("header .container nav.navbar ul.navbar-menu").classList.remove("active")
}