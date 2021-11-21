const prompt = require('prompt-sync')();

var escolhaFinal = "SIM";
var sleep = require('sleep');

console.log('= = = = = = = = = = = = = = = = = = = = = = = = = =');
console.log('= = = = = = = = = = = = = = = = = = = = = = = = = =');
console.log('= = = = = = = = = =  JOKENPÔ! = = = = = = = = = = =');
console.log('= = = = = = = = = = = = = = = = = = = = = = = = = =');
console.log('= = = = = = = = = = = = = = = = = = = = = = = = = =');
console.log();

while (escolhaFinal == "SIM"){
  let vitoriaJogador = 0;
  let vitoriaMaquina = 0;

  let rodadas = +prompt('Digite o número de rodadas que você deseja jogar: ');

  while (isNaN(rodadas) == true){
    console.clear();
    rodadas = +prompt('Valor inválido! Por favor digite o número de rodadas que você deseja jogar: ');
  }

  console.clear();

  for (let i = 0; i < rodadas; i++){
    let opcaoJogador = prompt("Digite Pedra, Papel ou Tesoura: ").toUpperCase();

    while (opcaoJogador != "PEDRA" && opcaoJogador != "PAPEL" && opcaoJogador != "TESOURA") {
      opcaoJogador = prompt("\nOpção inválida! Por favor, digite Pedra, Papel ou Tesoura: ").toUpperCase();
    }

    var listaEscolha = ['PEDRA', 'PAPEL', 'TESOURA'];  
    let entradaMaquina = Math.floor(Math.random() * 3);
    var opcaoMaquina = listaEscolha[entradaMaquina]; 

    if ((opcaoJogador == "PEDRA" && opcaoMaquina == "TESOURA") || (opcaoJogador == "PAPEL" && opcaoMaquina == "PEDRA") || (opcaoJogador == "TESOURA" && opcaoMaquina == "PAPEL")) {
      console.log(`\nVocê escolheu ${opcaoJogador} e eu escolhi ${opcaoMaquina}. Você ganhou!\n`);
      vitoriaJogador++;
    } else if ((opcaoMaquina == "PEDRA" && opcaoJogador == "TESOURA") || (opcaoMaquina == "PAPEL" && opcaoJogador == "PEDRA") || (opcaoMaquina == "TESOURA" && opcaoJogador == "PAPEL")) {
        console.log(`\nVocê escolheu ${opcaoJogador} e eu escolhi ${opcaoMaquina}. Eu ganhei!\n`);
        vitoriaMaquina++;
    } else if (opcaoJogador == opcaoMaquina) {
        console.log(`\nVocê escolheu ${opcaoJogador} e eu escolhi ${opcaoMaquina}. Empatamos!\n`);
    }
  }

  sleep.sleep(2);
  console.clear();

  if (vitoriaJogador > vitoriaMaquina){
    console.log(`Você ganhou ${vitoriaJogador} vezes e eu ganhei ${vitoriaMaquina} vezes. Parabéns você é o grande vencedor!`);
  } else if (vitoriaJogador < vitoriaMaquina){
      console.log(`Você ganhou ${vitoriaJogador} vezes e eu ganhei ${vitoriaMaquina} vezes. Eu sou o grande vencedor!`);
  } else {
      console.log(`Você ganhou ${vitoriaJogador} vezes e eu ganhei ${vitoriaMaquina} vezes. Nós empatamos!`);
  }

  escolhaFinal = prompt('\n\nDigite SIM se você deseja jogar novamente:').toUpperCase();
  console.clear();
}

console.log('Até a próxima!');