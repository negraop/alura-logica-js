function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let disponivelPista = document.getElementById('qtd-pista');
    let disponivelSuperior = document.getElementById('qtd-superior');
    let disponivelInferior = document.getElementById('qtd-inferior');

    if (tipoIngresso == 'pista') {
        processarSolicitacao(disponivelPista, quantidade);
    } else if (tipoIngresso == 'inferior') {
        processarSolicitacao(disponivelInferior, quantidade);
    } else {
        processarSolicitacao(disponivelSuperior, quantidade);
    }
}

function processarSolicitacao(lugarDisponivel, quantidadeSolicitada) {
    let lugarDisponivelNumber = parseInt(lugarDisponivel.innerHTML);
    if (!temLugarDisponivel(lugarDisponivelNumber, quantidadeSolicitada)) {
        alert('Quantidade excedida aos lugares disponíveis');
        return;
    }
    confirmarCompra(lugarDisponivel, quantidadeSolicitada);
}

function temLugarDisponivel(lugarDisponivel, quantidadeSolicitada) {
    return quantidadeSolicitada <= lugarDisponivel;
}

function confirmarCompra(lugarDisponivel, quantidadeSolicitada) {
    lugarDisponivel.innerHTML = parseInt(lugarDisponivel.innerHTML) - quantidadeSolicitada;
    alert('Compra realizada com sucesso!');
}