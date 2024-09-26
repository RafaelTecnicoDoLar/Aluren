// Função para mover o carrossel
function moveSlide(direction) {
    const carousel = document.querySelector('.carousel'); // Seleciona o carrossel
    const scrollAmount = 500 * direction; // Define a quantidade de movimento (500px)
    
    // Realiza a rolagem no eixo horizontal
    carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth' // Adiciona uma rolagem suave
    });
}
