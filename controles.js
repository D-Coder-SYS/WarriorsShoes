document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-wrapper');
    const products = document.querySelectorAll('.produto');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let isDragging = false;
    let startX;
    let scrollLeft;

    let currentIndex = 0;
    const totalItems = products.length;
    const itemWidth = products[0].offsetWidth + 20; // Inclui margem entre os itens

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        }
    });

    // Inicia o arrasto
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft; // Posição do mouse
        scrollLeft = carousel.scrollLeft; // Posição de rolagem
        carousel.style.cursor = 'grabbing'; // Muda o cursor
    });

    // Para o arrasto
    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });

    // Mover o carrossel enquanto arrasta
    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return; // Se não estiver arrastando, não faz nada
        e.preventDefault(); // Previne o comportamento padrão
        const x = e.pageX - carousel.offsetLeft; // Nova posição do mouse
        const walk = (x - startX) * 2; // Multiplicador para aumentar a velocidade
        carousel.scrollLeft = scrollLeft - walk; // Atualiza a posição de rolagem
    });
});
