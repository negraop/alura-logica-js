function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    const CLASSE_ALUGADO_IMAGEM = 'dashboard__item__img--rented';
    const CLASSE_ALUGADO_BOTAO = 'dashboard__item__button--return';

    if (imagem.classList.contains(CLASSE_ALUGADO_IMAGEM)) {
        imagem.classList.remove(CLASSE_ALUGADO_IMAGEM);
        botao.classList.remove(CLASSE_ALUGADO_BOTAO);
        botao.innerHTML = 'Alugar';
    } else {
        imagem.classList.add(CLASSE_ALUGADO_IMAGEM);
        botao.classList.add(CLASSE_ALUGADO_BOTAO);
        botao.innerHTML = 'Devolver';
    }
}