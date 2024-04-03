(function () {

    "use strict"
    const nav = document.querySelector(".navbar-nav")
    const menuBtn = document.querySelector(".menu_btn")

    menuBtn.addEventListener("click", function() {
        menuBtn.classList.toggle("menu_btn_active")
        nav.classList.toggle("navbar-nav_active")
    })

}) 
()