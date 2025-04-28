document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    setupHeroInteractions();
});

function initHeroAnimations() {
    // Animación de entrada para la imagen
    gsap.from('#hero-image-container', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    // Animación para el texto
    gsap.from(['#hero-subtitle', '#hero-title'], {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.3,
        delay: 0.5,
        ease: 'power2.out'
    });

    // Animación para los detalles
    gsap.from('#hero-details-wrapper', {
        duration: 1,
        y: 20,
        opacity: 0,
        delay: 1.2,
        ease: 'power2.out'
    });
}

function setupHeroInteractions() {
    // Efecto hover para la imagen
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', () => {
            gsap.to(heroImage, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        heroImage.addEventListener('mouseleave', () => {
            gsap.to(heroImage, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }

    // Efecto hover para los detalles
    const detailItems = document.querySelectorAll('.hero-detail-item');
    detailItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -5,
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
}