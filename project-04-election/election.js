const prompt = require('prompt-sync')();

var continuaVotacao = "SIM";
var candidatos = ["Robin", "Mutano", "Cyborg", "Voto em branco"];
var mutano = 0;
var robin = 0;
var cyborg = 0;
var votoBranco = 0;
var votoNulo = 0;

function autorizaVoto(anoNascimento) {
    
    let data = new Date();
    let ano = data.getFullYear();

    if (anoNascimento >= (ano - 70) && anoNascimento <= (ano - 18)) {
        return "Obrigatório";
    } else if (anoNascimento > (ano - 16)) {
        return "Negado";
    } else {
        return "Opcional";
    }
}

function votacao(autorizacao, voto) {

    if (autorizacao == "Obrigatório" || autorizacao == "Opcional"){
        if (voto == candidatos[0]) {
            robin++;
        } else if (voto == candidatos[1]) {
            mutano++;
        } else if (voto == candidatos[2]) {
            cyborg++;
        } else if (voto == candidatos[3]) {
            votoBranco++;
        }

    } else {
        console.log("\nSeu voto será anulado pois você não pode votar!");
        votoNulo++;
    }

}

function exibirResultados() {
    let vencedor;
    let empate = false;

    if (robin > mutano && robin > cyborg) {
        vencedor = candidatos[0];
    } else if (mutano > robin && mutano > cyborg) {
        vencedor = candidatos[1];
    } else if (cyborg > robin && cyborg > mutano) {
        vencedor = candidatos[2];
    } else {
        empate = true;
    }
    
    console.clear();

    console.log(`
    APURAÇÃO DOS VOTOS:
    
    Robin: ${robin} votos
    Mutano: ${mutano} votos
    Cyborg: ${cyborg} votos
    
    Votos em branco: ${votoBranco}
    Votos nulos: ${votoNulo}`);

    if (empate == true) {
        console.log(`\nVotação empatada! Não houve vencedor.\n`);
    } else {
        console.log(`\nO vencedor da eleição é o candidato ${vencedor}\n`);
    }
} 

while (continuaVotacao == "SIM") {

    console.log();
    var anoEleitor = prompt("Para votar, digite o seu ano de nascimento com 4 digitos: ");

    console.log(`
    Os candidatos são:

    Robin = 1
    Mutano = 2
    Cyborg = 3
    `);

    var votoUsuario = +prompt(`Digite o número do seu candidato ou digite 4 para votar em branco: `)
    
    while (votoUsuario < 1 || votoUsuario > 4) {
        console.log();
        votoUsuario = +prompt(`Número inválido! Digite o número do seu candidato ou digite 4 para votar em branco: `);
    }

    if (votoUsuario == 1 || votoUsuario == 2 || votoUsuario == 3) {
        console.log(`\nVocê votou no candidato ${candidatos[votoUsuario-1]}`);
    } else if (votoUsuario == 4) {
        console.log(`\nVocê votou em branco.`);
    }
    
    votacao(autorizaVoto(anoEleitor), candidatos[votoUsuario-1]);

    console.log();
    continuaVotacao = prompt("Digite SIM para inserir um novo voto: ").toUpperCase();
    
}

exibirResultados();