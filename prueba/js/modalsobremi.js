document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.getElementById('modal-container');

    if (!modalContainer) return;

    window.openModalSobre = () => {
        modalContainer.innerHTML = `
            <div class="modal sobre-mi-modal">
                <button class="close-modal" onclick="closeModal()">&times;</button>
                <h2 class="modal-title">¡Hola! Soy Galia 💖</h2>
                <div class="modal-section">
                    <h3>Bebé</h3>
                    <p>Nací el <strong>10 de mayo de 2024</strong>.</p>
                    <p>Mido <strong>72 cm</strong> y peso <strong>10 kg</strong>.</p>
                    <p>¡Me dicen que soy una gordita preciosa! 🥰</p>
                </div>
                <div class="modal-section">
                    <h3>Juguetes</h3>
                    <p>Me encanta jugar con juguetes, aunque <strong>¡prefiero cajas y tuppers!</strong> 📦</p>
                </div>
                <div class="modal-section">
                    <h3>Ropa</h3>
                    <p>Mi Mamá me viste <strong>facherísima</strong> (¡Papá todavía está aprendiendo! 🤭).</p>
                </div>
                <div class="modal-section">
                    <h3>Árboles</h3>
                    <p>Amo pasear, mirar los árboles y, si nadie me ve, ¡arrancar alguna hojita! 🍃</p>
                </div>
                <div class="modal-section">
                    <h3>Curiosidad</h3>
                    <p>Soy muy curiosa, ¡me encanta explorar todo lo que me rodea! 🔍</p>
                </div>
                <div class="modal-section">
                    <h3>Sonrisas</h3>
                    <p>Siempre estoy sonriendo, mostrando mis dientitos y repartiendo muchos besos. 😘</p>
                </div>
                <div class="modal-section">
                    <h3>Regalo (Opcional)</h3>
                    <p>Lo más importante para mí es compartir momentos juntos. 💕</p>
                    <p>Pero si deseas hacer un regalito especial:</p>
                    <ul class="bank-details">
                        <li><strong>Banco:</strong> BROU</li>
                        <li><strong>Titular:</strong> Mauro Prestes</li>
                        <li><strong>Número de Cuenta:</strong> 001782901-00001</li>
                        <li><strong>Moneda:</strong> Pesos Uruguayos ($)</li>
                    </ul>
                    <p class="gift-message">¡Tu presencia sigue siendo el mejor regalo! 🎁</p>
                </div>
            </div>
        `;
        modalContainer.style.display = 'flex';
    };

    window.closeModal = () => {
        modalContainer.style.display = 'none';
    };
});