const header=document.querySelector("nav");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 130)
})
// const div=document.querySelector("section");

// window.addEventListener("scroll",function(){
//     div.classList.toggle("sticky",window.scrollY > 130)
// })