// Arquivo: script.js (Versão Final com Hover e Toque)

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os carrosséis da página
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        let pauseTimer; // Cada carrossel terá sua própria variável de timer

        // --- LÓGICA PARA O CLIQUE/TOQUE (MOBILE) ---
        carousel.addEventListener('click', function() {
            if (pauseTimer) {
                clearTimeout(pauseTimer);
            }

            const groups = carousel.querySelectorAll('.group');
            groups.forEach(group => group.classList.add('paused'));

            pauseTimer = setTimeout(() => {
                groups.forEach(group => group.classList.remove('paused'));
            }, 3000);
        });

        // --- LÓGICA PARA O MOUSE HOVER (DESKTOP) ---
        carousel.addEventListener('mouseenter', function() {
            const groups = carousel.querySelectorAll('.group');
            groups.forEach(group => group.classList.add('paused'));
        });

        carousel.addEventListener('mouseleave', function() {
            // Se houver um timer de clique rodando, não faz nada para não interrompê-lo
            if (pauseTimer) {
                 clearTimeout(pauseTimer);
            }
        const track = carousel.querySelector('.carousel-track');
        track.classList.add('paused');

        });
    });
});

