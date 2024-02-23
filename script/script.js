document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.navigation a');

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove 'active' class from all navigation links
            navLinks.forEach(navLink => navLink.classList.remove('active'));

            // Add 'active' class to the clicked navigation link
            link.classList.add('active');
        });
    });
});