// Arquivo: script.js (Versão Final Simplificada)

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        let touchTimer = null;

        // Adiciona um listener APENAS para o toque na tela
        carousel.addEventListener('touchstart', () => {
            // Limpa qualquer timer anterior
            if (touchTimer) {
                clearTimeout(touchTimer);
            }

            // Pausa a animação
            track.style.animationPlayState = 'paused';

            // Define um novo timer para retomar
            touchTimer = setTimeout(() => {
                track.style.animationPlayState = 'running';
            }, 2000); // 2 segundos
        });
    });
});
