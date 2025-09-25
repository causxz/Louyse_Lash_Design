// Arquivo: script.js

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os carrosséis da página
    const carousels = document.querySelectorAll('.carousel');
    
    // Variável para controlar o timer
    let pauseTimer;

    carousels.forEach(carousel => {
        carousel.addEventListener('click', function() {
            // Limpa qualquer timer anterior para evitar múltiplos resumes
            clearTimeout(pauseTimer);

            // Pausa a animação de todos os grupos de imagens
            const groups = carousel.querySelectorAll('.group');
            groups.forEach(group => {
                group.classList.add('paused');
            });

            // Cria um timer para remover a pausa depois de 3 segundos (3000 milissegundos)
            pauseTimer = setTimeout(() => {
                groups.forEach(group => {
                    group.classList.remove('paused');
                });
            }, 2000);
        });
    });

});
