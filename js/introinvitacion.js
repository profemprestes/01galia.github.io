document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos
    const invitationCard = document.querySelector('.invitation-card');
    const continueBtn = document.getElementById('continue-btn');
    const buttonSparkle = document.querySelector('.button-sparkle');
    
    // Animación de brillo para el botón
    setInterval(function() {
        buttonSparkle.style.animation = 'sparkle 1.5s ease-in-out';
        
        // Reiniciar la animación después de que termine
        setTimeout(function() {
            buttonSparkle.style.animation = 'none';
        }, 1500);
    }, 3000);
    
    // Efecto de clic en la tarjeta
    invitationCard.addEventListener('click', function(e) {
        // Evitar que el clic en el botón active este efecto
        if (e.target !== continueBtn && !continueBtn.contains(e.target)) {
            // Animación de la tarjeta al hacer clic
            gsap.to(invitationCard, {
                scale: 1.03,
                duration: 0.2,
                ease: "power1.out",
                onComplete: function() {
                    gsap.to(invitationCard, {
                        scale: 1,
                        duration: 0.2,
                        ease: "power1.in"
                    });
                }
            });
        }
    });
    
    // Navegación al hacer clic en el botón continuar
    continueBtn.addEventListener('click', function() {
        // Animación de salida
        gsap.to(invitationCard, {
            y: -50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: function() {
                // Redireccionar a la página principal
                window.location.href = 'principalnuevo.html';
            }
        });
    });
    
    // Animación de entrada inicial
    gsap.from(invitationCard, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
    });
    
    // Efecto de parallax suave para las decoraciones
    document.addEventListener('mousemove', function(e) {
        const decorations = document.querySelectorAll('.card-decoration');
        
        // Calcular la posición relativa del cursor
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        
        // Aplicar el efecto a cada decoración
        decorations.forEach(function(decoration) {
            gsap.to(decoration, {
                x: x * 20, // Movimiento horizontal
                y: y * 20, // Movimiento vertical
                duration: 1,
                ease: "power1.out"
            });
        });
    });
});