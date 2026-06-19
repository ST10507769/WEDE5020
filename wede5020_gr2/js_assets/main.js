document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav ul");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("show");
        });

    }

    const navLinks = document.querySelectorAll(".nav ul li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() { 
            if (navMenu && window.innerWidth < 768) {
                navMenu.classList.remove("show");
            }
        });
    });
});         
