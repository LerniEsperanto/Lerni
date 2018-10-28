let camada01,camada02,camada03,camada04,camada05;
let barbante,cadeira,chapeudefesta,confetes,copos,guardanapo,lona,pinceis,pratos,serpentina,talheres,tintas,bolsa2,fundo4;
let todos,folha,marcadagua;
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
  marcadagua = game.add.text(1300,20,"Mini-game em fase de testes");
  marcadagua.font = "Montserrat";
  marcadagua.fontSize = 35;
  marcadagua.alpha = 0.5;
  marcadagua.fill = "yellow";
  interfaceAtual.add(todos);
  interfaceAtual.add(marcadagua);
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

function dialogoQuatro(){ // dialogo do quarto puzzle
  let controlaTexto = 0;
  interfaceAtual.removeAll(true);
  let imgfase01 = game.add.image(0,0,"backgroundlevels");
  interfaceAtual.add(imgfase01);
  let vetorTexto = [{nome:"Floppy", texto:"Agora que compramos o que precisamos, lembrei que devemos ter algumas coisas no porão lá de casa que podemos utilizar para terminar de enfeitar nossa festa."},{nome:"Jiló",texto:"Seria muito bom ter uma faixa..."},{nome:"Lôlô", texto:"Hum! Poderíamos escrever uma saudação em esperanto para os convidados."},{nome:"Floppy",texto:"Sim! Isso os deixariam muito felizes!"},{nome:"Lôlô",texto:"Muito bem! Floppy, você se lembra do que tem lá?"},{nome:"Floppy",texto:"Bem… se bem me lembro temos uma lona, barbante para prender ela, alguns pincéis, tinta, cadeiras, pratos, guardanapos, copos, um pacote de talher, alguns chapéus de festa, um pouco de confete e serpentina que sobrou do carnaval."},{nome:"Lôlô",texto:"Ótimo, vamos precisar deles. Tanto para fazermos a faixa quanto para deixarmos como extras, como os pratinhos e os copos. Enquanto andamos de volta para casa, vou ensiná-los como dizer cada um desses objetos."},{nome:"Lôlô",texto:"Hum… Alguns desses objetos eu já ensinei para vocês. Então vou ensinar como são os nomes desses outros objetos."},{nome:"Jiló e Floppy",texto:"Certo!"},{nome:"Lolô",texto:"Muito bem, a lona que queremos para fazer a faixa se chama TOLO. Para escrever nela utilizamos um BROSO, que é um pincel, junto de uma INKO da nossa cor favorita. INKO é como chamamos a tinta."},{nome:"Floppy",texto:"Isso é fácil de lembrar!"},{nome:"Jiló",texto:"E para prender a TOLO? Utilizamos o que?"},{nome:"Lôlô",texto:"Para amarrar a lona, utilizamos uma KORDO para prendê-la e se quisermos amarrá-la bem alto podemos subir numa SEĜO. KORDO é como chamamos o barbante que utilizaremos para amarrar a lona e se vocês lembrarem bem SEĜO é como chamamos qual móvel?"},{nome:"Jiló e Floppy",texto:"Uma cadeira!"},{nome:"Lôlô",texto:"Isso mesmo! Vejo que aprenderam bem."},{nome:"Floppy",texto:"Quando chegarmos em casa vamos reunir todos esses itens para deixar a festa bem organizada."},{nome:"Floppy",texto:"Oh não!"},{nome:"Jiló",texto:"Que bagunça..."},{nome:"Lôlô",texto:"Parece que vamos ter um belo trabalho para encontrar o que queremos. Vamos lá!"}];
  let floppy = game.add.image(100,300,"floppy",1);
  interfaceAtual.add(floppy);
  let lolo = game.add.image(1000,300,"lolo",2);
  interfaceAtual.add(lolo);
  let jilo = game.add.image(500,300,"jilo",2);
  interfaceAtual.add(jilo);
  let listaP = game.add.image(1400,100,"revisaoPuzzle42");
  listaP.scale.x = 0.45;
  listaP.scale.y = 0.45;
  listaP.visible = false;
  interfaceAtual.add(listaP);
  let balaoDialogo = game.add.image(400-fatorFonte*20,700,"dialogo");
  balaoDialogo.width = 1269+fatorFonte*20;
  balaoDialogo.height = 268;
  interfaceAtual.add(balaoDialogo);
  let nome = game.add.text(430-fatorFonte*20,750,vetorTexto[controlaTexto].nome);
  nome.font = "Luckiest Guy";
  nome.fontSize = 30 + fatorFonte;
  let dialogo = game.add.text(430-fatorFonte*20,800,vetorTexto[controlaTexto].texto);
  dialogo.font = "Montserrat";
  dialogo.fontSize = 27 + fatorFonte;
  dialogo.wordWrap = true;
  dialogo.wordWrapWidth = 1200;
  interfaceAtual.add(nome);
  interfaceAtual.add(dialogo);
  let botaoAvancar = game.add.button(1700,850,"botoes",avancar,this,3,3,2);
  botaoAvancar.width = 90;
  botaoAvancar.height = 100;
  let botaoRetroceder = game.add.button(280-fatorFonte*20,850,"botoes",retroceder,this,23,23,22);
  botaoRetroceder.width = 90;
  botaoRetroceder.height = 100;
  let irPuzzle4 = game.add.button(1700,700,"botoes",iniciaPuzzle4,this,19,19,18);
  irPuzzle4.width = 90;
  irPuzzle4.height = 100;
  interfaceAtual.add(botaoAvancar);
  interfaceAtual.add(botaoRetroceder);
  interfaceAtual.add(irPuzzle4);
  function retroceder(){
    if(controlaTexto>0)
      controlaTexto--;
    nome.setText(vetorTexto[controlaTexto].nome);
    dialogo.setText(vetorTexto[controlaTexto].texto);
    checaSprite();
  }
  function avancar(){
    if (controlaTexto==vetorTexto.length-1)
      iniciaPuzzle4();
    if (controlaTexto<vetorTexto.length-1)
      controlaTexto++;
    nome.setText(vetorTexto[controlaTexto].nome);
    dialogo.setText(vetorTexto[controlaTexto].texto);
    checaSprite();
  }
  function checaSprite(){ //expressões dos personagens
    switch(controlaTexto){
      case 0:
        floppy.frame = 1;
        lolo.frame = 2;
      break;
      case 1:
        lolo.frame = 2;
      break;
      case 2:
        lolo.frame = 8;
        floppy.frame = 1;
      break;
      case 3:
        floppy.frame = 0;
        lolo.frame = 8;
      break;
      case 4:
        lolo.frame = 3;
        floppy.frame = 0;
      break;
      case 5:
        floppy.frame = 5;
        lolo.frame = 3;
      break;
      case 6:
        listaP.visible = false;
        lolo.frame = 2;
      break;
      case 7:
        listaP.visible = true;
        lolo.frame = 4;
        floppy.frame = 5;
        jilo.frame = 1;
      break;
      case 8:
        floppy.frame = 0;
        jilo.frame = 0;
        lolo.frame = 4;
      break;
      case 9:
        lolo.frame = 1;
      break;
      case 10:
        floppy.frame = 0;
      break;
      case 11:
        floppy.frame = 0;
        jilo.frame = 1;
        lolo.frame = 1;
      break;
      case 12:
        lolo.frame = 3;
        floppy.frame = 0;
      break;
      case 13:
        floppy.frame = 3;
      break;
      case 14:
        floppy.frame = 6;
        jilo.frame = 1;
      break;
      case 15:
        jilo.frame = 3;
        lolo.frame = 3;
        imgfase01.loadTexture("backgroundlevels");
      break;
      case 16:
        lolo.frame = 3;
        jilo.frame = 7;
        imgfase01.alpha = 0;
        imgfase01.loadTexture("cenario4");
        let efeitoCenario = game.add.tween(imgfase01);
        efeitoCenario.to({alpha:1},2000,"Linear",true);
      break;
      case 17:
        jilo.frame = 3;
        
      break;
      case 18:
        lolo.frame = 4;
      break;
      
    }
  }
  menuPersistente();
}


function grifaNomes(){
    let graficos = game.add.graphics();
    graficos.beginFill(0xFF3300);
    graficos.lineStyle(10, 0xffd900, 1);
    if(!chapeudefesta.exists){
      graficos.moveTo(800,350);
      graficos.lineTo(1100,350);
    }
    if(!tintas.exists){
      graficos.moveTo(1100,380);
      graficos.lineTo(1230,390);
    }
    if(!barbante.exists){
      graficos.moveTo(800,435);
      graficos.lineTo(1020,415);
    }
    if(!pinceis.exists){
      graficos.moveTo(1070,465);
      graficos.lineTo(1230,475);
    }
    if(!lona.exists){
      graficos.moveTo(830,495);
      graficos.lineTo(950,505);
    }
    if(!guardanapo.exists){
      graficos.moveTo(1000,555);
      graficos.lineTo(1260,545);
    }
    if(!cadeira.exists){
      graficos.moveTo(810,585);
      graficos.lineTo(980,600);
    }
    if(!talheres.exists){
      graficos.moveTo(1000,625);
      graficos.lineTo(1240,625);
    }
    if(!pratos.exists){
      graficos.moveTo(840,650);
      graficos.lineTo(1020,680);
    }
    if(!copos.exists){
      graficos.moveTo(1070,690);
      graficos.lineTo(1230,695);
    }
    if(!serpentina.exists){
      graficos.moveTo(820,740);
      graficos.lineTo(1020,736);
    }
    if(!confetes.exists){
      graficos.moveTo(1060,775);
      graficos.lineTo(1230,780);
    }
    return graficos;
}