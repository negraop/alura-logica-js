alert("Boas Vindas ao Jogo do Número Secreto!");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 0

// enquanto chute for diferente do numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 10");
    tentativas++;

    // se chute for igual ao numeroSecreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}

