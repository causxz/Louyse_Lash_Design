// Arquivo: script.js (Versão Final com 'touchstart' para mobile)

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    const isHoverDevice = window.matchMedia('(hover: hover)').matches;

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        let pauseTimer;

        if (isHoverDevice) {
            // LÓGICA PARA DISPOSITIVOS COM MOUSE (DESKTOP)
            carousel.addEventListener('mouseenter', () => {
                track.classList.add('paused');
            });

            carousel.addEventListener('mouseleave', () => {
                track.classList.remove('paused');
            });
        } else {
            // LÓGICA PARA DISPOSITIVOS DE TOQUE (CELULAR)
            carousel.addEventListener('touchstart', () => { // << MUDANÇA PRINCIPAL AQUI
                if (pauseTimer) {
                    clearTimeout(pauseTimer);
                }
                track.classList.add('paused');

                pauseTimer = setTimeout(() => {
                    track.classList.remove('paused');
                }, 2000); // Pausa por 2 segundos
            });
        }
    });
});
