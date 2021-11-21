const prompt = require('prompt-sync')();

var jogo = [];
var rodadas = [];

const numRodadas = +prompt('Digite o número de rodadas que você quer jogar:');
const numJogadores = +prompt('Digite o número de jogadores:');

// Aqui crio um objeto para cada jogador contendo o nome de cada um deles
for (let i = 0; i < numJogadores; i++) {
    let jogador ={};
    jogador.nome = prompt(`Digite o nome do ${i+1}º jogador:`);
    jogo.push(jogador);
}

// Aqui crio uma lista para cada rodada com cada um dos nomes dos jogadores
for (let x = 0; x < numRodadas; x++) {
    rodadas.push(jogo);
}

// Aqui alimento cada objeto em cada rodada com os números sorteados
for (let y = 0; y < numRodadas; y++) {
    console.log(`Rodada ${y+1}`);

    for (let i = 0; i < numJogadores; i++) {
        jogo[i].numero = Math.floor(Math.random() * 6 + 1);
    }
    rodadas[y].push(jogo);
    console.log(rodadas[y]);
}


console.log();
console.log(`RESULTADO DAS ${numRodadas} RODADAS`);
console.log(rodadas);
