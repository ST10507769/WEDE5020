document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxClose = document.getElementById("lightbox-close");

    if (!lightbox || !lightboxImage ) return;

    galleryImages.forEach(function(image) {
        image.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxImage.src = this.src;
            lightboxImage.alt = this.alt;
            document.body.style.overflow = "hidden";
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }

    lightbox.addEventListener("click", function(event) {
        if (event.target === this) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
