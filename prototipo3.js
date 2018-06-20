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
  fundoItem = game.add.image(10,500,"quadrado");
  fundoItem.scale.y = 1.4;
  fundoItem.scale.x = 1.1;
  imagemItem = game.add.image(50,530,"contagem",itemVigente);
  textoQtd = game.add.text(50,1000,"Quantidade: "+geraExtenso(contPego)+"/"+geraExtenso(indicadorItens[itemVigente].quantidade));
  textoQtd.font = "Luckiest Guy";
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
    interfaceAtual.add(retangulo);
    interfaceAtual.add(janelaConclusao);
    interfaceAtual.add(botaoConclusao1);
    interfaceAtual.add(botaoConclusao2);
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
