document.addEventListener('DOMContentLoaded', () => {
    // Función para abrir Google Maps
    window.utils.openGoogleMaps = () => {
        const location = encodeURIComponent("Club Ciclista Juanicó");
        window.open(`https://www.google.com/maps/search/?api=1&query=${location}`, '_blank');
    };

    // Función para agregar al calendario
    window.utils.addToGoogleCalendar = () => {
        const eventName = encodeURIComponent("Cumpleaños de Galia - 1 año");
        const eventLocation = encodeURIComponent("Club Ciclista Juanicó");
        const eventDescription = encodeURIComponent("¡Acompáñanos a celebrar el primer añito de Galia!");
        const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventName}&dates=20250510T130000/20250510T180000&details=${eventDescription}&location=${eventLocation}&sf=true&output=xml`;
        window.open(calendarUrl, '_blank');
    };

    // Función para abrir el modal de mensajes
    window.openMessageModal = () => {
        const modalHTML = `
            <div class="modal">
                <button class="close-modal" onclick="closeModal('message-modal')">&times;</button>
                <h3>Deja tu Mensaje para Galia</h3>
                <p>Comparte tus buenos deseos o un lindo recuerdo. ✨</p>
                <form id="message-form">
                    <label for="name">Tu Nombre</label>
                    <input type="text" id="name" placeholder="Tu nombre o familia" required>
                    <label for="message">Mensaje</label>
                    <textarea id="message" placeholder="Escribe aquí tu mensaje para Galia..." required></textarea>
                    <label for="photo">Sube una Foto (Opcional)</label>
                    <input type="file" id="photo" accept="image/*">
                    <div class="modal-buttons">
                        <button type="button" class="cancel-btn" onclick="closeModal('message-modal')">Cancelar</button>
                        <button type="submit" class="action-btn">Enviar Mensaje</button>
                    </div>
                </form>
            </div>
        `;
        const modalContainer = document.getElementById('message-modal');
        modalContainer.innerHTML = modalHTML;
        modalContainer.style.display = 'flex';
        document.getElementById('message-form').addEventListener('submit', handleSendMessage);
    };

    // Función para abrir el modal "Sobre Mí"
    window.openAboutMeModal = () => {
        const modalHTML = `
            <div class="modal">
                <button class="close-modal" onclick="closeModal('about-me-modal')">&times;</button>
                <h3>¡Un poco sobre mí! 💖</h3>
                <div class="about-me-content">
                    <p>¡Hola! Soy <strong>Galia</strong> 💖</p>
                    <p>Nací el <strong>10/05/2024</strong></p>
                    <p>Mido <strong>72 cm</strong></p>
                    <p>Peso <strong>10 kg</strong> (y me dicen que soy una gordita preciosa)</p>
                    <p>Me gusta jugar con juguetes, pero casi siempre juego con cajas y tuppers 🤷‍♀️</p>
                    <p>Me encanta vestirme facherísima, pero solo Mamá sabe de moda 😎</p>
                    <p>Me gusta salir a pasear, mirar árboles y robar hojas 🍃</p>
                    <p>Soy muy curiosa, ¡me encanta investigar todo!</p>
                    <p>Siempre ando sonriendo, mostrando mis dientitos y dando muchos besos 😘</p>
                    <p>Espero que esta guía sobre mí te sirva, pero lo que más me gusta es que me regales tu tiempo 💕.</p>
                    
                    <h4>Regalito (Opcional)</h4>
                    <p>Si prefieres hacer un regalo monetario, mis papis facilitan esta opción:</p>
                    <div class="gift-info">
                        <p><strong>Banco</strong>: BROU</p>
                        <p><strong>Titular</strong>: MAURO PRESTES</p>
                        <p><strong>Número de Cuenta</strong>: 001782901-00001</p>
                        <p><strong>Moneda</strong>: Pesos Uruguayos ($)</p>
                    </div>
                    <p>¡Tu presencia es el mejor regalo! 🎁</p>
                </div>
            </div>
        `;
        const modalContainer = document.getElementById('about-me-modal');
        modalContainer.innerHTML = modalHTML;
        modalContainer.style.display = 'flex';
    };

    // Función para abrir el modal de confirmación
    window.openWhatsAppConfirmation = () => {
        const modalHTML = `
            <div class="modal">
                <button class="close-modal" onclick="closeModal('whatsapp-modal')">&times;</button>
                <h3>¡Confirmá tu asistencia!</h3>
                <p>Por favor, ingresa tu nombre y cantidad de personas.</p>
                <form id="confirmation-form">
                    <label for="name">Tu Nombre</label>
                    <input type="text" id="name" placeholder="Ej: Familia González" required>
                    <label for="people-count">Cantidad de Personas</label>
                    <input type="number" id="people-count" placeholder="1" min="1" required>
                    <div class="modal-buttons">
                        <button type="button" class="cancel-btn" onclick="closeModal('whatsapp-modal')">Cancelar</button>
                        <button type="submit" class="action-btn">Confirmar y Enviar WhatsApp</button>
                    </div>
                </form>
            </div>
        `;
        const modalContainer = document.getElementById('whatsapp-modal');
        modalContainer.innerHTML = modalHTML;
        modalContainer.style.display = 'flex';
        document.getElementById('confirmation-form').addEventListener('submit', handleConfirmAndSendWhatsApp);
    };

    // Función para cerrar el modal
    window.closeModal = (modalId) => {
        const modalContainer = document.getElementById(modalId);
        modalContainer.style.display = 'none';
    };

    // Función para manejar el envío del mensaje
    const handleSendMessage = (e) => {
        e.preventDefault();
        alert('¡Mensaje enviado! Gracias por participar.');
        closeModal('message-modal');
    };

    // Función para manejar la confirmación y enviar WhatsApp
    const handleConfirmAndSendWhatsApp = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const peopleCount = document.getElementById('people-count').value;
        const phoneNumber = '59892475455'; // Reemplaza con el número real
        const message = encodeURIComponent(`¡Hola! Soy ${name} y confirmo la asistencia de ${peopleCount} persona(s) al cumpleaños de Galia.`);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        closeModal('whatsapp-modal');
    };
});