alert("Boas Vindas ao Jogo do Número Secreto!");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt("Escolha um número entre 1 e 10");

// se chute for igual ao numeroSecreto
if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou =(');
}