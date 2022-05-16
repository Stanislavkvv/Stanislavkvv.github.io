"use strict"
// main slider
const prevBtn = document.querySelector("section.slider .slideshow button.prev");
const nextBtn = document.querySelector("section.slider .slideshow button.next");
const slideshowBLock = document.querySelector("section.slider .slideshow")

prevBtn.addEventListener("click",function(){ slider("-") })
nextBtn.addEventListener("click",function(){ slider("+") })

let slide = 0;
slider("+")
setInterval(()=>{slider("+")},10000)
function slider(action){
    if(action=="+"){
        if(slide==3){
            slide = 1
        } else {
            slide++
        }
    } else if(action=="-") {
        if(slide==1){
            slide = 3
        } else {
            slide--
        }
    }
    let i=60;
    let int = setInterval(()=>{
            slideshowBLock.style.opacity = i/100;
            i++;
            if(i==101){clearInterval(int)}
        },10)
    slideshowBLock.setAttribute("slide",slide)
    setTimeout(()=>{
        slideshowBLock.querySelectorAll(".container .sliderBlock ul.slidesText li").forEach(item=>{item.classList.remove("active")})
        slideshowBLock.querySelector(`.container .sliderBlock ul.slidesText li[slide='${slide}']`).classList.add("active")
    },50)
}



// viewer slider
const viewer = document.querySelector("section.gallery .viewer")
const imgHowBtns = document.querySelectorAll("section.gallery .container .gallery .img")
const closeBtn = document.querySelector("section.gallery .viewer .viewer__block button.close")
const prevBtnViewer = document.querySelector("section.gallery .viewer .viewer__block button.prevBtn")
const nextBtnViewer = document.querySelector("section.gallery .viewer .viewer__block button.nextBtn")

let viewerSlide;
imgHowBtns.forEach(item=>{
    item.addEventListener("click",function(){
        document.body.classList.add("viewer")
        viewer.classList.add("active")
        viewer.querySelector("img").setAttribute("src",item.querySelector("img").getAttribute("src"))
        viewer.querySelector(".counter span").textContent = item.getAttribute("photo")
        viewerSlide = item.getAttribute("photo");
    })
})
closeBtn.addEventListener("click",function(){
    document.body.classList.remove("viewer")
    viewer.classList.remove("active")
})
prevBtnViewer.addEventListener("click",function(){viewerSlider("-")})
nextBtnViewer.addEventListener("click",function(){viewerSlider("+")})
function viewerSlider(action){
    if(action=="+"){
        if(viewerSlide==8){
            viewerSlide = 1
        } else {
            viewerSlide++
        }
    } else if(action=="-") {
        if(viewerSlide==1){
            viewerSlide = 8
        } else {
            viewerSlide--
        }
    }
    viewer.querySelector("img").setAttribute("src","")
    imgHowBtns.forEach(item=>{
        if(item.getAttribute("photo")==viewerSlide){
            viewer.querySelector(".counter span").textContent = item.getAttribute("photo")
            viewer.querySelector("img").setAttribute("src",item.querySelector("img").getAttribute("src"))
        }
    })
}



// reviews slider
const prevBtnReviews = document.querySelector("section.testimonials .container .btns button.prevBtn")
const nextBtnReviews = document.querySelector("section.testimonials .container .btns button.nextBtn")
const reviews = document.querySelectorAll("section.testimonials .reviews .review")

prevBtnReviews.addEventListener("click",function(){if(!this.classList.contains("noactive")){reviewSlider("-")}})
nextBtnReviews.addEventListener("click",function(){if(!this.classList.contains("noactive")){reviewSlider("+")}  })

let reviewSlide = 0;
checkreviewSliderLength()
function reviewSlider(action){
    if(action=="+"){
        reviewSlide++
        checkreviewSliderLength()   
    } else if(action=="-") {
        reviewSlide--
        checkreviewSliderLength()
    }
    reviews.forEach(item=>{
        item.style.transform = `translate(-${reviewSlide*100}%,0)`
    })
}
function checkreviewSliderLength(){
    if(reviews.length>2){
        prevBtnReviews.classList.add("noactive")
        nextBtnReviews.classList.remove("noactive")
    } 
    if(reviewSlide>0){
        prevBtnReviews.classList.remove("noactive")
    } 
    if(reviewSlide+2==reviews.length){
        prevBtnReviews.classList.remove("noactive")
        nextBtnReviews.classList.add("noactive")
    } 
    if(reviewSlide==0){
        prevBtnReviews.classList.add("noactive")
    }
}