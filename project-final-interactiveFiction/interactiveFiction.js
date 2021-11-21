const prompt = require('prompt-sync')();

class Personagem {
    constructor(fome, sono, furia, hora) {
        this.fome = fome,
        this.sono = sono,
        this.furia = furia,
        this.hora = hora
    }
    
    aumentaFuria(furiaNum) {
        this.furia += furiaNum;
        if (this.furia > 100) {
            this.furia = 100
        }
    }

    aumentaHora(tempo) {
        this.hora += tempo;
    }

    mostraHora() {
        console.log(`
        São ${this.hora} horas`)
    }

    ativaIra() {
        if (this.furia >= 100) {
            console.log(`
            SUA FURIA ATINGIU 100%! Você surtou e destruiu tudo ao seu redor. Você não terá furia suficente para derrotar o Titã Triturador de Ossos! 
            
            GAME OVER`);
            
            return true;
        }
    }

    statusHeroi() {
        console.log(`
        FOME: ${this.fome}
        SONO: ${this.sono}
        NÍVEL DE FURIA: ${this.furia} %
        `);
    }
}

class Monstro extends Personagem {
    constructor(fome, sono, furia, hora, nome) {
        super(fome, sono, furia, hora);

        this.nome = nome
    }
}

function enfrentaMonstro(inimigo) {
    console.log(`
       O maior, o mais temido, o esmagador, o mega, o gigante, o colossal ${inimigo} aparece!
    
       O ódio do pinscher radioativo toma conta de você e SUA FURIA ATINGE 100%! 
    
       Com os golpes mais mortiferos treinados e retreinados em anos de partidas incansáveis de video game você DESTRÓI O ${inimigo}!
    
       Parabéns! Mais uma vez sua furia salvou a humanidade!
       `);
}


let monstro = new Monstro(true, false, 100, 19, "Titã Triturador de Ossos");
let superNez = new Personagem(true, true, 0, 8);

while (true) {
    console.log(`
    Você acorda e está pronto para viver mais um dia normal sendo o maior super-herói de todos os tempos. 
    Sim, você é o Super Nez. Após ser mordido por um pinscher radioativo, você, um cara normal, se tornou quase 
    que uma bomba relógio. Sua fúria, que é contada de 0 a 100 % de acordo com as ações do seu dia, te torna capaz 
    de derrubar um exército quando atinge o seu ápice.

    Hoje às 19h você vai encontrar o seu arqui-inimigo, o Titã Triturador de Ossos, e precisará chegar até esse 
    momento com sua fúria em no máximo 99 %. Esse cara despertará aquele 1% que falta.

    Mas lembre-se, se você chegar a 100 % antes da hora, o Titã Triturador de Ossos será o seu fim!
    `);

    let estouPronto = prompt(`    Você está pronto para começar? Digite S ou N: `).toUpperCase();

    while (estouPronto != "S" && estouPronto != "N") {
        estouPronto = prompt("        Opção inválida! Você está pronto para começar? Digite S ou N: ").toUpperCase();
    }

    if (estouPronto == "N") {
        console.clear();
        console.log(`Que pena! Até a próxima.`);
        break;
    } else {
        console.clear();
    }

    superNez.mostraHora();
    superNez.statusHeroi();

    console.log(`
        Escolha uma das opções abaixo: 
        1 - Dormir mais um pouco
        2 - Fazer café da manhã
        3 - Tomar café na padaria da esquina
        4 - Pedir cafézão pelo Ifood
        0 - Sair do jogo
    `)

    let escolha = +prompt("        Digite a sua escolha: ");

    while (isNaN(escolha) == true || escolha < 0 || escolha > 4) {
        escolha = +prompt("        Opção inválida! Digite a sua escolha: ");
    }

    if (escolha == 1) {
        superNez.aumentaHora(2);
        superNez.aumentaFuria(10);
        superNez.sono = false;
        console.clear();
        console.log(`
        Você dormiu demais e já são ${superNez.hora} horas da manhã! Bem, pelo menos você acordou sem as olheiras que te fazem se sentir velho demais. Sua furia aumentou em 10%.
        `)
        superNez.statusHeroi();
    } else if (escolha == 2) {
        superNez.aumentaHora(2);
        superNez.aumentaFuria(20);
        superNez.sono = false;
        superNez.fome = false;
        console.clear();
        console.log(`
        A cafeteira parou de funcionar e a torradeira queimou seu pão! Você vai ter que comer a pizza gelada que está na geladeira a cinco dias. Su furia aumento em 20%!
        `)
        superNez.statusHeroi();
    } else if (escolha == 3) {
        superNez.aumentaHora(3);
        superNez.aumentaFuria(90);
        superNez.sono = false;
        console.clear();
        console.log(`
        Você ficou preso no elevador do prédio enquando saía para ir à padaria e só conseguiu ser resgatado às ${superNez.hora} horas. Sua furia aumentou em 90%!
        `)
        superNez.statusHeroi();

        console.log(`
        Escolha uma das opções abaixo: 
        1 - Voltar para o apartamento e comer aquela pizza gelada que está na geladeira a cinco dias
        2 - Ficar sem café da manhã, afinal, já é quase hora do almoço
        0 - Sair do jogo
        `)

        escolha = +prompt("        Digite a sua escolha: ");

        while (isNaN(escolha) == true || escolha < 0 || escolha > 2) {
            escolha = +prompt("        Opção inválida! Digite a sua escolha: ");
        }

        if (escolha == 1) {
            superNez.aumentaHora(1);
            superNez.fome = false;
            console.clear();
            console.log(`
            Não é exatamente o café digno de um herói, mas deve servir.
            `)
            superNez.statusHeroi();
        } else if (escolha == 2) {
            superNez.aumentaFuria(20);
            console.clear();
            console.log(`
            Essa não é a melhor opção para se iniciar um dia tranquilo. Sua furia aumentou em 20%!`)
            superNez.statusHeroi();
            superNez.ativaIra();
            if (superNez.ativaIra() == true) {
                break;
            }
        } else if (escolha == 0) {
            console.clear();
            console.log(`Que pena! Até a próxima.`);
            break;
        }

    } else if (escolha == 4) {
        superNez.aumentaHora(2);
        superNez.aumentaFuria(70);
        superNez.sono = false;
        superNez.fome = false;
        console.clear();
        console.log(`
        Parece que o entregador do Ifood estava fugindo desesperadamente de um tiranossauro rex e seu pedido chegou totalmente revirado! 
        Suco de laranja derramado, ovos com bacon espalhados... É, deve dar para aproveitar algo. Sua furia aumentou em 70%!
        `)
        superNez.statusHeroi();
    } else if (escolha == 0) {
        console.clear();
        console.log(`Que pena! Até a próxima.`);
        break;
    }


    console.log(`
        Você está jogando uma partida de video-game enquanto pensa na luta de logo mais. É... O Titã Triturador de Ossos não perde por esperar! 
    `)
    
    superNez.fome = true;
    superNez.mostraHora();
    superNez.statusHeroi();

    console.log(`
        Após a manhã um pouco frustrante, são ${superNez.hora} horas e você sente seu estômago roncar. Escolha uma opção:
        
        1 - Pedir aquela feijuca no Ifood
        2 - Jogar só mais uma partidinha
        3 - Fazer um miojo
        4 - Cozinhar seu famoso espaguete com salsichas
        0 - Sair do jogo
    `)

    escolha = +prompt("        Digite a sua escolha: ");

    while (isNaN(escolha) == true || escolha < 0 || escolha > 4) {
        escolha = +prompt("        Opção inválida! Digite a sua escolha: ");
    }

    if (escolha == 1) {
        superNez.aumentaHora(2);
        superNez.aumentaFuria(20);
        superNez.fome = false;
        superNez.sono = true;
        console.clear();
        console.log(`
        A feijoada está maravilhosa! Porém, esse banquete digno de um herói te fez sentir muito sono. 
        Droga, acho que não foi a melhor opção. Sua furia aumentou em 20%!`);
        superNez.statusHeroi();
        superNez.ativaIra();
        if (superNez.ativaIra() == true) {
            break;
        }
    } else if (escolha == 2) {
        superNez.aumentaHora(2);
        superNez.aumentaFuria(20);
        superNez.fome = true;
        console.clear();
        console.log(`
        Um herói merece curtir seu game preferido antes de uma luta perigosa. Mas você não consegue 
        completar de jeito nenhum a quest atual do jogo. E além disso, sua fome só aumentou! 
        Sua furia aumentou em 20%!`);
        superNez.ativaIra();
        if (superNez.ativaIra() == true) {
            break;
        }

        console.log(`
        Escolha uma das opções abaixo: 
        1 - Fazer um miojo para matar logo o que está te matando
        2 - Pedir aquela feijuca no Ifood
        0 - Sair do jogo
        `)

        escolha = +prompt("        Digite a sua escolha: ");

        while (isNaN(escolha) == true || escolha < 0 || escolha > 2) {
            escolha = +prompt("        Opção inválida! Digite a sua escolha: ");
        }

        if (escolha == 1) {
            superNez.aumentaFuria(10);
            superNez.fome = false;
            console.clear();
            console.log (`
            Miojo nunca é uma má opção! Porém, você sabe: Ele nunca fica pronto em 3 minutos! Sua furia aumentou em 10%.`);
            superNez.statusHeroi();
            superNez.ativaIra();
            if (superNez.ativaIra() == true) {
                break;
            }
        } else if (escolha == 2) {
            superNez.aumentaFuria(20);
            superNez.fome = false;
            superNez.sono = true;
            console.clear();
            console.log(`
            A feijoada está maravilhosa! Porém, esse banquete digno de um herói te fez sentir muito sono. 
            Droga, acho que não foi a melhor opção. Sua furia aumentou em 20%!`);
            superNez.statusHeroi();
            superNez.ativaIra();
            if (superNez.ativaIra() == true) {
                break;
            }
        } else if (escolha == 0) {
            console.clear();
            console.log(`Que pena! Até a próxima.`);
            break;
        }

    } else if (escolha == 3) {
        superNez.aumentaHora(2);
        superNez.aumentaFuria(10);
        superNez.fome = false;
        console.clear();
        console.log (`
        Miojo nunca é uma má opção! Porém, você sabe: Ele nunca fica pronto em 3 minutos! Sua furia aumentou em 10%.`);
        superNez.statusHeroi();
        superNez.ativaIra();
        if (superNez.ativaIra() == true) {
            break;
        }
    } else if (escolha == 4) {
        superNez.aumentaHora(2);
        superNez.fome = false;
        console.clear();
        console.log (`
        Espaguete com salsichas é definitivamente a melhor opção para um herói! Você se sente saciado e pronto para qualquer batalha`);
        superNez.statusHeroi();
        superNez.ativaIra();
        if (superNez.ativaIra() == true) {
            break;
        }
    } else if (escolha == 0) {
        console.clear();
        console.log(`Que pena! Até a próxima.`);
        break;
    }


    console.log(`
    Ao assistir o noticiário das 16h você descobre que o Titã Triturador de Ossos está se aproximando da cidade. 
    Você está tranquilo porque sabe que a vitória é garantida. Mas será mesmo?`)

    superNez.hora = 16;
    superNez.mostraHora();
    superNez.statusHeroi();

    console.log(`
        O que você fará enquanto aguarda a chegada do seu inimigo?

        1 – Calibrar suas armas e afiar sua adaga
        2 – Jogar vídeo game para treinar sua nova técnica de investida
        3 – Tirar uma soneca
        4 – Tomar um banho, afinal, o crime não suporta o doce cheiro da vitória
        0 - Sair do jogo
    `)

    escolha = +prompt("        Digite a sua escolha: ");

    while (isNaN(escolha) == true || escolha < 0 || escolha > 4) {
        escolha = +prompt("        Opção inválida! Digite a sua escolha: ");
    }

    if (escolha == 1) {
        superNez.aumentaHora(3);
        superNez.aumentaFuria(90);
        console.clear();
        console.log(`
        Enquanto preparava suas armas você se lembrou de que não usa armas em suas lutas. Voce é a própira arma! 
        Todo esse tempo perdido... Sua furia aumentou em 90%!`)
        superNez.statusHeroi();
        superNez.ativaIra();
        if (superNez.ativaIra() == true) {
            break;
        }
    } else if (escolha == 2) {
        superNez.aumentaHora(3);
        console.clear();
        console.log(`
        Você se distrai e por um tempo se esquece completamente do desafio da vida real que te espera logo logo. De repente...`);
        enfrentaMonstro(monstro.nome);
        break;
    } else if (escolha == 3) {
        superNez.aumentaHora(3);
        console.clear();
        console.log(`
        Nada melhor do que uma soneca pré-luta. Você tem sono pesado e dorme até às 19 horas. De repente...`);
        enfrentaMonstro(monstro.nome);
        break;
    } else if (escolha == 4) {
        superNez.aumentaHora(3);
        console.clear();
        console.log(`
        Você é o maior herói de todos os tempos e claro que merece um banho demorado. Enquanto se ensaboa e canta o 
        último lançamento do Abba, um grande barulho te surpreende. De repente...`);
        enfrentaMonstro(monstro.nome);
        break;
    } else if (escolha == 0) {
        console.clear();
        console.log(`Que pena! Até a próxima.`);
        break;
    }
}
