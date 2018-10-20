let controle;
let pontos = [{x:80,y:600, ocupado:false},{x:2000,y:500, ocupado:false},{x:100,y:700, ocupado:false},{x:200,y:700, ocupado:false},{x:200,y:700, ocupado:false}];
let contadorFase1 = 0;
let sapos;
let c,tt;
let terminouUm = false;
let objetosCenario;
let botaoPauseUm, botaoRevisaoUm;
let quantidade = 0;
let escore1 = 0;
let exibeEscore;
function atualizaJogo1(){
  if(quantidade<15){
    if(contadorFase1<20)
      contadorFase1++
    else{
      contadorFase1 = 0;
      createSapo();
    }
    for (let i=0; i<sapos.length; i++){
      movimentacao(sapos.getAt(i));
    }
  }
  else{
    terminarJogoUm();
  }
}
function createSapo(){
  let numero = randomizador(controle);
  let localizacao = game.rnd.integerInRange(0,5);
  let sprite;
  switch(numero){
    case 0:
      if(pontos[localizacao].ocupado==false){
        sprite = game.add.sprite(pontos[localizacao].x,pontos[localizacao].y,"girinos",0);
        sprite.width = 182;
        sprite.height = 158;
        pontos[localizacao].ocupado = true;
        sprite.numero = numero;
        sprite.lifespan = 2000;
        sprite.contador = 0;
        sprite.localizacao = localizacao;
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(checaCor,this);
        sprite.events.onKilled.add(desocupaLocal,this);
        sapos.add(sprite);
      }
    break;
    case 1:
      if(pontos[localizacao].ocupado==false){
        sprite = game.add.sprite(pontos[localizacao].x,pontos[localizacao].y,"girinos",1);
        sprite.width = 182;
        sprite.height = 158;
        pontos[localizacao].ocupado = true;
        sprite.numero = numero;
        sprite.lifespan = 2000;
        sprite.contador = 0;
        sprite.localizacao = localizacao;
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(checaCor,this);
        sprite.events.onKilled.add(desocupaLocal,this);
        sapos.add(sprite);
      }
    break;
    case 2:
      if(pontos[localizacao].ocupado==false){
        sprite = game.add.sprite(pontos[localizacao].x,pontos[localizacao].y,"girinos",2);
        sprite.width = 182;
        sprite.height = 158;
        pontos[localizacao].ocupado = true;
        sprite.numero = numero;
        sprite.lifespan = 2000;
        sprite.contador = 0;
        sprite.localizacao = localizacao;
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(checaCor,this);
        sprite.events.onKilled.add(desocupaLocal,this);
        sapos.add(sprite);
      }
    break;
    case 3:
      if(pontos[localizacao].ocupado==false){
        sprite = game.add.sprite(pontos[localizacao].x,pontos[localizacao].y,"girinos",3);
        sprite.width = 182;
        sprite.height = 158;
        pontos[localizacao].ocupado = true;
        sprite.numero = numero;
        sprite.lifespan = 2000;
        sprite.contador = 0;
        sprite.localizacao = localizacao;
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(checaCor,this);
        sprite.events.onKilled.add(desocupaLocal,this);
        sapos.add(sprite);
      }
    break;
    case 4:
      if(pontos[localizacao].ocupado==false){
        sprite = game.add.sprite(pontos[localizacao].x,pontos[localizacao].y,"girinos",4);
        sprite.width = 182;
        sprite.height = 158;
        pontos[localizacao].ocupado = true;
        sprite.numero = numero;
        sprite.lifespan =2000;
        sprite.contador = 0;
        sprite.localizacao = localizacao;
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(checaCor,this);
        sprite.events.onKilled.add(desocupaLocal,this);
        sapos.add(sprite);
      }
    break;
    case 5:
      if(pontos[localizacao].ocupado==false){
        sprite = game.add.sprite(pontos[localizacao].x,pontos[localizacao].y,"girinos",5);
        sprite.width = 182;
        sprite.height = 158;
        pontos[localizacao].ocupado = true;
        sprite.numero = numero;
        sprite.lifespan = 2000;
        sprite.contador = 0;
        sprite.localizacao = localizacao;
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(checaCor,this);
        sprite.events.onKilled.add(desocupaLocal,this);
        sapos.add(sprite);
      }
    break;
    case 6:
      if(pontos[localizacao].ocupado==false){
        sprite = game.add.sprite(pontos[localizacao].x,pontos[localizacao].y,"girinos",6);
        sprite.width = 182;
        sprite.height = 158;
        pontos[localizacao].ocupado = true;
        sprite.numero = numero;
        sprite.lifespan = 2000;
        sprite.contador = 0;
        sprite.localizacao = localizacao;
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(checaCor,this);
        sprite.events.onKilled.add(desocupaLocal,this);
        sapos.add(sprite);
      }
    break;
    case 7:
      if(pontos[localizacao].ocupado==false){
        sprite = game.add.sprite(pontos[localizacao].x,pontos[localizacao].y,"girinos",7);
        sprite.width = 182;
        sprite.height = 158;
        pontos[localizacao].ocupado = true;
        sprite.numero = numero;
        sprite.lifespan = 2000;
        sprite.contador = 0;
        sprite.localizacao = localizacao;
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(checaCor,this);
        sprite.events.onKilled.add(desocupaLocal,this);
        sapos.add(sprite);
      }
    break;
    case 8:
      if(pontos[localizacao].ocupado==false){
        sprite = game.add.sprite(pontos[localizacao].x,pontos[localizacao].y,"girinos",8);
        sprite.width = 182;
        sprite.height = 158;
        pontos[localizacao].ocupado = true;
        sprite.numero = numero;
        sprite.lifespan = 2000;
        sprite.contador = 0;
        sprite.localizacao = localizacao;
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(checaCor,this);
        sprite.events.onKilled.add(desocupaLocal,this);
        sapos.add(sprite);
      }
    break;
    case 9:
      if(pontos[localizacao].ocupado==false){
        sprite = game.add.sprite(pontos[localizacao].x,pontos[localizacao].y,"girinos",9);
        sprite.width = 182;
        sprite.height = 158;
        pontos[localizacao].ocupado = true;
        sprite.numero = numero;
        sprite.lifespan = 2000;
        sprite.contador = 0;
        sprite.localizacao = localizacao;
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(checaCor,this);
        sprite.events.onKilled.add(desocupaLocal,this);
        sapos.add(sprite);
      }
    break;
    case 10:
      if(pontos[localizacao].ocupado==false){
        sprite = game.add.sprite(pontos[localizacao].x,pontos[localizacao].y,"girinos",10);
        sprite.width = 182;
        sprite.height = 158;
        pontos[localizacao].ocupado = true;
        sprite.numero = numero;
        sprite.lifespan = 2000;
        sprite.contador = 0;
        sprite.localizacao = localizacao;
        sprite.inputEnabled = true;
        sprite.events.onInputDown.add(checaCor,this);
        sprite.events.onKilled.add(desocupaLocal,this);
        sapos.add(sprite);
      }
    break;
  }
}


function checaCor(sprite){
  if(sprite.numero == controle){
    sprite.kill();
    quantidade++;
    controle = game.rnd.integerInRange(0,10);
    c.setText(exibeCor());
    escore1 += 100;
    atualizaPontos1();
  }
  else{
    if(escore1>49){
      escore1-=50;
    }
  atualizaPontos1();
  }
}

function movimentacao(sprite){
  sprite.contador++;
  switch(sprite.localizacao){
    case 0:
      if(sprite.contador<40){
        sprite.x +=2;
        sprite.y -=1;
      }
      else{
        sprite.x -=2;
        sprite.y +=1;
      }
    break;
    case 1:
      if(sprite.contador<50){
        sprite.x +=2;
        sprite.y -=1;
      }
      else{
        sprite.x -=2;
        sprite.y +=1;
      }
    break;
    case 2:
      if(sprite.contador<30){
        sprite.y -=1;
      }
      else{
        sprite.y +=1;
      }
    break;
    case 3:
      if(sprite.contador<50){
        sprite.x -=1;
        sprite.y -=1;
      }
      else{
        sprite.x +=1;
        sprite.y +=1;
      }
    break;
    case 4:
      if(sprite.contador<50){
        sprite.x +=1;
        sprite.y +=1;
      }
      else{
        sprite.x -=1;
        sprite.y -=1;
      }
    break;
    case 5:
      if(sprite.contador<50){
        sprite.y -=1;
      }
      else{
        sprite.y +=1;
      }
    break;
  }
}

function exibeCor(){
  let cor = "";
  switch(controle){
    case 0:
      cor = "blua";
    break;
    case 1:
      cor = "flava";
    break;
    case 2:
      cor = "verda";
    break;
    case 3:
      cor = "ruĜa";
    break;
    case 4:
      cor = "purpura";
    break;
    case 5:
      cor = "rozkolora";
    break;
    case 6:
      cor = "nigra";
    break;
    case 7:
      cor = "bruna";
    break;
    case 8:
      cor = "oranĝo";
    break;
    case 9:
      cor = "griza";
    break;
    case 10:
      cor = "blanka";
    break;

  }
  return cor;
}
function desocupaLocal(sprite){
  pontos[sprite.localizacao].ocupado = false;
}

function iniciaPuzzleUm(){
  interfaceAtual.removeAll(true);
  estaNoJogo = true;
  pontos = [{x:100,y:250, ocupado:false},{x:160,y:650, ocupado:false},{x:800,y:450, ocupado:false},{x:360,y:300, ocupado:false},{x:1150,y:780, ocupado:false},{x:1500,y:380, ocupado:false}];
  verificadorVermelho = false, verificadorAmarelo = false, verificadorAzul = false, verificadorVerde = false;
  terminouUm = false;
  contadorFase1 = 0;
  quantidade=0;
  let imageCenario = game.add.image(0,0,"cenariopuzzle01");
  imageCenario.width = 1920;
  imageCenario.height = 1080;
  interfaceAtual.add(imageCenario);
  controle = 4;
  sapos = game.add.group();
  objetosCenario = game.add.group();
  let cortina = game.add.image(0,100,"moveis",0);
  let planta = game.add.image(80,680,"moveis",3);
  planta.width = 207;
  planta.height = 272;
  let mesinha = game.add.image(220,880,"moveis",2);
  mesinha.width = 506;
  mesinha.height = 184;
  let tv = game.add.image(690,520,"moveis",6);
  tv.width = 392;
  tv.height = 427;
  let poltrona = game.add.image(1060,650,"moveis",4);
  poltrona.width = 227;
  poltrona.height = 383;
  let quadro = game.add.image(1030,200,"moveis",5);
  quadro.width = 342;
  quadro.height = 334;
  let estante = game.add.image(1380,450,"moveis",1);
  estante.width = 358;
  estante.height = 516;
  objetosCenario.add(quadro);
  objetosCenario.add(cortina);
  objetosCenario.add(estante);
  objetosCenario.add(planta);
  objetosCenario.add(tv);
  objetosCenario.add(poltrona);
  objetosCenario.add(mesinha);
  tt = game.add.text(900,100,"Cor atual");
  tt.font = "Luckiest Guy";
  tt.fill = "white";
  tt.stroke = "black";
  tt.strokeThickness = 10;
  tt.fontSize = 40+fatorFonte;
  c = game.add.text(900,200,"purpura");
  c.font = "Luckiest Guy";
  c.fill = "black";
  c.strokeThickness = 10;
  c.stroke = "white";
  c.fontSize = 40+fatorFonte;
  controle = game.rnd.integerInRange(0,10);
  c.setText(exibeCor());
  exibeEscore = game.add.text(1200+fatorFonte*10,50,"Pontos: "+escore1);
  exibeEscore.font = "Luckiest Guy";
  exibeEscore.fontSize = 30+fatorFonte;
  interfaceAtual.add(sapos);
  interfaceAtual.add(objetosCenario);
  interfaceAtual.add(tt);
  interfaceAtual.add(c);
  interfaceAtual.add(exibeEscore);
  controladorAtt = 1;
  menuPersistente();
  botaoRevisaoUm = game.add.button(1770,100,"botoes",popRevisao,this,25,25,24);
  botaoRevisaoUm.width = 130;
  botaoRevisaoUm.height = 136;
  botaoPauseUm = game.add.button(1770,250,"botoes",pause,this,17,17,16);
  botaoPauseUm.width = 130;
  botaoPauseUm.height = 136;
  interfaceAtual.add(botaoRevisaoUm);
  interfaceAtual.add(botaoPauseUm);
  //Instruções
  instrucao();
}

function terminarJogoUm(){
  if (terminouUm == false){
    let botaoConclusao1,botaoConclusao2,janelaConclusao,retangulo;
    sapos.destroy();
    retangulo = game.add.graphics(0,0);
    retangulo.beginFill(0x000000,0.5);
    retangulo.drawRect(0,0,1920,1080);
    retangulo.endFill();
    janelaConclusao = game.add.image(300,100,"conclusao");
    botaoConclusao1 = game.add.button(600,700,"botoes",iniciaPuzzleUm,this,21,21,20);
    botaoConclusao1.width = 180;
    botaoConclusao1.height = 200;
    botaoConclusao2 = game.add.button(1200,700,"botoes",level1,this,3,3,2);
    botaoConclusao2.width = 180;
    botaoConclusao2.height = 200;
    let tituloParabens = game.add.text(670,160,"GRATULOJN");
    tituloParabens.font = "Luckiest Guy";
    tituloParabens.fontSize = 110 + fatorFonte;
    tituloParabens.stroke = "#f7931e";
    tituloParabens.fill = "#ffee73";
    tituloParabens.strokeThickness = 10;
    tituloParabens.fontWeight = 100;
    interfaceAtual.add(retangulo);
    interfaceAtual.add(janelaConclusao);
    interfaceAtual.add(botaoConclusao1);
    interfaceAtual.add(botaoConclusao2);
    interfaceAtual.add(tituloParabens);
    terminouUm = true;
    if(escore1>800){
      let estrela1 = game.add.sprite(500,100,"estrelas",0);
      estrela1.scale.x = 1.6;
      estrela1.scale.y = 1.6;
      let estrela2 = game.add.sprite(900,100,"estrelas",1);
      estrela2.scale.x = 1.6;
      estrela2.scale.y = 1.6;
      let estrela3 = game.add.sprite(1300,100,"estrelas",2);
      estrela3.scale.x = 1.6;
      estrela3.scale.y = 1.6;
      let tween1 = game.add.tween(estrela1).to({y:400},400,Phaser.Easing.Bounce.Out,true);
      let tween2 = game.add.tween(estrela2).to({y:400},400,Phaser.Easing.Bounce.Out,true,200);
      let tween3 = game.add.tween(estrela3).to({y:400},400,Phaser.Easing.Bounce.Out,true,400);
      interfaceAtual.add(estrela1);
      interfaceAtual.add(estrela2);
      interfaceAtual.add(estrela3);
    }
    else if(escore1>400 && escore1<800){
      let estrela1 = game.add.sprite(500,100,"estrelas",0);
      estrela1.scale.x = 1.6;
      estrela1.scale.y = 1.6;
      let estrela2 = game.add.sprite(900,100,"estrelas",1);
      estrela2.scale.x = 1.6;
      estrela2.scale.y = 1.6;
      let tween1 = game.add.tween(estrela1).to({y:400},400,Phaser.Easing.Bounce.Out,true);
      let tween2 = game.add.tween(estrela2).to({y:400},400,Phaser.Easing.Bounce.Out,true,200);
      interfaceAtual.add(estrela1);
      interfaceAtual.add(estrela2);
    }
    else{
      let estrela1 = game.add.sprite(500,100,"estrelas",0);
      estrela1.scale.x = 1.6;
      estrela1.scale.y = 1.6;
      game.add.tween(estrela1).to({y:400},600,Phaser.Easing.Bounce.Out,true);
      interfaceAtual.add(estrela1);
    }
  }

}

function atualizaPontos1(){
  exibeEscore.setText("Pontos: "+escore1);
}

function dialogoUm(){ // dialogo do primeiro puzzle
  let controlaTexto = 0;
  interfaceAtual.removeAll(true);
  let imgfase01 = game.add.image(0,0,"bgNarrativas");
  interfaceAtual.add(imgfase01);
  let vetorTexto = [{nome:"Lôlô", texto:"Então! O que vamos precisar para deixar tudo com cara de festa ?"},{nome:"Floppy",texto:"Talvez uma decoraçãozinha..."},{nome:"Lôlô", texto:"Com certeza! Mas o quê, exatamente?"},{nome:"Floppy",texto:"Balões e serpentina, bolo e confete, de muitas cores!"},{nome:"Lôlô",texto:"Isso mesmo! Com várias cores, vamos deixar a festinha muito mais bonita! Vamos aprender algumas delas…"},{nome:"Lolô",texto:"Em esperanto, o nome de muitas cores são muito parecidas com as de outras línguas.Como o inglês, por exemplo!"},{nome:"Lôlô",texto:"Isso acontece porque o esperanto tem palavras retiradas de outras línguas  muito utilizadas!"},{nome:"Lôlô",texto:"Como é que se diz azul em inglês?"},{nome:"Floppy",texto:"Essa é fácil, azul é blue!"},{nome:"Lolô",texto:"Correto! E laranja em inglês?"},{nome:"Floppy",texto:"Orange!"},{nome:"Lolô",texto:"Perfeito ! Em esperanto essas duas cores são bem parecidas com o inglês. Quando queremos dizer a cor do céu, dizemos que sua cor é BLUA. Quando queremos dizer a cor da laranja, dizemos que ela é ORAN^GO."},{nome:"Floppy",texto:"Até que é fácil!"},{nome:"Jiló",texto:"Isso é meio estranho..."},{nome:"Lôlô",texto:"No esperanto também tem uma cor que se parece muito com uma do português. Querem adivinhar qual é?"},{nome:"Floppy",texto:"Já sei! Roxo!"},{nome:"Lôlô",texto:"Não, não. E você, Jiló? Consegue adivinhar?"},{nome:"Jiló",texto:"Hummm… Não sei… Amarelo?"},{nome:"Lôlô",texto:"Errado também. Aqui vai uma dica! Essa cor existe muito na natureza, principalmente nas árvores e outras plantinhas."},{nome:"Floppy e Jiló",texto:"VERDE!"},{nome:"Lôlô",texto:"Muito bem! A cor verde em esperanto é muito parecida com como dizemos na nossa língua. Ela só muda o finalzinho da palavra. Tiramos o E final e trocamos por um A.Então pra dizer a cor de uma planta, é só falar que ela é VERDA!"},{nome:"Floppy",texto:"Show! É muito fácil lembrar essa."},{nome:"Jiló",texto:"Eu ainda acho melhor o português."},{nome:"Floppy",texto:"Jiló, deixa de ser chato!"},{nome:"Lôlô",texto:"Calma, vocês dois. Prestem atenção! Agora vamos aprender algumas cores que vão ser um pouco difíceis de lembrar."},{nome:"Lôlô",texto:"De que cor são as nuvens?"},{nome:"Jiló",texto:"São brancas, ué."},{nome:"Lôlô",texto:"E as nuvens de chuva?"},{nome:"Floppy",texto:"Ah, essas são cinza!"},{nome:"Lôlô",texto:"Sim ! Em esperanto, a cor das nuvens brancas é BLANKA e das nuvens cinza, GRIZA."},{nome:"Lôlô",texto:"Quando você quiser dizer a cor do tronco de uma árvore, é só dizer que sua cor é BRUNA. BRUNA significa marrom em esperanto!"},{nome:"Floppy",texto:"Lôlô, como eu digo que uma maçã é vermelha?"},{nome:"Lôlô",texto:"Ótima pergunta Floppy ! É só dizer que sua cor é RU^GA ! Ru^ga significa vermelho, assim como a maçã."},{nome:"Lôlô",texto:"Para dizer que o sol é amarelo, é só dizer que é FLAVA. Para uma flor rosa, se diz ROZKOLORA. Se a flor é roxa dizemos, PURPURA !"},{nome:"Jiló",texto:"E aquelas formiguinhas pretas?"},{nome:"Lôlô",texto:"Ah meu caro Jiló, preto em esperanto se chama NIGRA. A cor daquelas formiguinhas é nigra.Então, entenderam como se fala as cores?"},{nome:"Floppy e Jiló",texto:"SIM!"},{nome:"Floppy e Jiló",texto:"Algumas são difíceis de lembrar. Espero conseguir lembrar delas…"},{nome:"Mãe do Floppy",texto:"Meninos vocês viram o Luquinhas e as outras crianças?"},{nome:"Mãe do Floppy",texto:"Não."},{nome:"Mãe do Floppy",texto:"Eles estavam brincando pela casa e encontraram os baldes de tinta que usamos para colorir algumas coisas na festa. Agora eles estão cobertos de tinta e não querem tomar banho!"},{nome:"Mãe do Floppy", texto:"Desde cedo que eles estão fugindo de mim porque não querem ir se arrumar para a festa! Só querem saber de brincar! Agora vou ter que sair para resolver algumas coisas antes da festa e eu não sei mais o que fazer. Vocês podem me ajudar a pegar eles?"},{nome:"Lôlô",texto:" Claro tia, pode deixar que nós vamos pegar esses travessos!"},{nome:"Floppy e Jiló",texto:"SIM!"},{nome:"Mãe do Jiló",texto:"Muito obrigada meninos, vou ter que sair agora mas as crianças estarão esperando por vocês."},{nome:"Lôlô",texto:"Muito bem, a tia disse que os pequenos estão todos sujos de tinta e que precisamos pegá-los para que se ajeitem para a festa."}];
  let floppy = game.add.image(100,300,"floppy",0);
  interfaceAtual.add(floppy);
  let lolo = game.add.image(1000,300,"lolo",2);
  interfaceAtual.add(lolo);
  let jilo = game.add.image(500,300,"jilo",0);
  interfaceAtual.add(jilo);
  jilo.visible = false;
  let cores = game.add.image(1300,100,"coresDialogo1");
  cores.scale.x = 0.5;
  cores.scale.y = 0.5;
  cores.visible = false;
  interfaceAtual.add(cores);
  let balaoDialogo = game.add.image(400-fatorFonte*20,700,"dialogo");
  balaoDialogo.width = 1269+fatorFonte*20;
  balaoDialogo.height = 268;
  interfaceAtual.add(balaoDialogo);
  let nome = game.add.text(430-fatorFonte*20,750,vetorTexto[controlaTexto].nome);
  nome.font = "Luckiest Guy";
  nome.fontSize = 30 + fatorFonte;
  let dialogo = game.add.text(430-fatorFonte*20,800,vetorTexto[controlaTexto].texto);
  dialogo.wordWrap=true;
  dialogo.wordWrapWidth = 1200;
  dialogo.font = "Montserrat";
  dialogo.fontSize = 27 + fatorFonte;
  interfaceAtual.add(nome);
  interfaceAtual.add(dialogo);
  let botaoAvancar = game.add.button(1700,850,"botoes",avancar,this,3,3,2);
  botaoAvancar.width = 90;
  botaoAvancar.height = 100;
  let botaoRetroceder = game.add.button(280-fatorFonte*20,850,"botoes",retroceder,this,23,23,22);
  botaoRetroceder.width = 90;
  botaoRetroceder.height = 100;
  let irPuzzle1 = game.add.button(1700,700,"botoes",iniciaPuzzleUm,this,19,19,18);
  irPuzzle1.width = 90;
  irPuzzle1.height = 100;
  interfaceAtual.add(botaoAvancar);
  interfaceAtual.add(botaoRetroceder);
  interfaceAtual.add(irPuzzle1);
  function retroceder(){
    if(controlaTexto>0)
      controlaTexto--;
    nome.setText(vetorTexto[controlaTexto].nome);
    dialogo.setText(vetorTexto[controlaTexto].texto);
    checaSprite();
  }
  function avancar(){
    if (controlaTexto==vetorTexto.length-1)
      iniciaPuzzleUm();
    if (controlaTexto<vetorTexto.length-1)
      controlaTexto++;
    nome.setText(vetorTexto[controlaTexto].nome);
    dialogo.setText(vetorTexto[controlaTexto].texto);
    checaSprite();
  }
  function checaSprite(){ //expressões dos personagens
    switch(controlaTexto){
      case 0:
        floppy.frame = 0;
        lolo.frame = 2;
      break;
      case 1:
        jilo.visible = true;
        jilo.frame = 7;
      break;
      case 2:
        lolo.frame = 2;
      break;
      case 3:
        floppy.frame = 0;
        lolo.frame = 2;
      break;
      case 4:
        lolo.frame = 3;
        floppy.frame = 0;
      break;
      case 5:
        lolo.frame = 2;
      break;
      case 6:
        cores.visible = false;
        lolo.frame = 2;
      break;
      case 7:
        cores.visible = true;
        lolo.frame = 2;
      break;
      case 8:
        lolo.frame = 2;
        jilo.frame = 0;
      break;
      case 9:
        lolo.frame = 2;
        floppy.frame = 0;
      break;
      case 10:
        floppy.frame = 0;
      break;
      case 11:
        floppy.frame = 0;
      break;
      case 12:
        lolo.frame = 2;
        floppy.frame = 6;
        jilo.frame = 0;
      break;
      case 13:
        jilo.frame = 7;
      break;
      case 14:
        lolo.frame = 3;
      break;
      case 15:
        floppy.frame = 0;
      break;
      case 16:
        lolo.frame = 3;
        jilo.frame = 7;
      break;
      case 17:
        jilo.frame = 3;
      break;
      case 18:
        lolo.frame = 3;
        jilo.frame = 3;
      break;
      case 19:
        jilo.frame = 0;
        floppy.frame = 0;
      break;
      case 20:
        floppy.frame = 0;
        lolo.frame = 3;
      break;
      case 21:
        lolo.frame = 3;
      break;
      case 22:
        floppy.frame = 0;
        jilo.frame = 7;
      break;
      case 23:
        floppy.frame = 0;
        lolo.frame = 3;
      break;
      case 24:
        lolo.frame = 4;
      break;
      case 25:
        lolo.frame = 4;
        jilo.frame = 7;
      break;
      case 26:
        jilo.frame = 4;
      break;
      case 27:
        lolo.frame = 2;
      break;
      case 28:
        floppy.frame = 0;
      break;
      case 29:
        lolo.frame = 3;
      break;
      case 30:
        lolo.frame = 0;
      break;
      case 31:
        lolo.frame = 3;
      break;
      case 32:
        lolo.frame = 3;
        floppy.frame = 0;
      break;
      case 33:
        floppy.frame = 5;
      break;
      case 34:
        lolo.frame = 3;
      break;
      case 35:
        lolo.frame = 3;
        jilo.frame = 2;
      break;
      case 36:
        jilo.frame = 1;
        lolo.frame = 3;
      break;
      case 37:
        lolo.frame = 0;
        cores.visible = true;
      break;
      case 38:
        cores.visible = false;
        floppy.frame = 0;
        jilo.frame = 3;
      break;
      case 39:
        floppy.frame = 2;
      break;
      case 40:
        floppy.frame = 2;
        jilo.frame = 3;
      break;
      case 41:
        floppy.frame = 6;
        lolo.frame = 0;
        jilo.frame = 4;
      break;
      case 42:
      break;
      case 43:
        lolo.frame = 0;
        jilo.frame = 4;
      break;
      case 44:
        floppy.frame = 0;
        jilo.frame = 0;
      break;
      case 45:
        lolo.frame = 0;
      break;
      case 46:
        lolo.frame = 3;
      break;
    }
  }
  menuPersistente();
}
