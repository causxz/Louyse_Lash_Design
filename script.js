// Arquivo: script.js (Versão Simplificada e Focada no Toque)

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');

        carousel.addEventListener('click', () => {
            // 1. Limpa qualquer timer que já exista para este carrossel
            const existingTimer = carousel.dataset.timerId;
            if (existingTimer) {
                clearTimeout(parseInt(existingTimer));
            }

            // 2. Pausa a animação diretamente no estilo do elemento
            track.style.animationPlayState = 'paused';

            // 3. Cria um novo timer para retomar a animação
            const newTimer = setTimeout(() => {
                track.style.animationPlayState = 'running';
            }, 2000); // 2 segundos

            // 4. Guarda a referência do novo timer
            carousel.dataset.timerId = newTimer;
        });
    });
});
