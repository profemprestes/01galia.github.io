document.addEventListener('DOMContentLoaded', () => {
    // Optional: Add any additional interactivity or animations for the details section
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px)';
            card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
        });
    });
});