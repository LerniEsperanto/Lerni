let bolsa;
let contador=0;
let contPego=0;
let itemVigente;
let itens;
let velocidadeY = 5;
let textoItem, textoQtd;
let terminouTres = false;
let botaoRevisaoTres, botaoPauseTres;
let indicadorItens = [{nomeItem:"Pinhata", quantidade:1, pego:false},{nomeItem:"Sona skatolo", quantidade:2, pego:false},{nomeItem:"Buŝtukoj", quantidade:3, pego:false},{nomeItem:"Glasoj", quantidade:4, pego:false},{nomeItem:"Teleroj", quantidade:5, pego:false},{nomeItem:"Partio Ĉapelo", quantidade:6, pego:false},{nomeItem:"Partiaj glasoj", quantidade:7, pego:false},{nomeItem:"Partio Flagoj", quantidade:8, pego:false},{nomeItem:"Kandeloj", quantidade:9, pego:false},{nomeItem:"Balonetoj", quantidade:10, pego:false}];
let escoreTres=0,exibeEscoreTres;
let imagemItem,fundoItem;
function iniciaPuzzleTres(){
  interfaceAtual.removeAll(true);
  terminouTres = false;
  estaNoJogo = true;
  escoreTres = 0;
  let backgroundFundo = game.add.image(0,0,"fundoLoja");
  indicadorItens = [{nomeItem:"Pinhata", quantidade:1, pego:false},{nomeItem:"Sona skatolo", quantidade:2, pego:false},{nomeItem:"Buŝtukoj", quantidade:3, pego:false},{nomeItem:"Glasoj", quantidade:4, pego:false},{nomeItem:"Teleroj", quantidade:5, pego:false},{nomeItem:"Partio Ĉapelo", quantidade:6, pego:false},{nomeItem:"Partiaj glasoj", quantidade:7, pego:false},{nomeItem:"Partio Flagoj", quantidade:8, pego:false},{nomeItem:"Kandeloj", quantidade:9, pego:false},{nomeItem:"Balonetoj", quantidade:10, pego:false}];
  contPego=0;
  contador=0;
  controladorAtt = 3;
  bolsa = game.add.sprite(game.world.width/2,800,"bolsa");
  bolsa.inputEnabled = true;
  bolsa.scale.x = 0.8;
  bolsa.scale.y = 0.8;
  itemVigente = game.rnd.integerInRange(0,9);
  textoItem = game.add.text(100,200,indicadorItens[itemVigente].nomeItem);
  textoItem.font="Luckiest Guy";
  textoItem.visible = false;
  textoItem.fontSize = 30 + fatorFonte;
  fundoItem = game.add.image(10,500,"quadrado");
  fundoItem.scale.y = 1.4;
  fundoItem.scale.x = 1.1;
  imagemItem = game.add.image(50,530,"contagem",itemVigente);
  textoQtd = game.add.text(50,1000,"Quantidade: "+geraExtenso(contPego)+"/"+geraExtenso(indicadorItens[itemVigente].quantidade));
  textoQtd.font = "Luckiest Guy";
  textoQtd.fontSize = 30 + fatorFonte;
  itens = game.add.group();
  let item = game.add.sprite(400,100,"coletaveis",3);
  item.lifespan = 3000;
  itens.add(item);
  item.visible = false;
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.enable([itens,bolsa]);
  item.body.velocity.setTo(0,200);
  bolsa.body.immovable = true;
  botaoRevisaoTres = game.add.button(1770,100,"botoes",popRevisao,this,25,25,24);
  botaoRevisaoTres.width = 130;
  botaoRevisaoTres.height = 136;
  botaoPauseTres = game.add.button(1770,250,"botoes",pause,this,17,17,16);
  botaoPauseTres.width = 130;
  botaoPauseTres.height = 136;
  exibeEscoreTres = game.add.text(1000,100,"Pontos: "+escoreTres);
  exibeEscoreTres.font = "Luckiest Guy";
  exibeEscoreTres.fontSize = 36;
  interfaceAtual.add(backgroundFundo);
  interfaceAtual.add(bolsa);
  interfaceAtual.add(itens);
  interfaceAtual.add(fundoItem);
  interfaceAtual.add(textoItem);
  interfaceAtual.add(textoQtd);
  interfaceAtual.add(botaoRevisaoTres);
  interfaceAtual.add(botaoPauseTres);
  interfaceAtual.add(imagemItem);
  interfaceAtual.add(exibeEscoreTres);
  menuPersistente();
  //Instruções
  instrucao();
}


function atualizaJogo3(){
  movebolsa();
  geradorItens();
  for(let i=0; i<itens.length; i++){
      game.physics.arcade.collide(itens.getAt(i), bolsa, checaItem, null, this);
  }
}

function movebolsa(){
  if(game.input.x>400 && game.input.x<1600){
      bolsa.x = game.input.x;
  }
}

function geradorItens(){
  if(contador<60){
    contador++;
  }
  else{
    let item;
    let selecao = randomizador(itemVigente);
    contador = 0;
    switch(selecao){
      case 0:
        item = game.add.sprite(game.rnd.integerInRange(400,1600),0,"coletaveis",0);
        item.lifespan = 3000;
        item.controle = selecao;
        game.physics.arcade.enable(item);
        item.body.velocity.setTo(0,500);
        itens.add(item);
      break;
      case 1:
        item = game.add.sprite(game.rnd.integerInRange(400,1600),0,"coletaveis",1);
        item.lifespan = 3000;
        item.controle = selecao;
        game.physics.arcade.enable(item);
        item.body.velocity.setTo(0,500);
        itens.add(item);
      break;
      case 2:
        item = game.add.sprite(game.rnd.integerInRange(400,1600),0,"coletaveis",2);
        item.lifespan = 3000;
        item.controle = selecao;
        game.physics.arcade.enable(item);
        item.body.velocity.setTo(0,500);
        itens.add(item);
      break;
      case 3:
        item = game.add.sprite(game.rnd.integerInRange(400,1600),0,"coletaveis",3);
        item.lifespan = 3000;
        item.controle = selecao;
        game.physics.arcade.enable(item);
        item.body.velocity.setTo(0,500);
        itens.add(item);
      break;
      case 4:
        item = game.add.sprite(game.rnd.integerInRange(400,1600),0,"coletaveis",4);
        item.lifespan = 3000;
        item.controle = selecao;
        game.physics.arcade.enable(item);
        item.body.velocity.setTo(0,500);
        itens.add(item);
      break;
      case 5:
        item = game.add.sprite(game.rnd.integerInRange(400,1600),0,"coletaveis",game.rnd.integerInRange(5,7));
        item.lifespan = 3000;
        item.controle = selecao;
        game.physics.arcade.enable(item);
        item.body.velocity.setTo(0,500);
        itens.add(item);
      break;
      case 6:
        item = game.add.sprite(game.rnd.integerInRange(400,1600),0,"coletaveis",game.rnd.integerInRange(8,14));
        item.lifespan = 3000;
        item.controle = selecao;
        game.physics.arcade.enable(item);
        item.body.velocity.setTo(0,500);
        itens.add(item);
      break;
      case 7:
        item = game.add.sprite(game.rnd.integerInRange(400,1600),0,"coletaveis",15);
        item.lifespan = 3000;
        item.controle = selecao;
        game.physics.arcade.enable(item);
        item.body.velocity.setTo(0,500);
        itens.add(item);
      break;
      case 8:
        item = game.add.sprite(game.rnd.integerInRange(400,1600),0,"coletaveis",16);
        item.lifespan = 3000;
        item.controle = selecao;
        game.physics.arcade.enable(item);
        item.body.velocity.setTo(0,500);
        itens.add(item);
      break;
      case 9:
        item = game.add.sprite(game.rnd.integerInRange(400,1600),0,"coletaveis",game.rnd.integerInRange(17,21));
        item.lifespan = 3000;
        item.controle = selecao;
        game.physics.arcade.enable(item);
        item.body.velocity.setTo(0,500);
        itens.add(item);
      break;
    }
  }
}

function checaItem(sprites){
  if(sprites.bottom<bolsa.top){
    console.log("cheguei aqui");
    if(sprites.controle==itemVigente){
      contPego++;
      escoreTres+=100;
      atualizaPontos3();
      textoQtd.setText("Quantidade: "+geraExtenso(contPego)+"/"+geraExtenso(indicadorItens[itemVigente].quantidade));
      sprites.destroy();
      if(contPego == indicadorItens[itemVigente].quantidade){
        contPego=0;
        indicadorItens[itemVigente].pego = true;
        while(indicadorItens[itemVigente].pego == true){
          if((indicadorItens[0].pego==true) && (indicadorItens[1].pego==true) && (indicadorItens[2].pego==true) && (indicadorItens[3].pego==true) && (indicadorItens[4].pego==true)){
            terminarJogoTres();
            return;
          }
          else{
            itemVigente = game.rnd.integerInRange(0,9);
            imagemItem.frame = itemVigente;
            textoItem.setText(indicadorItens[itemVigente].nomeItem);
            textoQtd.setText("Quantidade: "+geraExtenso(contPego)+"/"+geraExtenso(indicadorItens[itemVigente].quantidade));
          }
        }
      }
    }
    else{
      sprites.body.immovable=true;
      sprites.body.enable = false;
      game.add.tween(sprites).to( {alpha:0},1000,'Linear',true);
      if(escoreTres>50){
        escoreTres-=50;
      }
      atualizaPontos3();
    }
  }
}
function terminarJogoTres(){
  if(terminouTres==false){
    let botaoConclusao1,botaoConclusao2,janelaConclusao,retangulo;
    retangulo = game.add.graphics(0,0);
    retangulo.beginFill(0x000000,0.5);
    retangulo.drawRect(0,0,1920,1080);
    retangulo.endFill();
    janelaConclusao = game.add.image(300,100,"conclusao");
    botaoConclusao1 = game.add.button(600,700,"botoes",iniciaPuzzleTres,this,21,21,20);
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
    terminouTres = true;
    if(escoreTres>=3500){
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
    else if(escoreTres>2000 && escoreTres<3500){
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

function atualizaPontos3(){
  exibeEscoreTres.setText("Pontos: "+escoreTres);
}

function geraExtenso(numero){
  let palavra="";
  switch(numero){
    case 0:
      palavra = "nul";
    break;
    case 1:
      palavra = "unu";
    break;
    case 2:
      palavra = "du";
    break;
    case 3:
      palavra = "tri";
    break;
    case 4:
      palavra = "kvar";
    break;
    case 5:
      palavra = "kvin";
    break;
    case 6:
      palavra = "ses";
    break;
    case 7:
      palavra = "sep";
    break;
    case 8:
      palavra = "ok";
    break;
    case 9:
      palavra = "naŭ";
    break;
    case 10:
      palavra = "dek";
    break;
  }
  return palavra;
}

function dialogoTres(){ // dialogo do terceiro puzzle
  let controlaTexto = 0;
  interfaceAtual.removeAll(true);
  let imgfase01 = game.add.image(0,0,"bgNarrativas");
  interfaceAtual.add(imgfase01);
  let vetorTexto = [{nome:"Lôlô", texto:"Então! O que vamos precisar para deixar tudo com cara de festa ?"},{nome:"Floppy",texto:"Talvez uma decoraçãozinha..."},{nome:"Lôlô", texto:"Com certeza! Mas o quê, exatamente?"},{nome:"Floppy",texto:"Balões e serpentina, bolo e confete, de muitas cores!"},{nome:"Lôlô",texto:"Isso mesmo! Com várias cores, vamos deixar a festinha muito mais bonita!\nVamos aprender algumas delas…"},{nome:"Lolô",texto:"Em esperanto, o nome de muitas cores são muito parecidas com as de outras línguas.\n Como o inglês, por exemplo!"},{nome:"Lôlô",texto:"Isso acontece porque o esperanto tem palavras retiradas de outras línguas muito utilizadas!"},{nome:"Lôlô",texto:"Como é que se diz azul em inglês?"},{nome:"Floppy",texto:"Essa é fácil, azul é blue!"},{nome:"Lolô",texto:"Correto! E laranja em inglês?"},{nome:"Floppy",texto:"Orange!"},{nome:"Lolô",texto:"Perfeito ! Em esperanto essas duas cores são bem parecidas com o inglês.\n Quando queremos dizer a cor do céu, dizemos que sua cor é BLUA. Quando queremos dizer a cor da laranja, dizemos que ela é ORAN^GO."},{nome:"Floppy",texto:"Até que é fácil!"},{nome:"Jiló",texto:"Isso é meio estranho..."},{nome:"Lôlô",texto:"No esperanto também tem uma cor que se parece muito com uma do português.\n Querem adivinhar qual é?"},{nome:"Floppy",texto:"Já sei! Roxo!"},{nome:"Lôlô",texto:"Não, não. E você, Jiló? Consegue adivinhar?"},{nome:"Jiló",texto:"Hummm… Não sei… Amarelo?"},{nome:"Lôlô",texto:"Errado também. Aqui vai uma dica! Essa cor existe muito na natureza,\nprincipalmente nas árvores e outras plantinhas."},{nome:"Floppy e Jiló",texto:"VERDE!"},{nome:"Lôlô",texto:"Muito bem! A cor verde em esperanto é muito parecida com como dizemos na nossa língua. Ela só muda o finalzinho da palavra. Tiramos o E final e trocamos por um A. Então pra dizer a cor de uma planta, é só falar que ela é VERDA!"},{nome:"Floppy",texto:"Show! É muito fácil lembrar essa."},{nome:"Jiló",texto:"Eu ainda acho melhor o português."},{nome:"Floppy",texto:"Jiló, deixa de ser chato!"},{nome:"Lôlô",texto:"Calma, vocês dois. Prestem atenção! Agora vamos aprender algumas cores que vão ser um pouco difíceis de lembrar."},{nome:"Lôlô",texto:"De que cor são as nuvens?"},{nome:"Jiló",texto:"São brancas, ué."},{nome:"Lôlô",texto:"E as nuvens de chuva?"},{nome:"Floppy",texto:"Ah, essas são cinza!"},{nome:"Lôlô",texto:"Sim ! Em esperanto, a cor das nuvens brancas é BLANKA e das nuvens cinza, GRIZA."},{nome:"Lôlô",texto:"Quando você quiser dizer a cor do tronco de uma árvore, é só dizer que sua cor é BRUNA. BRUNA significa marrom em esperanto!"},{nome:"Floppy",texto:"Lôlô, como eu digo que uma maçã é vermelha?"},{nome:"Lôlô",texto:"Ótima pergunta Floppy ! É só dizer que sua cor é RU^GA ! Ru^ga significa vermelho, assim como a maçã."},{nome:"Lôlô",texto:"Para dizer que o sol é amarelo, é só dizer que é FLAVA. Para uma flor rosa, se diz ROZKOLORA. Se a flor é roxa dizemos, PURPURA !"},{nome:"Jiló",texto:"E aquelas formiguinhas pretas?"},{nome:"Lôlô",texto:"Ah meu caro Jiló, preto em esperanto se chama NIGRA. A cor daquelas formiguinhas é nigra. Então, entenderam como se fala as cores?"},{nome:"Floppy e Jiló",texto:"SIM!"},{nome:"Floppy e Jiló",texto:"Algumas são difíceis de lembrar. Espero conseguir lembrar delas…"},{nome:"Mãe do Floppy",texto:"Meninos vocês viram o Luquinhas e as outras crianças?"},{nome:"Mãe do Floppy",texto:"Não."},{nome:"Mãe do Floppy",texto:"Eles estavam brincando pela casa e encontraram os baldes de tinta que usamos para colorir algumas coisas na festa. Agora eles estão cobertos de tinta e não querem tomar banho! Desde cedo que eles estão fugindo de mim porque não querem ir se arrumar para a festa! Só querem saber de brincar! Agora vou ter que sair para resolver algumas coisas antes da festa e eu não sei mais o que fazer. Vocês podem me ajudar a pegar eles?"},{nome:"Lôlô",texto:" Claro tia, pode deixar que nós vamos pegar esses travessos!"},{nome:"Floppy e Jiló",texto:"SIM!"},{nome:"Mãe do Jiló",texto:"Muito obrigada meninos, vou ter que sair agora mas as crianças estarão esperando por vocês."},{nome:"Lôlô",texto:"Muito bem, a tia disse que os pequenos estão todos sujos de tinta e que precisamos pegá-los para que se ajeitem para a festa."}];
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
  let irPuzzle3 = game.add.button(1700,700,"botoes",iniciaPuzzleTres,this,19,19,18);
  irPuzzle3.width = 90;
  irPuzzle3.height = 100;
  interfaceAtual.add(botaoAvancar);
  interfaceAtual.add(botaoRetroceder);
  interfaceAtual.add(irPuzzle3);
  function retroceder(){
    if(controlaTexto>0)
      controlaTexto--;
    nome.setText(vetorTexto[controlaTexto].nome);
    dialogo.setText(vetorTexto[controlaTexto].texto);
    checaSprite();
  }
  function avancar(){
    if (controlaTexto==vetorTexto.length-1)
      iniciaPuzzleTres();
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
