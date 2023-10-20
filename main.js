// INICIO BODY

function carregou() {
    console.log('Página carregada com sucesso')
}

// FINAL BODY


// INICIO HEADER (CABECALHO)
function logo() {
    console.log('Foco na Logo')
}

// FINAL HEADER


// INICIO ARTICLE (CORPO)

/* Carrossel */
(function () {
    "use strict";

    var carousels = function () {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        });
    };

    (function ($) {
        carousels();
    })(jQuery);
})
/* FINAL CARROSSEL */


// FINAL ARTICLE


// INICIO FOOTER (RODAPE)

/* TECNOFY transicao */
const buttonsComponent = document.querySelector('.buttons');
const buttonsToggle = document.querySelector('.buttons__toggle');

buttonsToggle.addEventListener('click', toggleButtons);

function toggleButtons() {
    buttonsToggle.classList.toggle('buttons__toggle--active');
    buttonsComponent.classList.toggle('buttons--active');
    document.activeElement.blur();
}

// FINAL FOOTER
