document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll('.project-card');

    function showNextCard() {
        projectCards.forEach(card => {
            card.classList.remove('active');
        });

        const currentCardIndex = Math.floor(Math.random() * projectCards.length);
        projectCards[currentCardIndex].classList.add('active');
    }

    // Set the initial state
    showNextCard();

    // Automatically transition to the next card every 6 seconds
    setInterval(showNextCard, 6000);
});
