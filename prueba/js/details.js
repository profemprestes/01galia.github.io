document.addEventListener('DOMContentLoaded', () => {
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -15,
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Animación inicial de las tarjetas
    gsap.from('.info-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.info-grid',
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});