let botaoEnviar = document.querySelector('#btn-form-submit')

botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Clicou no botão Enviar')
})

function carregou() {
    console.log('Página carregada  com sucesso')
}

function focou() {
    console.log('Foco na Logo')
}

function rolouPagina() {
    console.log('Pagina rolando')
}

function focoNoEmail() {
    console.log("Foco no campo de Email")
}

function semFocoNoEmail() {
    console.log("Saiu o Foco do campo de Email")
}

let email = document.querySelector('input[type=email]')
function avisarQueTeclou() {
    let numLetras = 1
    console.log('Digitando')
}

let text = document.querySelector('textarea[type=text]')
function avisarQueTeclou() {
    let numLetras = 1
    console.log('Digitando')
}

function focoNaDescricao() {
    console.log("Foco no campo de Descrição")
}

function semFocoNaDescricao() {
    console.log("Saiu o Foco do campo de Descrição")
}
// let botao1 = document.querySelector('#btn1')
// let botao2 = document.querySelector('#btn2')


// botao2.addEventListener('blur', function () {
//     console.log('Foco no botão 2')
// })