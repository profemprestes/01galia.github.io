document.addEventListener('DOMContentLoaded', () => {
    try {
        // Safely check for particles.js library and container
        if (window.particlesJS && document.getElementById('particles-js')) {
            initParticles();
        } else {
            console.warn('Particles.js not available or container missing');
        }

        initAnimations();
        setupEventListeners();

    } catch (mainError) {
        console.error('Critical error in intro script:', mainError);
    }
});

function initParticles() {
    try {
        particlesJS('particles-js', {
            particles: {
                number: { value: 15 },
                color: { value: '#ffffff' },
                shape: {
                    type: 'image',
                    image: {
                        src: "/daisy.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 0.7,
                    random: true
                },
                size: {
                    value: 15,
                    random: true
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'bottom',
                    random: true,
                    straight: false,
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    onclick: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 400,
                        size: 6,
                        duration: 0.3,
                        opacity: 1,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            retina_detect: true,
            catchErrors: true
        });
    } catch (error) {
        console.error('Particles initialization failed:', error);
    }
}

function initAnimations() {
    try {
        createConfetti();
        createBalloons();
        animateElements();
    } catch (error) {
        console.error('Animations initialization failed:', error);
    }
}

function setupEventListeners() {
    try {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', navigateToMainPage);
        });

        document.querySelector('.continue-btn')?.addEventListener('click', navigateToMainPage);
    } catch (error) {
        console.error('Event listener setup failed:', error);
    }
}

function navigateToMainPage() {
    try {
        window.location.href = 'principal.html';
    } catch (navigationError) {
        console.error('Navigation error:', navigationError);
        alert('Unable to navigate. Please try again.');
    }
}

function createConfetti() {
    const container = document.querySelector('.confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confetti.style.backgroundColor = getRandomColor();
        container.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ['#ccd5ae', '#e9edc9', '#fefae0', '#faedcd', '#d4a373'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createBalloons() {
    const container = document.querySelector('.balloons-container');
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(balloon);
    }
}

function animateElements() {
    try {
        gsap.utils.toArray('.confetti').forEach(confetti => {
            gsap.to(confetti, {
                y: window.innerHeight,
                rotation: 360,
                opacity: 0,
                duration: 3,
                delay: Math.random() * 3,
                repeat: -1,
                ease: 'power1.inOut'
            });
        });

        gsap.utils.toArray('.balloon').forEach(balloon => {
            gsap.to(balloon, {
                y: window.innerHeight,
                opacity: 0,
                duration: 5,
                delay: Math.random() * 3,
                repeat: -1,
                ease: 'power1.inOut'
            });
        });
    } catch (error) {
        console.error('Animation failed:', error);
    }
}