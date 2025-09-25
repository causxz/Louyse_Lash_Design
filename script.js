// Arquivo: script.js (Versão Corrigida para Múltiplos Timers)

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os carrosséis da página
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        carousel.addEventListener('click', function() {
            // Verifica se este carrossel específico já tem um timer ativo e o limpa
            if (carousel.dataset.pauseTimer) {
                clearTimeout(carousel.dataset.pauseTimer);
            }

            // Pausa a animação apenas nos grupos de imagens DESTE carrossel
            const groups = carousel.querySelectorAll('.group');
            groups.forEach(group => {
                group.classList.add('paused');
            });

            // Cria um novo timer e guarda a referência dele diretamente no elemento do carrossel
            const newTimer = setTimeout(() => {
                groups.forEach(group => {
                    group.classList.remove('paused');
                });
            }, 3000); // 3 segundos de pausa

            carousel.dataset.pauseTimer = newTimer;
        });
    });
});
