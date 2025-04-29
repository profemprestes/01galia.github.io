// Función para abrir Google Maps con la ubicación del Club
function openGoogleMaps() {
    const location = "Club+Ciclista+Juanicó";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
    window.open(mapsUrl, '_blank');
}

// Función para abrir WhatsApp con mensaje preescrito
function confirmarPorWhatsApp() {
    const mensaje = "¡Hola! Quiero confirmar mi asistencia al cumpleaños de Galia 🎉";
    const telefono = "+598XXXXXXXX"; // Reemplazar con el número real
    const whatsappUrl = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
}

// Animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.principal-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});