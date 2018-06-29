let camada01,camada02,camada03,camada04,camada05;
let barbante,cadeira,chapeudefesta,confetes,copos,guardanapo,lona,pinceis,pratos,serpentina,talheres,tintas,bolsa2,fundo4;
let todos,folha;
let botaoRevisaoQuatro,botaoPauseQuatro;
let encerrou=false;
function iniciaPuzzle4(){
  interfaceAtual.removeAll(true);
  estaNoJogo = true;
  controladorAtt=4;
  fundo4 = game.add.image(0,0,"fundoPuzzle4");
  interfaceAtual.add(fundo4);
  camada01 = game.add.image(0,0,"camada01");
  interfaceAtual.add(camada01);
  serpentina = game.add.sprite(1540,200,"objetosPuzzle4",9);
  serpentina.inputEnabled = true;
  serpentina.input.enableDrag(false,true);
  serpentina.events.onInputDown.add(surgeSacola,this);
  serpentina.events.onInputUp.add(desapareceSacola,this);
  serpentina.arrastado = false;
  camada02 = game.add.image(0,0,"camada02");
  chapeudefesta = game.add.sprite(490,520,"objetosPuzzle4",2);
  chapeudefesta.inputEnabled = true;
  chapeudefesta.input.enableDrag(false,true);
  chapeudefesta.events.onInputDown.add(surgeSacola,this);
  chapeudefesta.events.onInputUp.add(desapareceSacola,this);
  chapeudefesta.arrastado = false;
  copos = game.add.sprite(600,340,"objetosPuzzle4",4);
  copos.inputEnabled = true;
  copos.input.enableDrag(false,true);
  copos.arrastado = false;
  copos.events.onInputDown.add(surgeSacola,this);
  copos.events.onInputUp.add(desapareceSacola,this)
  talheres = game.add.sprite(1250,150,"objetosPuzzle4",10);
  talheres.inputEnabled = true;
  talheres.input.enableDrag(false,true);
  talheres.arrastado = false;
  talheres.events.onInputDown.add(surgeSacola,this);
  talheres.events.onInputUp.add(desapareceSacola,this)
  camada03 = game.add.image(0,0,"camada03");
  confetes = game.add.sprite(1260,700,"objetosPuzzle4",3);
  confetes.inputEnabled = true;
  confetes.input.enableDrag(false,true);
  confetes.arrastado = false;
  confetes.events.onInputDown.add(surgeSacola,this);
  confetes.events.onInputUp.add(desapareceSacola,this)
  camada04 = game.add.sprite(0,0,"camada04");
  lona = game.add.sprite(700,0,"objetosPuzzle4",6);
  lona.inputEnabled = true;
  lona.input.enableDrag(false,true);
  lona.arrastado = false;
  lona.events.onInputDown.add(surgeSacola,this);
  lona.events.onInputUp.add(desapareceSacola,this)
  pinceis = game.add.sprite(490,900,"objetosPuzzle4",7);
  pinceis.inputEnabled = true;
  pinceis.input.enableDrag(false,true);
  pinceis.arrastado = false;
  pinceis.events.onInputDown.add(surgeSacola,this);
  pinceis.events.onInputUp.add(desapareceSacola,this)
  cadeira = game.add.sprite(0,600,"objetosPuzzle4",1);
  cadeira.inputEnabled = true;
  cadeira.input.enableDrag(false,true);
  cadeira.arrastado = false;
  cadeira.events.onInputDown.add(surgeSacola,this);
  cadeira.events.onInputUp.add(desapareceSacola,this)
  pratos = game.add.sprite(1240,900,"objetosPuzzle4",8);
  pratos.inputEnabled = true;
  pratos.input.enableDrag(false,true);
  pratos.arrastado = false;
  pratos.events.onInputDown.add(surgeSacola,this);
  pratos.events.onInputUp.add(desapareceSacola,this)
  camada05 = game.add.image(0,0,"camada05");
  barbante = game.add.sprite(240,960,"objetosPuzzle4",0);
  barbante.inputEnabled = true;
  barbante.input.enableDrag(false,true);
  barbante.arrastado = false;
  barbante.events.onInputDown.add(surgeSacola,this);
  barbante.events.onInputUp.add(desapareceSacola,this)
  tintas = game.add.sprite(1000,850,"objetosPuzzle4",11);
  tintas.inputEnabled = true;
  tintas.input.enableDrag(false,true);
  tintas.arrastado = false;
  tintas.events.onInputDown.add(surgeSacola,this);
  tintas.events.onInputUp.add(desapareceSacola,this)
  guardanapo = game.add.sprite(1450,920,"objetosPuzzle4",5);
  guardanapo.inputEnabled = true;
  guardanapo.input.enableDrag(false,true);
  guardanapo.arrastado = false;
  guardanapo.events.onInputDown.add(surgeSacola,this);
  guardanapo.events.onInputUp.add(desapareceSacola,this);
  botaoRevisaoQuatro = game.add.button(1770,100,"botoes",popRevisao,this,25,25,24);
  botaoRevisaoQuatro.width = 130;
  botaoRevisaoQuatro.height = 136;
  botaoPauseQuatro = game.add.button(1770,250,"botoes",pause,this,17,17,16);
  botaoPauseQuatro.width = 130;
  botaoPauseQuatro.height = 136;
  todos = game.add.group();
  todos.add(fundo4);
  todos.add(camada01);
  todos.add(serpentina);
  todos.add(camada02);
  todos.add(chapeudefesta);
  todos.add(copos);
  todos.add(talheres);
  todos.add(camada03);
  todos.add(confetes);
  todos.add(camada04);
  todos.add(lona);
  todos.add(pinceis);
  todos.add(cadeira);
  todos.add(pratos);
  todos.add(camada05);
  todos.add(barbante);
  todos.add(tintas);
  todos.add(guardanapo);
  todos.add(botaoRevisaoQuatro);
  todos.add(botaoPauseQuatro);
  interfaceAtual.add(todos);
  bolsa2 = game.add.sprite(900,500,"bolsa");
  bolsa2.visible = false;
  todos.add(bolsa2);
  menuPersistente();
  //Instruções
  instrucao();
}

function atualizaJogo4(){
  checaSacola();
  relogio();
}

function surgeSacola(sprite){
  bolsa2.visible = true;
  sprite.arrastado = true;
  objArrastado = sprite;
}

function desapareceSacola(sprite){
  bolsa2.visible = false;
  sprite.arrastado = false;

}

function checaSacola(){
  if(serpentina.arrastado==true){
      if((serpentina.x>bolsa2.left && serpentina.x<bolsa2.right)&&(serpentina.top>bolsa2.top))
        serpentina.kill();
  }
  if(chapeudefesta.arrastado==true){
      if((chapeudefesta.x>bolsa2.left && chapeudefesta.x<bolsa2.right)&&(chapeudefesta.top>bolsa2.top))
        chapeudefesta.kill();
  }
  if(copos.arrastado==true){
      if((copos.x>bolsa2.left && copos.x<bolsa2.right)&&(copos.top>bolsa2.top))
        copos.kill();
  }
  if(talheres.arrastado==true){
      if((talheres.x>bolsa2.left && talheres.x<bolsa2.right)&&(talheres.top>bolsa2.top))
        talheres.kill();
  }
  if(confetes.arrastado==true){
      if((confetes.x>bolsa2.left && confetes.x<bolsa2.right)&&(confetes.top>bolsa2.top))
        confetes.kill();
  }
  if(lona.arrastado==true){
      if((lona.x>bolsa2.left && lona.x<bolsa2.right)&&(lona.top>bolsa2.top))
        lona.kill();
  }
  if(pinceis.arrastado==true){
      if((pinceis.x>bolsa2.left && pinceis.x<bolsa2.right)&&(pinceis.top>bolsa2.top))
        pinceis.kill();
  }
  if(cadeira.arrastado==true){
      if((cadeira.x>bolsa2.left && cadeira.x<bolsa2.right)&&(cadeira.top>bolsa2.top))
        cadeira.kill();
  }
  if(pratos.arrastado==true){
      if((pratos.x>bolsa2.left && pratos.x<bolsa2.right)&&(pratos.top>bolsa2.top))
        pratos.kill();
  }
  if(barbante.arrastado==true){
      if((barbante.x>bolsa2.left && barbante.x<bolsa2.right)&&(barbante.top>bolsa2.top))
        barbante.kill();
  }
  if(pinceis.arrastado==true){
      if((tintas.x>bolsa2.left && tintas.x<bolsa2.right)&&(tintas.top>bolsa2.top))
        tintas.kill();
  }
  if(tintas.arrastado==true){
      if((tintas.x>bolsa2.left && tintas.x<bolsa2.right)&&(tintas.top>bolsa2.top))
        tintas.kill();
  }
  if(guardanapo.arrastado==true){
      if((guardanapo.x>bolsa2.left && guardanapo.x<bolsa2.right)&&(guardanapo.top>bolsa2.top))
        guardanapo.kill();
  }
  if(serpentina.exists==false && chapeudefesta.exists==false && copos.exists==false && talheres.exists==false && confetes.exists==false && lona.exists==false && cadeira.exists==false && pratos.exists==false && barbante.exists==false && pinceis.exists==false && tintas.exists==false && guardanapo.exists==false){
    terminarJogoQuatro();
  }
}

function terminarJogoQuatro(){
  if(encerrou==false){
    let botaoConclusao1,botaoConclusao2,janelaConclusao,retangulo;
    retangulo = game.add.graphics(0,0);
    retangulo.beginFill(0x000000,0.5);
    retangulo.drawRect(0,0,1920,1080);
    retangulo.endFill();
    janelaConclusao = game.add.image(300,100,"conclusao");
    botaoConclusao1 = game.add.button(600,700,"botoes",iniciaPuzzle4,this,21,21,20);
    botaoConclusao1.width = 180;
    botaoConclusao1.height = 200;
    botaoConclusao2 = game.add.button(1200,700,"botoes",level2,this,3,3,2);
    botaoConclusao2.width = 180;
    botaoConclusao2.height = 200;
    let  tituloParabens = game.add.text(670,160,"GRATULOJN");
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
    encerrou = true;
    if(contadorMinutos<6){
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
    else if(contadorMinutos>6 && contadorMinutos<10){
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
