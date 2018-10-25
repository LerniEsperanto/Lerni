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
  let imgfase01 = game.add.image(0,0,"backgroundlevels");
  interfaceAtual.add(imgfase01);
  let vetorTexto = [{nome:"Floppy", texto:"Vocês se lembram onde é a loja de festas? Eu meio que me perdi…"},{nome:"Jiló",texto:"Acho que era por aqui, não talvez por ali…"},{nome:"Lôlô", texto:"Vamos lá pessoal! Vocês disseram que sabiam!"},{nome:"Floppy",texto:"Ah sim! É só atravessamos o parque que estaremos ali em pouco tempo!"},{nome:"Lôlô",texto:"Muito bem! Todo mundo se lembra do que vamos comprar?"},{nome:"Floppy",texto:" Bem… não tudo."},{nome:"Lôlô",texto:"Então vamos revisar enquanto atravessamos o parque."},{nome:"Lôlô",texto:"Para começar, temos os balões. Balões em esperanto são chamados BALONETOJ."},{nome:"Jiló",texto:"Ué, não seria mais fácil ser chamado de BALONETO?"},{nome:"Lolô",texto:"Foi muito bom você perguntar isso jiló. Quando a gente fala que tem mais de uma coisa, colocamos um J no final da palavra. Então fica BALONETOJ."},{nome:"Jiló",texto:"OHH…"},{nome:"Lolô",texto:"Sempre lembre-se também que os substantivos terminam sempre em O."},{nome:"Floppy",texto:"Certo, o que mais vamos comprar?"},{nome:"Lôlô",texto:"Vamos comprar copos, que em esperanto se chama GLASO."},{nome:"Jiló",texto:"Que mais de um é GLASOJ."},{nome:"Floppy",texto:"Uau Jiló, você está aprendendo rápido."},{nome:"Lôlô",texto:"Vamos precisar de outras coisas também, o que mais?"},{nome:"Jiló",texto:"Bem, os convidados vão precisar comer também…"},{nome:"Lôlô",texto:"Aí vem os pratos e guardanapos. Os pratos se chamam TELERO, é bem fácil confundir com telefone. E os guardanapos são BU^STUKO, que usamos para limpar a boca."},{nome:"Floppy",texto:"Humm… o que mais?"},{nome:"Lôlô",texto:"Onde vamos colocar as lembrancinhas? Pra isso tem os PAKA^JOJ, os embrulhos."},{nome:"Floppy",texto:"Mas Lôlô, a gente precisa de coisas divertidas pra jogar na festa."},{nome:"Jiló",texto:"Desde que não seja confete, entra tudo no meu nariz."},{nome:"Lôlô",texto:"Ok, ok. Sem confete dessa vez. Vamos comprar então SERPENTO, PAPERA KUVO e RUBANDO. Na sequência: Serpentina, papel crepom e fita para amarrar as lembrancinhas."},{nome:"Jiló",texto:"Tudo bom e legal, mas qual vai ser a quantidade de tudo isso?"},{nome:"Floppy",texto:"Ops…"},{nome:"Lôlô",texto:"Para isso vamos aprender os números em esperanto. É muito fácil aprender veja só: Unu, du ,tri, kvar, kvin. Repita comigo."},{nome:"Floppy e Jiló",texto:"Unu, du, tri, kvar, kvin."},{nome:"Lôlô",texto:"Assim vocês acabaram de contar até cinco."},{nome:"Floppy e Jiló",texto:"Uau!"},{nome:"Lôlô",texto:"Agora vamos continuar até dez: Ses, sep,ok, na~u, dek."},{nome:"Floppy e Jiló",texto:"Ses, sep,ok, na~u, dek"},{nome:"Lôlô",texto:"Assim são os números até dez."},{nome:"Jiló",texto:"Mas e se for mais que dez?"},{nome:"Lôlô",texto:"Aí nós colocamos o dek seguido do número depois. Por exemplo, onze é dek unu."},{nome:"Floppy",texto:"E o vinte?"},{nome:"Lôlô",texto:" É bem fácil, veja só: o vinte é o du seguido do dek, assim é até o noventa, no resto é a mesma regra de antes. O vinte dois ficaria dudek du."},{nome:"Atendente",texto:"Desculpe meninos, mas vocês vão ter que se apressar, a loja vai fechar daqui a pouco."},{nome:"Floppy",texto:"Oh não!"},{nome:"Lôlô",texto:"Rápido! Peguem a lista e vamos nos apressar!"}];
  let floppy = game.add.image(100,300,"floppy",2);
  interfaceAtual.add(floppy);
  let lolo = game.add.image(1000,300,"lolo",2);
  interfaceAtual.add(lolo);
  let jilo = game.add.image(500,300,"jilo",2);
  interfaceAtual.add(jilo);
  jilo.visible = true;
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
        floppy.frame = 2;
        lolo.frame = 2;
        jilo.frame = 2;
      break;
      case 1:
        jilo.visible = true;
        jilo.frame = 3;
        lolo.frame = 2;
      break;
      case 2:
        lolo.frame = 4;
      break;
      case 3:
        floppy.frame = 0;
      break;
      case 4:
        lolo.frame = 3;
        floppy.frame = 0;
      break;
      case 5:
        floppy.frame = 2;
        jilo.frame = 0;
      break;
      case 6:
        lolo.frame = 2;
      break;
      case 7:
        lolo.frame = 2;
      break;
      case 8:
        jilo.frame = 3;
      break;
      case 9:
        lolo.frame = 2;
        floppy.frame = 0;
        jilo.frame = 3;
      break;
      case 10:
        floppy.frame = 0;
        jilo.frame = 0;
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
        jilo.frame = 0;
      break;
      case 14:
        lolo.frame = 3;
      break;
      case 15:
        floppy.frame = 0;
      break;
      case 16:
        lolo.frame = 3;
        jilo.frame = 0;
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
        jilo.frame = 0;
      break;
      case 22:
        floppy.frame = 0;
        jilo.frame = 1;
      break;
      case 23:
        floppy.frame = 0;
        lolo.frame = 3;
        jilo.frame = 0;
      break;
      case 24:
        lolo.frame = 2;
      break;
      case 25:
        lolo.frame = 2;
        jilo.frame = 3;
      break;
      case 26:
        jilo.frame = 2;
      break;
      case 27:
        lolo.frame = 2;
      break;
      case 28:
        floppy.frame = 0;
      break;
      case 29:
        lolo.frame = 1;
      break;
      case 30:
        lolo.frame = 1;
        jilo.frame = 2;
      break;
      case 31:
        lolo.frame = 2;
        jilo.frame = 0;
      break;
      case 32:
        lolo.frame = 3;
        floppy.frame = 0;
        jilo.frame = 0;
      break;
      case 33:
        floppy.frame = 5;
        jilo.frame = 2;
      break;
      case 34:
        lolo.frame = 3;
      break;
      case 35:
        lolo.frame = 3;
        jilo.frame = 2;
        imgfase01.alpha = 1;
        imgfase01.loadTexture("backgroundlevels");
      break;
      case 36:
        imgfase01.alpha = 0;
        imgfase01.loadTexture("cenarioloja");
        let efeitoLoja = game.add.tween(imgfase01);
        efeitoLoja.to({alpha:1},1000,"Linear",true);
        let efeitoAndar1 = game.add.tween(jilo);
        efeitoAndar1.to({x:500,y:350},150,"Linear",true,10,3,true);
        let efeitoAndar2 = game.add.tween(lolo);
        efeitoAndar2.to({x:1000,y:350},150,"Linear",true,10,3,true);
        let efeitoAndar3 = game.add.tween(floppy);
        efeitoAndar3.to({x:100,y:350},150,"Linear",true,10,3,true);
        jilo.frame = 2;
        lolo.frame = 3;
      break;
      case 37:
        lolo.frame = 0;
      break;
      case 38:
        floppy.frame = 0;
        jilo.frame = 3;
      break;
     
    }
  }
  menuPersistente();
}
