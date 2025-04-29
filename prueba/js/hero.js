document.addEventListener('DOMContentLoaded', () => {
    // Funciones utilitarias
    const utils = {
        openGoogleMaps() {
            const location = encodeURIComponent("Club Ciclista Juanicó");
            window.open(`https://www.google.com/maps/search/?api=1&query=${location}`, '_blank');
        },
        addToGoogleCalendar() {
            const eventName = encodeURIComponent("Cumpleaños de Galia - 1 año");
            const eventLocation = encodeURIComponent("Club Ciclista Juanicó");
            const eventDescription = encodeURIComponent("¡Acompáñanos a celebrar el primer añito de Galia!");
            const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventName}&dates=20250510T130000/20250510T180000&details=${eventDescription}&location=${eventLocation}&sf=true&output=xml`;
            window.open(calendarUrl, '_blank');
        },
        scrollTo(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.utils = utils;
});