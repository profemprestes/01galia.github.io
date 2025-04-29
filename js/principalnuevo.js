// Funcionalidad para la sección hero del cumpleaños de Galia

// Función para abrir Google Maps con la ubicación del evento
function openGoogleMaps() {
    // Coordenadas del Club Ciclista Juanicó
    // Nota: Reemplazar estas coordenadas con las reales del lugar
    const location = "Club+Ciclista+Juanicó";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
    window.open(mapsUrl, '_blank');
}

// Función para agregar el evento al Google Calendar
function addToGoogleCalendar() {
    // Detalles del evento
    const eventName = "Cumpleaños de Galia - 1 año";
    const eventLocation = "Club Ciclista Juanicó";
    const eventDescription = "¡Acompáñanos a celebrar el primer añito de Galia!";
    
    // Fecha y hora (formato ISO)
    // 10 de mayo de 2025, de 13:00 a 18:00
    const startDate = "20250510T130000";
    const endDate = "20250510T180000";
    
    // Crear URL para Google Calendar
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventName)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;
    
    window.open(calendarUrl, '_blank');
}

// Inicialización cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Animaciones adicionales o inicialización de componentes
    console.log("Página de cumpleaños de Galia cargada correctamente");
    
    // Aquí puedes agregar más funcionalidades según sea necesario
});


// Función para desplazarse a la siguiente sección
function scrollToNextSection() {
    const nextSection = document.getElementById('countdown');
    if (nextSection) {
        nextSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
}

function scrollToPrincipalSection() {
    const principalSection = document.getElementById('principal');
    if (principalSection) {
        principalSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
}