document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer && window.particlesJS) {
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: { value: '#ccd5ae' },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 5,
                    random: true
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'bottom',
                    random: true,
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
                    }
                },
                modes: {
                    bubble: {
                        distance: 250,
                        size: 10,
                        duration: 2,
                        opacity: 0.8
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            retina_detect: true
        });
    }
});

