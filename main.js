document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });

    // Close the navbar when a link is clicked
    navbar.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navbar.classList.remove('show');
        });
    });
});