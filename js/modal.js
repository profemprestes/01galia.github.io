document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('modal-container');

  // Verifica que el contenedor exista antes de agregar event listeners
  if (modalContainer) {
      // Cerrar el modal si se hace clic fuera del contenido
      modalContainer.addEventListener('click', (e) => {
          if (e.target === modalContainer) {
              closeModal();
          }
      });
  }

  // Función para abrir un modal genérico con contenido dinámico
  window.openModal = function(contentHTML) {
      if (modalContainer) {
          modalContainer.style.display = 'flex';
          modalContainer.innerHTML = `
              <div class="modal">
                  <button class="close-modal" onclick="closeModal()" aria-label="Cerrar modal">×</button>
                  ${contentHTML}
              </div>
          `;
      }
  };

  // Función para cerrar el modal y limpiar el contenido
  window.closeModal = function() {
      if (modalContainer) {
          modalContainer.style.display = 'none';
          modalContainer.innerHTML = ''; // Limpiar el contenido del modal
      }
  };
});
