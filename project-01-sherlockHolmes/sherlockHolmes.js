let contador = 0;

function quest01(){
  let pergunta = prompt('\nVocê telefonou para a vítima?').toUpperCase();
  if (pergunta === 'SIM'){
    contador = contador + 1;
  } else if (pergunta === 'NÃO'){
    contador = contador + 0;
  } else {
    console.log('\nResposta inválida!');
    quest01();
  }
}

function quest02(){
  let pergunta = prompt('\nVocê esteve no local do crime?').toUpperCase();
  if (pergunta === 'SIM'){
    contador = contador + 1;
  } else if (pergunta === 'NÃO'){
    contador = contador + 0;
  } else {
    console.log('\nResposta inválida!');
    quest02();
  }
}

function quest03(){
  let pergunta = prompt('\nVocê mora perto da vítima?').toUpperCase();
  if (pergunta === 'SIM'){
    contador = contador + 1;
  } else if (pergunta === 'NÃO'){
    contador = contador + 0;
  } else {
    console.log('\nResposta inválida!');
    quest03();
  }
}

function quest04(){
  let pergunta = prompt('\nVocê devia para a vítima?').toUpperCase();
  if (pergunta === 'SIM'){
    contador = contador + 1;
  } else if (pergunta === 'NÃO'){
    contador = contador + 0;
  } else {
    console.log('\nResposta inválida!');
    quest04();
  }
}

function quest05(){
  let pergunta = prompt('\nVocê já trabalhou com a vítima?').toUpperCase();
  if (pergunta === 'SIM'){
    contador = contador + 1;
  } else if (pergunta === 'NÃO'){
    contador = contador + 0;
  } else {
    console.log('\nResposta inválida!');
    quest05();
  }
}

const nome = prompt('Por favor digite seu nome: ');
console.log(`\n${nome}, responda atentamente as questões a seguir com sim ou não.`);

quest01();
quest02();
quest03();
quest04();
quest05();

if (contador === 5){
  console.log(`\n${nome}, você é o assassino!`);
} else if (contador === 3 || contador === 4){
  console.log(`\n${nome}, você é cúmplice do assassino!`);
} else if (contador === 2){
  console.log(`\n${nome}, você é suspeito (a)!`);
} else {
  console.log(`\n${nome}, você é inocente!`);
}