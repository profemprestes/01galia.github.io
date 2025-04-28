document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.getElementById('modal-container');
    
    // Ensure the modal container exists before adding event listeners
    if (modalContainer) {
        // Add event listener to close modal when clicking outside
        modalContainer.addEventListener('click', (e) => {
            if (e.target === modalContainer) {
                closeModal();
            }
        });

        // Ensure the WhatsApp confirmation function is globally accessible
        window.openWhatsAppConfirmation = function() {
            if (modalContainer) {
                modalContainer.style.display = 'flex';
                
                // Populate the modal content dynamically
                modalContainer.innerHTML = `
                    <div class="modal">
                        <button class="close-modal" onclick="closeModal()" aria-label="Cerrar modal">×</button>
                        <h3>¡Nos encantaría que vengas! 😊</h3>
                        <p>Por favor, ingresa tu nombre y la cantidad de personas que asistirán al cumpleaños de Galia.</p>
                        
                        <label for="name">Tu Nombre</label>
                        <input type="text" id="name" placeholder="Ej: Familia González" required>
                        
                        <label for="people-count">Cantidad de Personas</label>
                        <input type="number" id="people-count" placeholder="1" min="1" required>
                        
                        <div class="modal-buttons">
                            <button id="cancel-btn" class="cancel-btn" onclick="closeModal()">Cancelar</button>
                            <button id="confirm-btn" class="action-btn" onclick="confirmAndSendWhatsApp()">Confirmar y Enviar WhatsApp</button>
                        </div>
                    </div>
                `;
            }
        };

        // Function to close the modal
        window.closeModal = function() {
            if (modalContainer) {
                modalContainer.style.display = 'none';
            }
        };

        // Function to confirm and send WhatsApp message
        window.confirmAndSendWhatsApp = function() {
            const name = document.getElementById('name');
            const peopleCount = document.getElementById('people-count');

            if (name && peopleCount && name.value && peopleCount.value) {
                const message = `¡Hola! Soy ${name.value} y confirmo la asistencia de ${peopleCount.value} persona(s) al cumpleaños de Galia.`;
                const encodedMessage = encodeURIComponent(message);
                const phoneNumber = '59892475455';
                
                window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
                closeModal();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        };
    }
});