document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(function(header) {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector(".accordion-icon");

            document.querySelectorAll(".accordion-content").forEach(function(c) {
                c.style.display = "none";
            });

            document.querySelectorAll(".accordion-icon").forEach(function(h) {
                h.classList.remove("active");
                const icon = h.querySelector(".accordion-icon");
                if (icon) {
                    icon.textContent = "+";
                };

            if (content.style.display === "block") {
                content.style.display = "block";
                this.classList.add("active");
                if (icon) {
                    icon.textContent = "-";
                }
            };
        })
    });
});
})
