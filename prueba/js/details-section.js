document.addEventListener('DOMContentLoaded', function() {
    const btnMaps = document.getElementById('btn-maps');
    const btnConfirm = document.getElementById('btn-confirm');
  
    if (btnMaps) {
      btnMaps.addEventListener('click', function() {
        window.open('https://goo.gl/maps/xxxxxxx', '_blank'); // Reemplazar por la URL real de Google Maps
      });
    }
  
    if (btnConfirm) {
      btnConfirm.addEventListener('click', function() {
        window.open('https://wa.me/598XXXXXXXX?text=¡Confirmo%20mi%20asistencia%20a%20la%20fiesta%20de%20Galia!', '_blank'); // Reemplazar por número real
      });
    }
  });
  