document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // 1. FUNCIONALIDADE DO CARROSSEL (Se estivermos na página de resultados)
    // ===================================
    const slide = document.querySelector('.carousel-slide');
    if (slide) { 
        const items = document.querySelectorAll('.carousel-item');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        let currentIndex = 0;
        const totalItems = items.length;

        function updateSlide() {
            const offset = -currentIndex * 100;
            // Sintaxe segura para evitar erros
            slide.style.transform = 'translateX(' + offset + '%)'; 
        }

        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
            updateSlide();
        });

        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
            updateSlide();
        });
    }
    
    // ===================================
    // 2. FUNCIONALIDADE SCROLL REVEAL (Animação de Subir)
    // ===================================
    
    // Observa as classes que definimos no HTML (o elemento precisa ter pelo menos uma delas)
    const revealElements = document.querySelectorAll('.introduction-text, .final-cta-section, .carousel-section, .testimonial-card, .reveal-element');

    if ('IntersectionObserver' in window) {
        
        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.1 
        };

        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Adiciona a classe que ativa a animação CSS
                    entry.target.classList.add('reveal-visible'); 
                    // Para a observação para que a animação só ocorra uma vez
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        // Inicia a observação de todos os elementos
        revealElements.forEach(function(el) {
            observer.observe(el);
        });
    } else {
        // Fallback: Se não suportar, apenas mostra o conteúdo
        revealElements.forEach(function(el) {
             el.classList.add('reveal-visible');
        });
    }
});