document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.getElementById('modal-container');
    const PHONE_NUMBER = '59892475455';

    if (!modalContainer) return;

    window.openWhatsAppConfirmation = () => {
        modalContainer.innerHTML = `
            <div class="modal">
                <button class="close-modal" onclick="closeModal()">&times;</button>
                <h3>¡Nos encantaría que vengas! 😊</h3>
                <p>Por favor, ingresa tu nombre y cantidad de personas.</p>
                <label for="name">Tu Nombre</label>
                <input type="text" id="name" placeholder="Ej: Familia González" required>
                <label for="people-count">Cantidad de Personas</label>
                <input type="number" id="people-count" placeholder="1" min="1" required>
                <div class="modal-buttons">
                    <button class="cancel-btn" onclick="closeModal()">Cancelar</button>
                    <button class="action-btn" onclick="confirmAndSendWhatsApp()">Confirmar y Enviar WhatsApp</button>
                </div>
            </div>
        `;
        modalContainer.style.display = 'flex';
    };

    window.closeModal = () => {
        modalContainer.style.display = 'none';
    };

    window.confirmAndSendWhatsApp = () => {
        const name = document.getElementById('name');
        const peopleCount = document.getElementById('people-count');
        
        if (!name.value || !peopleCount.value) {
            alert('Completa todos los campos.');
            return;
        }

        const msg = encodeURIComponent(`¡Hola! Soy ${name.value} y confirmo la asistencia de ${peopleCount.value} persona(s) al cumpleaños de Galia.`);
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${msg}`, '_blank');
        closeModal();
    };
});