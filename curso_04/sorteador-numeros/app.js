let quantidadeDeNumeros = document.getElementById('quantidade');
let inicio = document.getElementById('de');
let fim = document.getElementById('ate');
let listaNumerosSorteados = [];

function sortear() {
    if (inicioEhMaiorQueFim()) return;
    if (QtdEhMaiorQueIntervaloEntreInicioEFim()) return;

    let count = 0;
    listaNumerosSorteados = [];
    while (count != quantidadeDeNumeros.value) {
        gerarNumeroAleatorio(inicio.value, fim.value);
        count++;
    }
    mostrarNumerosNaTela();
    habilitarBotaoReiniciar();
}

function inicioEhMaiorQueFim() {
    if (parseInt(inicio.value) > parseInt(fim.value)) {
        alert('Número inicial é maior que o número final. Favor corrigir');
        return true;
    }
    return false;
}

function QtdEhMaiorQueIntervaloEntreInicioEFim() {
    if (parseInt(quantidadeDeNumeros.value) > parseInt(fim.value) - parseInt(inicio.value) + 1) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return true;
    }
    return false;
}

function gerarNumeroAleatorio(inicio, fim) {
    inicio = parseInt(inicio);
    fim = parseInt(fim);
    let numeroEscolhido = Math.floor(Math.random() * (fim - inicio + 1) + inicio);
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(inicio, fim);
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
    }
}

function mostrarNumerosNaTela() {
    let label = document.getElementsByClassName('texto__paragrafo');
    label[3].innerHTML = `Números sorteados: ${listaNumerosSorteados.toString()}`;
}

function habilitarBotaoReiniciar() {
    document.getElementById('btn-reiniciar').className = 'container__botao';
}

function reiniciar() {
    limparCampo();
    document.getElementById('btn-reiniciar').className = 'container__botao-desabilitado';
    let label = document.getElementsByClassName('texto__paragrafo');
    label[3].innerHTML = 'Números sorteados: nenhum até agora';
}

function limparCampo() {
    quantidadeDeNumeros.value = '';
    inicio.value = '';
    fim.value = '';
    listaNumerosSorteados = [];
}

