const burger = document.querySelector(".burger-menu")

burger.addEventListener("click", ()=>{
    burger.classList.toggle('active')
})

const hiddenMenu = document.querySelector(".hidden-menu")

burger.addEventListener("click", ()=>{
    hiddenMenu.classList.toggle('active')
})