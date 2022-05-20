"use strict"
//body settings
setInterval(()=>{
    document.body.style.paddingTop = `${document.querySelector("header").offsetHeight}px`
},1000)

const viewer = document.querySelector("section.galleryPage .viewer")
const imgHowBtns = document.querySelectorAll("section.galleryPage .container .gallery .img")
const closeBtn = document.querySelector("section.galleryPage .viewer .viewer__block button.close")
const prevBtnViewer = document.querySelector("section.galleryPage .viewer .viewer__block button.prevBtn")
const nextBtnViewer = document.querySelector("section.galleryPage .viewer .viewer__block button.nextBtn")

let viewerSlide;
for (let i = 0; i < imgHowBtns.length; i++) {
    imgHowBtns[i].style.backgroundImage = `url(./${imgHowBtns[i].querySelector("img").getAttribute("src")})`
    imgHowBtns[i].setAttribute("photo",i+1)
}
imgHowBtns.forEach(item=>{
    item.addEventListener("click",function(){
        if(window.innerWidth>1024){
            document.body.classList.add("viewer")
            viewer.classList.add("active")
            viewer.querySelector("img").setAttribute("src",item.querySelector("img").getAttribute("src"))
            viewer.querySelector(".counter span").textContent = item.getAttribute("photo")
            viewerSlide = item.getAttribute("photo");
        }
    })
})
closeBtn.addEventListener("click",hideViewer)
window.addEventListener("resize",hideViewer)
function hideViewer(){
    document.body.classList.remove("viewer")
    viewer.classList.remove("active")
}
prevBtnViewer.addEventListener("click",function(){viewerSlider("-")})
nextBtnViewer.addEventListener("click",function(){viewerSlider("+")})

viewer.querySelector(".counter span.slides").textContent = imgHowBtns.length

function viewerSlider(action){
    if(action=="+"){
        if(viewerSlide==imgHowBtns.length){
            viewerSlide = 1
        } else {
            viewerSlide++
        }
    } else if(action=="-") {
        if(viewerSlide==1){
            viewerSlide = imgHowBtns.length
        } else {
            viewerSlide--
        }
    }
    viewer.querySelector("img").setAttribute("src","")
    imgHowBtns.forEach(item=>{
        if(item.getAttribute("photo")==viewerSlide){
            viewer.querySelector(".counter span.slide").textContent = item.getAttribute("photo")
            viewer.querySelector("img").setAttribute("src",item.querySelector("img").getAttribute("src"))
        }
    })
}

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