document.addEventListener("DOMContentLoaded", function () {
    // Get the toggle button and navbar links
    const toggleBtn = document.getElementById("toggleBtn");
    const navbarLinks = document.getElementById("navbarLinks");

    // Add click event listener to the toggle button
    toggleBtn.addEventListener("click", function () {
        // Toggle the 'hidden' class on navbar links
        navbarLinks.classList.toggle("hidden");
    });
});