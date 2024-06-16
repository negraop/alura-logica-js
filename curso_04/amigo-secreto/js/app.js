let amigosCadastrados = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    if (nome == '') {
        alert('O campo de Nome não pode ser vazio');
        return;
    }

    if (existeMesmoNome(nome)) {
        alert('Este nome já existe, favor cadastrar um sobrenome');
        return;
    }
    amigosCadastrados.push(nome);
    atualizarLista();
    limparInputNomes();
    limparNomesSorteados();
}

function existeMesmoNome(nome) {
    return amigosCadastrados.includes(nome);
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigosCadastrados.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigosCadastrados[i];
        let amigo = amigosCadastrados[i];
       
        (function(amigoCapturado) {
            paragrafo.addEventListener('click', function () {
                console.log(amigoCapturado);
                excluirAmigo(amigoCapturado);
            });
        })(amigo);

        lista.appendChild(paragrafo);
    }
}

function excluirAmigo(pessoa) {
    console.log(pessoa);
    let index = amigosCadastrados.indexOf(pessoa);

    if (index !== -1) {
        amigosCadastrados.splice(index, 1);
    }

    atualizarLista();
    limparNomesSorteados();
}

function limparInputNomes() {
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (amigosCadastrados.length < 4) {
        alert('O minimo de participantes são 4 pessoas');
        return;
    }
    limparNomesSorteados();
    embaralha(amigosCadastrados);
    for (let i = 0; i < amigosCadastrados.length; i++) {
        if (i == amigosCadastrados.length - 1) {
            mostrarPessoaSorteada(amigosCadastrados[i], amigosCadastrados[0]);
        } else {
            mostrarPessoaSorteada(amigosCadastrados[i], amigosCadastrados[i + 1]);
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function mostrarPessoaSorteada(pessoaInicial, pessoaSorteada) {
    let paragrafo = document.getElementById('lista-sorteio');

    paragrafo.innerHTML += `${pessoaInicial} -> ${pessoaSorteada}<br>`;
}

function reiniciar() {
    limparInputNomes()
    limparNomesIncluidos()
    limparNomesSorteados()
    amigosCadastrados = [];
}

function limparNomesIncluidos() {
    document.getElementById('lista-amigos').textContent = '';
}

function limparNomesSorteados() {
    document.getElementById('lista-sorteio').innerHTML = '';
}