document.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelector('.carousel-slide');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const totalItems = items.length;

    // Função para mover o slide
    function updateSlide() {
        // Calcula o quanto deve mover o slide (ex: -100% para o item 1, -200% para o item 2)
        const offset = -currentIndex * 100;
        slide.style.transform = `translateX(${offset}%)`;
    }

    // Botão Anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        updateSlide();
    });

    // Botão Próximo
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        updateSlide();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // 1. FUNCIONALIDADE DO CARROSSEL
    // ===================================
    const slide = document.querySelector('.carousel-slide');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const totalItems = items.length;

    function updateSlide() {
        const offset = -currentIndex * 100;
        slide.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        updateSlide();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        updateSlide();
    });
    
    // ===================================
    // 2. FUNCIONALIDADE SCROLL REVEAL
    // ===================================
    
    // Seleciona todos os elementos que queremos animar (as sections)
    const revealElements = document.querySelectorAll('.section-card, .final-cta-section');

    const observerOptions = {
        root: null, // Usa o viewport como referência
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento precisa estar visível para disparar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que ativa a animação CSS (faz o elemento subir)
                entry.target.classList.add('reveal-visible'); 
                // Para que a animação ocorra apenas uma vez, pare de observar o elemento
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Começa a observar cada section
    revealElements.forEach(el => {
        observer.observe(el);
    });

});


