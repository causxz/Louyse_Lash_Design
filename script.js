// Arquivo: script.js (Versão Definitiva e Robusta)

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        let touchTimer = null; // Timer específico para eventos de toque/clique
        let isHovered = false; // Controla se o mouse está sobre o elemento

        // --- LÓGICA DE PAUSA E RESUME ---

        const pauseAnimation = () => {
            track.classList.add('paused');
        };

        const resumeAnimation = () => {
            track.classList.remove('paused');
        };

        // --- EVENTOS DE MOUSE (PARA DESKTOP) ---

        carousel.addEventListener('mouseenter', () => {
            isHovered = true;
            pauseAnimation();
        });

        carousel.addEventListener('mouseleave', () => {
            isHovered = false;
            // Só volta a rolar se não houver um timer de toque ativo
            if (!touchTimer) {
                resumeAnimation();
            }
        });

        // --- EVENTO DE CLIQUE (PARA TOQUE NO CELULAR) ---

        carousel.addEventListener('click', () => {
            // Limpa qualquer timer anterior para reiniciar a contagem
            if (touchTimer) {
                clearTimeout(touchTimer);
            }

            pauseAnimation();

            // Define um timer para voltar a rolar após 2 segundos
            touchTimer = setTimeout(() => {
                // Só volta a rolar se o mouse não estiver em cima (relevante para desktops)
                if (!isHovered) {
                    resumeAnimation();
                }
                touchTimer = null; // Limpa a referência do timer
            }, 2000); // 2 segundos
        });
    });
});
