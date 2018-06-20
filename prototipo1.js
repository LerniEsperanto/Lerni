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
      cor = "ruĝa";
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
  controle = game.rnd.integerInRange(0,3);
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
  c = game.add.text(900,200,exibeCor());
  c.font = "Luckiest Guy";
  exibeEscore = game.add.text(1200,50,"Pontos: "+escore1);
  exibeEscore.font = "Luckiest Guy";
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
    interfaceAtual.add(retangulo);
    interfaceAtual.add(janelaConclusao);
    interfaceAtual.add(botaoConclusao1);
    interfaceAtual.add(botaoConclusao2);
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
