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


// CARDS CURSOS
let estrela = document.querySelector('#estrelas');
estrela.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Avaliou o curso de Cultura Digital')
})

// READ MORE
var button = document.getElementById('leia_button')

button.addEventListener ('click', function() {
    var card = document.querySelector('.card');
    card.classList.toogle('active');

    if (card.classList.contains('active')) {
        return button.textContent = "Ler menos";
    }
    button.textContent = "Leia mais";
});

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