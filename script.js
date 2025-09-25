// Arquivo: script.js (Versão Final com Hover e Toque)

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        let clickPauseTimer = null; // Timer específico para eventos de clique/toque
        let isHovering = false;     // Controla se o mouse está sobre o elemento

        // Função para pausar a animação
        const pauseAnimation = () => {
            track.style.animationPlayState = 'paused';
        };

        // Função para retomar a animação
        const resumeAnimation = () => {
            track.style.animationPlayState = 'running';
        };

        // --- EVENTOS DE MOUSE (PARA DESKTOP) ---

        carousel.addEventListener('mouseenter', () => {
            isHovering = true;
            pauseAnimation();
        });

        carousel.addEventListener('mouseleave', () => {
            isHovering = false;
            // Só volta a rolar se não houver um timer de clique ativo
            if (!clickPauseTimer) {
                resumeAnimation();
            }
        });

        // --- EVENTO DE CLIQUE (PARA TOQUE NO CELULAR E CLIQUE NO DESKTOP) ---

        carousel.addEventListener('click', () => {
            // Limpa qualquer timer de clique anterior
            if (clickPauseTimer) {
                clearTimeout(clickPauseTimer);
            }
            
            pauseAnimation(); // Pausa imediatamente

            // Define um novo timer para retomar a rolagem
            clickPauseTimer = setTimeout(() => {
                // Só retoma se o mouse não estiver mais em cima do carrossel
                if (!isHovering) {
                    resumeAnimation();
                }
                clickPauseTimer = null; // Limpa a referência do timer após ser usado
            }, 2000); // 2 segundos
        });
    });
});
