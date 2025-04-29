// Fecha del evento (10 de mayo de 2025 a las 13:00 hora de Uruguay GMT-3)
const EVENT_DATE = new Date('2025-05-10T13:00:00-03:00');

// Elementos del DOM
const countdownElements = {
    days: document.getElementById('countdown-days'),
    hours: document.getElementById('countdown-hours'),
    minutes: document.getElementById('countdown-minutes'),
    seconds: document.getElementById('countdown-seconds')
};

const countdownContainer = document.querySelector('.countdown-container');
const countdownMessage = document.getElementById('countdown-message');
const countdownInfo = document.querySelector('.countdown-info');

// Función para calcular el tiempo restante
function getTimeRemaining() {
    const now = new Date();
    const difference = EVENT_DATE - now;
    
    // Si ya pasó la fecha del evento
    if (difference < 0) {
        return {
            expired: true,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    
    // Cálculos de tiempo
    return {
        expired: false,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
}

// Función para actualizar el contador en el DOM
function updateCountdown() {
    const time = getTimeRemaining();
    
    if (time.expired) {
        // Mostrar mensaje de evento iniciado y ocultar información
        countdownContainer.style.display = 'none';
        countdownInfo.style.display = 'none';
        countdownMessage.style.display = 'block';
        clearInterval(countdownInterval);
        return;
    }
    
    // Actualizar cada elemento con padding de ceros
    Object.keys(countdownElements).forEach(unit => {
        countdownElements[unit].textContent = String(time[unit]).padStart(2, '0');
    });
}

// Iniciar el contador y actualizarlo cada segundo
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// Evento para limpiar el intervalo cuando se cierre la página
window.addEventListener('beforeunload', () => {
    clearInterval(countdownInterval);
});