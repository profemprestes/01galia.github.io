// Función para actualizar el contador
function updateCountdown() {
    const eventDate = new Date('2025-05-10T13:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizar elementos
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // Si la fecha ya pasó
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown-timer').innerHTML = '<h3>¡El evento ya comenzó!</h3>';
    }
}

// Función para abrir Google Maps
function openGoogleMaps() {
    const location = 'Club+Ciclista+Juanico';
    window.open(`https://www.google.com/maps/search/?api=1&query=${location}`, '_blank');
}

// Función para agregar al calendario de Google
function addToGoogleCalendar() {
    const event = {
        text: 'Primer Cumpleaños de Galia',
        dates: '20250510T130000/20250510T180000',
        details: '¡Celebremos juntos el primer añito de Galia!',
        location: 'Club Ciclista Juanico'
    };

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(calendarUrl, '_blank');
}

// Iniciar el contador cuando se carga la página
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Animaciones suaves al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.getElementById('hero-content-wrapper');
    
    // Efecto parallax suave
    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;
        heroContent.style.transform = `translateY(${scroll * 0.5}px)`;
    });
});

// Scroll suave al hacer clic en el indicador
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    const countdownSection = document.querySelector('.countdown');
    countdownSection.scrollIntoView({ behavior: 'smooth' });
});

// Ocultar el indicador de scroll cuando se llega a la sección de countdown
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const countdownSection = document.querySelector('.countdown');
    const countdownPosition = countdownSection.getBoundingClientRect().top;
    
    if (countdownPosition < window.innerHeight) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
    } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
    }
});