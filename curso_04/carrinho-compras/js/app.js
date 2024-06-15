let total = document.getElementById('valor-total');
let produtosNoCarrinho = document.getElementsByClassName('carrinho__produtos')[0];

function adicionar() {
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade == 0 || quantidade == undefined || quantidade == null) {
        alert('É necessário digitar a quantidade do produto');
        return;
    }
    let produto = document.getElementById('produto').value;
    let separarNome = produto.split(" - ");
    let nomeProduto = separarNome[0];
    let valorProduto = separarNome[1];
    let valorProdutoNumber = parseInt(valorProduto.replace('R$', ''));

    somarProdutoNoTotal(quantidade, valorProdutoNumber);
    adicionarProdutoNoCarrinho(quantidade, nomeProduto, valorProdutoNumber);
}

function somarProdutoNoTotal(quantidade, valorProdutoNumber) {
    let totalProduto = quantidade * valorProdutoNumber;
    let totalFinal = (parseInt(total.innerHTML.replace('R$', ''))) + totalProduto;
    total.innerHTML = `R$${totalFinal}`;
}

function adicionarProdutoNoCarrinho(quantidade, nomeProduto, valorProdutoNumber) {
    let totalProduto = quantidade * valorProdutoNumber;
    let section = document.createElement('section');
    section.className = 'carrinho__produtos__produto';

    let span1x = document.createElement("span");
    span1x.className = "texto-azul";
    span1x.textContent = `${quantidade}x`;

    let textoCelular = document.createTextNode(` ${nomeProduto} `);

    let spanValor = document.createElement("span");
    spanValor.className = "texto-azul";
    spanValor.textContent = `R$${totalProduto}`;

    section.appendChild(span1x);
    section.appendChild(textoCelular);
    section.appendChild(spanValor);

    produtosNoCarrinho.appendChild(section);
}

function limpar() {
    total.innerHTML = 'R$0';
    let sections = produtosNoCarrinho.querySelectorAll('section');
    sections.forEach(function (section) {
        produtosNoCarrinho.removeChild(section);
    });
    document.getElementById('quantidade').value = '';
}