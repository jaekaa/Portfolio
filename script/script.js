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

// JavaScript to handle smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        
        // Special case for "Drawings" section
        if (sectionId === "drawings") {
            // Scroll to the top of the section
            document.getElementById(sectionId + "-section").scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // Scroll to the section as usual
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
