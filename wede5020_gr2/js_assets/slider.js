document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".testimonials-slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;
    let slideInterval;

    if (slides.length === 0) return;

    function showSlide(index) {
        slide.forEach(function(slide, i) {
            slide.classList.toggle("active", i === index);
        });

        dots.forEach(function(dot, i) {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function previousSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    dots.forEach(function(dot, index) {
        dot.addEventListener("click", function() {
            stopSlider();
            currentSlide = index;
            showSlide(currentSlide);
            startSlider();
        });
    });

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (prevButton) {
        prevButton.addEventListener("click", function() {
            stopSlider();
            previousSlide();
            startSlider();
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", function() {
            stopSlider();
            nextSlide();
            startSlider();
        });
    }

    showSlide(0);
    startSlider();

    const sliderContainer = document.querySelector(".testimonials-slider");
    if (sliderContainer) {
        sliderContainer.addEventListener("mouseenter", stopSlider);
        sliderContainer.addEventListener("mouseleave", startSlider);
    }
});
