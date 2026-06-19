document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const serviceCards = document.querySelectorAll(".service-card");

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener("input", function() {
        const query = this.value.toLowerCase().trim();
        let results = [];

        serviceCards.forEach(function(card) {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const description = card.querySelector("p").textContent.toLowerCase();
            const matches = title.includes(query) || description.includes(query);

            if (query === "") {
                card.style.display = "block";
            } else if (matches) {
                card.style.display = "block";
                results.push(card);
            } else {
                card.style.display = "none";
            }
        });

        if (searchResults) {
            const visible = document.querySelectorAll(".service-card:not([style*='display: none'])").length;
        } else {
            searchResults.textContent = `Found ${results.length} result${results.length !== 1 ? "s" : ""}`;
        }
    }); 
});
