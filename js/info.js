"use strict"
//body settings
setInterval(()=>{
    document.body.style.paddingTop = `${document.querySelector("header").offsetHeight}px`
},1000)