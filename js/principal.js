document.addEventListener('DOMContentLoaded', () => {
    try {
        initCountdown();
        setupModalInteractions();
    } catch (error) {
        console.error('Initialization error:', error);
    }
});


function initCountdown() {
    const eventDate = new Date('2025-05-10T13:00:00').getTime();
    const countdownElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // Si el evento ya pasó
        if (distance < 0) {
            Object.values(countdownElements).forEach(el => {
                if (el) el.textContent = '00';
            });
            return;
        }

        if (Object.values(countdownElements).every(el => el)) {
            // Calcular los valores
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Actualizar con formato de dos dígitos
            countdownElements.days.textContent = days.toString().padStart(2, '0');
            countdownElements.hours.textContent = hours.toString().padStart(2, '0');
            countdownElements.minutes.textContent = minutes.toString().padStart(2, '0');
            countdownElements.seconds.textContent = seconds.toString().padStart(2, '0');

            // Agregar animación cuando cambian los números
            Object.values(countdownElements).forEach(el => {
                el.classList.remove('number-change');
                void el.offsetWidth; // Forzar reflow
                el.classList.add('number-change');
            });
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function setupModalInteractions() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });
}

function openWhatsAppConfirmation() {
    const modalContainer = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <button class="close-modal" onclick="closeModal()" aria-label="Cerrar modal">×</button>
        <h3>¡Nos encantaría que vengas! 😊</h3>
        <p>Por favor, ingresa tu nombre y la cantidad de personas que asistirán al cumpleaños de Galia.</p>
        
        <form class="modal-form" onsubmit="event.preventDefault(); confirmAndSendWhatsApp();">
            <div class="form-group">
                <label for="name">Tu Nombre</label>
                <input type="text" id="name" placeholder="Ej: Familia González" required>
            </div>
            
            <div class="form-group">
                <label for="people-count">Cantidad de Personas</label>
                <input type="number" id="people-count" placeholder="1" min="1" required>
            </div>
            
            <div class="modal-buttons">
                <button type="button" class="cancel-btn" onclick="closeModal()">Cancelar</button>
                <button type="submit" class="action-btn">Confirmar</button>
            </div>
        </form>
    `;
    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('show');
}

function openWishesModal() {
    const modalContainer = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <button class="close-modal" onclick="closeModal()" aria-label="Cerrar modal">×</button>
        <h3>Deja tu Mensaje para Galia</h3>
        <p>Comparte tus buenos deseos o un lindo recuerdo.</p>
        
        <form class="modal-form" onsubmit="event.preventDefault(); sendWishes();">
            <div class="form-group">
                <label for="wishes-name">Tu Nombre</label>
                <input type="text" id="wishes-name" placeholder="Ej: Familia González" required>
            </div>
            
            <div class="form-group">
                <label for="wishes-message">Mensaje</label>
                <textarea id="wishes-message" placeholder="Escribe aquí tu mensaje..." required></textarea>
            </div>
            
            <div class="form-group">
                <label for="wishes-photo">Sube una Foto (Opcional)</label>
                <input type="file" id="wishes-photo" accept="image/*">
            </div>
            
            <div class="modal-buttons">
                <button type="button" class="cancel-btn" onclick="closeModal()">Cancelar</button>
                <button type="submit" class="action-btn">Enviar Mensaje</button>
            </div>
        </form>
    `;
    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('show');
}

function openGiftModal() {
    const modalContainer = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <button class="close-modal" onclick="closeModal()" aria-label="Cerrar modal">×</button>
        <h3>Un poco sobre mí</h3>
        <p>¡Hola! Soy Galia 💖</p>
        
        <div id="gift-info">
            <p>📅 <strong>Bebé:</strong> Nací el 10/05/2024</p>
            <p>📏 <strong>Medidas:</strong> Mido 72 cm y peso 10 kg. ¡Me dicen que soy una gordita preciosa! 🥰</p>
            <p>🧸 <strong>Juguetes:</strong> Me encanta jugar con juguetes, ¡aunque prefiero las cajas y tuppers! 📦</p>
            
            <h4>Información de Regalos</h4>
            <p>Si prefieres hacer un regalo monetario, mis papis facilitan esta opción:</p>
            
            <div class="details">
                <p>Banco: BROU</p>
                <p>Titular: MAURO PRESTES</p>
                <p>Cuenta: 001782901-00001</p>
                <button class="copy-btn" onclick="copyAccountDetails()">Copiar Detalles</button>
            </div>
            
            <p>¡Tu presencia es el mejor regalo! 🎁</p>
        </div>
    `;
    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('show');
}

function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove('show');
    setTimeout(() => {
        modalContainer.classList.add('hidden');
    }, 300);
}

function confirmAndSendWhatsApp() {
    const name = document.getElementById('name').value.trim();
    const peopleCount = document.getElementById('people-count').value;

    if (!name || !peopleCount) {
        Swal.fire({
            title: '¡Ups!',
            text: 'Por favor, completa todos los campos.',
            icon: 'warning',
            confirmButtonColor: '#d4a373'
        });
        return;
    }

    const message = `¡Hola! Soy ${name} y confirmo la asistencia de ${peopleCount} persona(s) al cumpleaños de Galia.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '59892475455';
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    closeModal();
}

function copyAccountDetails() {
    const accountDetails = 'BROU, Titular: MAURO PRESTES, Cuenta: 001782901-00001';
    navigator.clipboard.writeText(accountDetails).then(() => {
        Swal.fire({
            title: '¡Copiado!',
            text: 'Los datos de la cuenta han sido copiados al portapapeles',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
            position: 'top-end',
            toast: true
        });
    });
}

function sendWishes() {
    const name = document.getElementById('wishes-name').value;
    const message = document.getElementById('wishes-message').value;
    const photo = document.getElementById('wishes-photo').files[0];

    if (name && message) {
        // Here you can add logic to send the wishes, 
        // e.g., via email, save to a database, etc.
        alert(`Mensaje enviado por ${name}`);
        closeModal();
    } else {
        alert('Por favor, completa todos los campos obligatorios.');
    }
}

function addToGoogleCalendar() {
    const googleCalendarLink = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Cumpleaños+de+Galia&dates=20250510T130000/20250510T180000&details=¡Celebremos+el+primer+cumpleaños+de+Galia!&location=Club+Ciclista+Juanico';
    window.open(googleCalendarLink, '_blank');
}

function openGoogleMaps() {
    const googleMapsLink = 'https://maps.app.goo.gl/sCwzNtgBekG2KZsT6';
    window.open(googleMapsLink, '_blank');
}

// This function was missing in the provided plan, 
// but it is referenced in the openWhatsAppConfirmation function.
// You might want to implement the logic for this function.
function confirmAndSendWhatsApp() {
    // Implement the logic to confirm and send WhatsApp message.
}