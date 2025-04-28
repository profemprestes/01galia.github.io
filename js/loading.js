document.addEventListener('DOMContentLoaded', () => {
    try {
        // Safely check for particles.js container and library
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer && window.particlesJS) {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#ffffff'
                    },
                    shape: {
                        type: 'image',
                        image: {
                            src: 'daisy.svg',  // Remove leading slash
                            width: 100,
                            height: 100
                        }
                    },
                    opacity: {
                        value: 0.8,
                        random: false,
                        anim: {
                            enable: false
                        }
                    },
                    size: {
                        value: 25,
                        random: true,
                        anim: {
                            enable: false
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: 'bottom',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false
                        }
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
                            distance: 200,
                            size: 40,
                            duration: 2,
                            opacity: 0.8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                retina_detect: true
            });
        } else {
            console.warn('Particles.js not initialized: container or library missing');
        }

        // Add error boundary for redirection
        const redirectTimeout = setTimeout(() => {
            try {
                window.location.href = 'intro.html';
            } catch (redirectError) {
                console.error('Navigation error:', redirectError);
                alert('Unable to navigate. Please refresh the page.');
            }
        }, 3000);

        // Cleanup timeout to prevent memory leaks
        window.addEventListener('beforeunload', () => {
            clearTimeout(redirectTimeout);
        });

    } catch (mainError) {
        console.error('Critical error in loading script:', mainError);
        // Fallback redirection
        window.location.href = 'intro.html';
    }
});