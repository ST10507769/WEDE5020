document.addEventListener("DOMContentLoaded", function() {
    const mapContainer = document.getElementById("map");

    if (!mapContainer) return;

    const location = { lat: -24.80072, lng: 29.59918 };

    const link = document.createElement("a");
    link.href = "https://www.google.com/maps/place/24%C2%B048'02.6%22S+29%C2%B035'57.0%22E/@-24.80072,29.59918,17z/data=!3m1!4b1!4m6!3m5!1s0x1e9c7f8d8f8f8f8f:0x8f8f8f8f8f8f8f8f!7e2!8m2!3d-24.80072!4d29.59918";
    link.target = "_blank";
    link.textContent = "View on Google Maps";
    mapContainer.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js";
    script.onabort = function() {

        const map = L.map(mapContainer).setView([location.lat, location.lng], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        location.forEach(function(loc) {
            const marker = L.marker([loc.lat, loc.lng]).addTo(map);
            marker.bindPopup("<strong>DGI</strong><br>24°48'02.6\"S 29°35'57.0\"E")
        });
    };

})