var game = new Phaser.Game(1920,1080, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
var interfaceAtual;
var botaoPlay,botaoConfig,botaoInfo,botaoVoltar,t;
var primeiraVez = true;
var verificadorRetratil = false;
var gameAtual;
var guardaTrava=0;
var controladorAtt = 0;
var estaNoJogo=false;
var contadorSegundos=0, contadorMinutos=0, contadorMilesimos=0;
WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, menu, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Montserrat']
    },
    custom:{
      families:['Luckiest Guy'],
      urls:['fontes/stylesheet.css']
    }
};
function preload(){
  interfaceAtual = new Phaser.ArraySet();
  game.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
  game.load.image('background-menu',"imagens/background-menu.png");
  game.load.spritesheet("botaoConfig","imagens/botaoconfig.png",261,261,2);
  game.load.spritesheet("botaoPlay","imagens/botaoplay.png",261,261,2);
  game.load.spritesheet("botaoInfo","imagens/botaoinfo.png",261,261,2);
  game.load.spritesheet("casabotao","imagens/casabotao.png",724,455,2);
  game.load.spritesheet("lojabotao","imagens/lojabotao.png",754,455,2);
  game.load.spritesheet("levelbotao01","imagens/menufase1/botao01sprite.png",623,626);
  game.load.spritesheet("levelbotao02","imagens/menufase1/botao02sprite.png",623,625);
  game.load.atlasJSONHash("girinos","imagens/puzzle1/girinos.png","imagens/puzzle1/girinos.json");
  game.load.atlasJSONHash('moveis','imagens/puzzle1/Moveis.png','imagens/puzzle1/Moveis.json'); //sprisheet dos moveis puzzle1
  game.load.atlasJSONHash('itenspegaveis','imagens/puzzle2/itenspegaveis.png','imagens/puzzle2/itenspegaveis.json'); // sprisheet dos itens puzzle2
  game.load.atlasJSONHash('botoes','imagens/interface/botoes.png','imagens/interface/botoes.json');
  game.load.atlasJSONHash('retratil','imagens/interface/retratil.png','imagens/interface/retratil.json');
  game.load.atlasJSONHash('itenspegaveisPB',"imagens/puzzle2/itenspegaveisPB.png","imagens/puzzle2/itenspegaveisPB.json");
  game.load.image("backgroundlevels","imagens/menulevels/background.png");
  game.load.image("outraslojas","imagens/menulevels/outraslojascortadas.png");
  game.load.image("rua","imagens/menulevels/ruacortada.png");
  game.load.image("cenariolv01","imagens/menufase1/cenariocasa.png");
  game.load.image("logotipo","imagens/logo.png");
  game.load.image("dialogo","imagens/interface/balaodialogo.png");
  game.load.image("conf","imagens/interface/janelaconfiguracao.png");
  game.load.image("ajuda","imagens/interface/janelaajuda.png");
  game.load.image("conclusao","imagens/interface/janelaconclusao.png");
  game.load.image("imagemcreditos","imagens/interface/telacreditos.png");
  game.load.image("instrucoes","imagens/interface/janelainstrucoes.png");
  game.load.image("revisao","imagens/interface/janelarevisao.png");
  game.load.image("cinza","imagens/sprites/cinza.png");
  game.load.image("cenariopuzzle02","imagens/puzzle2/cenariopuzzle02.png");
  game.load.image("seletor","imagens/puzzle2/seletorcortado.png");
  game.load.image("cenariopuzzle01","imagens/puzzle1/cenariopuzzle1.png");
  game.load.image("cenarioloja","imagens/menufase2/cenarioloja.png");
  game.load.spritesheet("botoesloja","imagens/menufase2/botoes.png",435,436);
  game.load.image("janelaconfirmacao","imagens/interface/janelaconfirmacao.png");
  game.load.image("bolsa","imagens/puzzle3/bolsa.png");
  game.load.image("fundoLoja","imagens/puzzle3/fundoLoja.png");
  game.load.atlasJSONHash("coletaveis","imagens/puzzle3/coletaveis.png","imagens/puzzle3/coletaveis.json");
  game.load.spritesheet("estrelas","imagens/interface/estrelas.png",161,155);
  game.load.atlasJSONHash("objetosPuzzle4","imagens/puzzle4/objetosPuzzle4.png","imagens/puzzle4/objetospuzzle4.json");
  game.load.image("fundoPuzzle4","imagens/puzzle4/Fundo.png");
  game.load.image("camada01","imagens/puzzle4/Camada1.png");
  game.load.image("camada02","imagens/puzzle4/camada2.png");
  game.load.image("camada03","imagens/puzzle4/camada3.png");
  game.load.image("camada04","imagens/puzzle4/camada4.png");
  game.load.image("camada05","imagens/puzzle4/camada5.png");
  game.load.image("bgNarrativas","imagens/narrativas/bg.png");
  game.load.atlasJSONHash("floppy","imagens/narrativas/sprites/FLOPPY/floppysprites.png","imagens/narrativas/sprites/FLOPPY/floppysprites.json");
  game.load.atlasJSONHash("jilo","imagens/narrativas/sprites/JILÓ/jilosprites.png","imagens/narrativas/sprites/JILÓ/jilosprites.json");
  game.load.atlasJSONHash("lolo","imagens/narrativas/sprites/lolo/lolosprites.png","imagens/narrativas/sprites/lolo/lolosprites.json");
  game.load.atlasJSONHash("helpo","imagens/interface/helpo.png","imagens/interface/helpo.json");
  game.load.image("folha","imagens/puzzle4/folha.png");
  game.load.image("revisaoPuzzle1","imagens/interface/revisaoPuzzle1.png");
  game.load.atlasJSONHash("revisao2","imagens/interface/revisao2.png","imagens/interface/revisao2.json");
  game.load.image("revisaoPuzzle3","imagens/interface/revisaonumeros.png");
  game.load.image("revisaoPuzzle4","imagens/interface/imagemRevisao4.png");
  game.load.spritesheet("caras","imagens/interface/pontuacao.png",623,769);
  game.load.atlasJSONHash("contagem","imagens/interface/contagem.png","imagens/interface/contagem.json");
  game.load.image("quadrado","imagens/interface/quadrado.png");
}
function create(){
  game.scale.scaleMode = Phaser.ScaleManager.aspectRatio;
  game.scale.pageAlignVertically = true;
  game.scale.pageAlignHorizontally = true;
  game.stage.backgroundColor = "0xc0fffd";
  gameAtual = new Phaser.ArraySet();
  menu();
}
function update(){
  game.scale.setShowAll();
  game.scale.refresh();
  switch(controladorAtt){
    case 1:
      atualizaJogo1();
    break;
    case 2:
      atualizaJogo2();
    break;
    case 3:
      atualizaJogo3();
    break;
    case 4:
      atualizaJogo4();
    break;
  }
}
function checaVez(){
  if(primeiraVez){
    primeiraVez = false;
    dialogoInicial();
  }
  else{
    levels();
  }
}
function levels(){
  if (controladorAtt>0){
    controladorAtt = 0;
  }
  gameAtual.removeAll(true);
  interfaceAtual.removeAll(true);
  estaNoJogo = false;
  let imgLevel01 = game.add.image(0,0,"backgroundlevels");
  imgLevel01.width = 1920;
  imgLevel01.height = 1080;
  interfaceAtual.add(imgLevel01);
  let botaoLevel1 = game.add.button(300,60,"casabotao",level1,this,1,0,1);
  botaoLevel1.width = 725;
  botaoLevel1.height = 455;
  let imgLevel02 = game.add.image(0,220,"outraslojas");
  imgLevel02.width = 1820;
  imgLevel02.height = 729;
  interfaceAtual.add(imgLevel02);
  let botaoLevel2 = game.add.button(700,580,"lojabotao",level2,this,1,0,1);
  botaoLevel2.width = 755;
  botaoLevel2.height = 455;
  interfaceAtual.add(botaoLevel1);
  interfaceAtual.add(botaoLevel2);
  let imgLevel03 = game.add.image(60,570,"rua");
  imgLevel03.width = 1836;
  imgLevel03.height = 509;
  interfaceAtual.add(imgLevel03);
  menuPersistente();
}
function creditos(){
  if (controladorAtt>0){
    controladorAtt = 0;
  }
  gameAtual.removeAll(true);
  interfaceAtual.removeAll(true);
  let imagemCreditos = game.add.image(0,0,"imagemcreditos");
  imagemCreditos.width = 1920;
  imagemCreditos.height = 1080;
  interfaceAtual.add(imagemCreditos);
  botaoVoltar = game.add.button(200,850,"botoes",menu,this,23,23,22);
  botaoVoltar.width = 140;
  botaoVoltar.height = 150;
  interfaceAtual.add(botaoVoltar);
  menuPersistente();
}
function configuracoes(){
  gameAtual.removeAll(true);
  interfaceAtual.removeAll(true);
  imagemConfig = game.add.image(200,200,"conf");
  interfaceAtual.add(imagemConfig);
  botaoVoltar = game.add.button(300,700,"botoes",menu,this,23,23,22);
  botaoVoltar.width = 150;
  botaoVoltar.height = 150;
  interfaceAtual.add(botaoVoltar);
  menuPersistente();
}

// Menu principal
function menu(){
  if (controladorAtt>0){
    controladorAtt = 0;
  }
  interfaceAtual.removeAll(true);
  interfaceAtual.add(game.add.image(0,0,'background-menu'));
  estaNoJogo = false;
  estaNoLevel = false;
  botaoConfig = game.add.button(1200,700,'botoes',configuracoes,this,5,5,4);
  botaoConfig.width=230;
  botaoConfig.height=250;
  interfaceAtual.add(botaoConfig);
  botaoPlay = game.add.button(850,700,'botoes',checaVez,this,19,19,18);
  botaoPlay.width=230;
  botaoPlay.height=250;
  interfaceAtual.add(botaoPlay);
  botaoInfo = game.add.button(500,700,'botoes',creditos,this,9,9,8);
  botaoInfo.width=230;
  botaoInfo.height=250;
  interfaceAtual.add(botaoInfo);
  logo = game.add.image(50,50,"logotipo");
  logo.width=300;
  logo.height=300;
  interfaceAtual.add(logo);
}

// Primeiro diálogo
function dialogoInicial(){
  let controlaTexto = 0;
  interfaceAtual.removeAll(true);
  let imgfase01 = game.add.image(0,0,"bgNarrativas");
  interfaceAtual.add(imgfase01);
  let vetorTexto = [{nome:"Floppy", texto:"Lôlô! Lôlô!\nVeja só! Esse é o convite que fiz para a minha festinha!"},{nome:"Lolô",texto:"Olha só! Está muito bem feito Floppy!"},{nome:"Floppy",texto:"Obrigado! Estou muito animado para ela!\nFinalmente vou poder conhecer os nossos outros primos que vivem fora."},{nome:"Lolô",texto:"Fico feliz por você, vai ser uma experiência únic…\nO que foi? Por que essa cara triste?"},{nome:"Floppy",texto:"Quero muito conhecê-los, mas não sei como irei conversar com eles.\nMamãe disse que eles não falam português muito bem, e sim um idioma estranho\nchamado espe-, espo-, esp-..."},{nome:"Lolô",texto:"Esperanto?"},{nome:"Floppy",texto:"Sim, esse mesmo e eu não sei nada sobre…"},{nome:"Lolô",texto:"O esperanto é uma língua criada para que ser usada por todos.\nEla possui várias palavras tiradas do português, do inglês, do francês e de outras\nlínguas conhecidas!"},{nome:"Floppy",texto:"Nossa eu não sabia que existia um idioma assim!\nMas como eu vou aprender isso?"},{nome:"Lolô",texto:"Calma, calma. Olha só, eu sei falar esperanto e não é tão difícil..."},{nome:"Floppy",texto:"VOCÊ SABE?!"},{nome:"Lolô",texto:"Claro! O que acha de irmos ajeitar os preparativos para sua festa enquanto eu\nte ensino sobre?"},{nome:"Floppy",texto:"Eu adoraria!"},{nome:"Jiló",texto:"Oi pessoal, do que estão falando?"},{nome:"Floppy",texto:"O Lôlô vai me ensinar esperanto!"},{nome:"Jiló",texto:"Aquela língua estranha e boba que a sua mãe falou?"},{nome:"Floppy",texto:"JILÓ!"},{nome:"Lolô",texto:"Gostaria de nos ajudar Jiló?"},{nome:"Jiló",texto:"É, pode ser né..."}];
  let floppy = game.add.image(100,300,"floppy",0);
  interfaceAtual.add(floppy);
  let lolo = game.add.image(1000,300,"lolo",0);
  interfaceAtual.add(lolo);
  let jilo = game.add.image(500,300,"jilo",0);
  interfaceAtual.add(jilo);
  jilo.visible = false;
  let balaoDialogo = game.add.image(400,700,"dialogo");
  balaoDialogo.width = 1269;
  balaoDialogo.height = 268;
  interfaceAtual.add(balaoDialogo);
  let nome = game.add.text(450,750,vetorTexto[controlaTexto].nome);
  nome.font = "Luckiest Guy";
  let dialogo = game.add.text(450,800,vetorTexto[controlaTexto].texto);
  dialogo.font = "Montserrat";
  interfaceAtual.add(nome);
  interfaceAtual.add(dialogo);
  let botaoAvancar = game.add.button(1700,850,"botoes",avancar,this,3,3,2);
  botaoAvancar.width = 90;
  botaoAvancar.height = 100;
  let botaoRetroceder = game.add.button(280,850,"botoes",retroceder,this,23,23,22);
  botaoRetroceder.width = 90;
  botaoRetroceder.height = 100;
  let irLevels = game.add.button(1700,700,"botoes",levels,this,13,13,12);
  irLevels.width = 90;
  irLevels.height = 100;
  interfaceAtual.add(botaoAvancar);
  interfaceAtual.add(botaoRetroceder);
  interfaceAtual.add(irLevels);
  function retroceder(){
    if(controlaTexto>0)
      controlaTexto--;
    nome.setText(vetorTexto[controlaTexto].nome);
    dialogo.setText(vetorTexto[controlaTexto].texto);
    checaSprite();
  }
  function avancar(){
    if (controlaTexto==vetorTexto.length-1)
      levels();
    if (controlaTexto<vetorTexto.length-1)
      controlaTexto++;
    nome.setText(vetorTexto[controlaTexto].nome);
    dialogo.setText(vetorTexto[controlaTexto].texto);
    checaSprite();
  }
  function checaSprite(){
    switch(controlaTexto){
      case 0:
        floppy.frame = 0;
        lolo.frame = 2;
      break;
      case 1:
        floppy.frame = 0;
        lolo.frame = 2;
      break;
      case 2:
        floppy.frame = 0;
        lolo.frame = 2;
      break;
      case 3:
        floppy.frame = 2;
        lolo.frame = 2;
      break;
      case 4:
        floppy.frame = 2;
        lolo.frame = 2;
      break;
      case 5:
        floppy.frame = 2;
        lolo.frame = 1;
      break;
      case 6:
        floppy.frame = 2;
        lolo.frame = 1;
      break;
      case 7:
        floppy.frame = 2;
        lolo.frame = 2;
      break;
      case 8:
        floppy.frame = 6;
        lolo.frame = 2;
      break;
      case 9:
        floppy.frame = 6;
        lolo.frame = 3;
      break;
      case 10:
        floppy.frame = 0;
        lolo.frame = 3;
      break;
      case 11:
        floppy.frame = 0;
        lolo.frame = 2;
      break;
      case 12:
        floppy.frame = 0;
        lolo.frame = 2;
      break;
      case 13:
        jilo.visible = true;
        floppy.frame = 0;
        jilo.frame = 0;
        lolo.frame = 2;
      break;
      case 14:
        floppy.frame = 0;
        jilo.frame = 0;
        lolo.frame = 2;
      break;
      case 15:
        floppy.frame = 0;
        jilo.frame = 7;
        lolo.frame = 2;
      break;
      case 16:
        floppy.frame = 4;
        jilo.frame = 7;
        lolo.frame = 2;
      break;
      case 17:
        floppy.frame = 4;
        jilo.frame = 7;
        lolo.frame = 6;
      break;
      case 18:
        floppy.frame = 4;
        jilo.frame = 7;
        lolo.frame = 6;
      break;
    }
  }
  menuPersistente();
}

// Menu persistente
function menuPersistente(){
  verificadorRetratil = false;
  let btRetratil = game.add.button(100,10,"retratil",funcaoRetratil,this);
  btRetratil.width = 600;
  btRetratil.height = 120;
  let btHome = game.add.button(100,10,"botoes",janelaConfirmacao1,this,15,15,14);
  btHome.width = 90;
  btHome.height = 100;
  let btConf = game.add.button(400,10,"botoes",popConf,this,5,5,4);
  btConf.width = 90;
  btConf.height = 100;
  let btLevels = game.add.button(200,10,"botoes",janelaConfirmacao2,this,13,13,12);
  btLevels.width = 90;
  btLevels.height = 100;
  let btAjuda = game.add.button(300,10,"botoes",popAjuda,this,1,1,0);
  btAjuda.width = 90;
  btAjuda.height = 100;
  interfaceAtual.add(btHome);
  interfaceAtual.add(btConf);
  interfaceAtual.add(btLevels);
  interfaceAtual.add(btAjuda);
  interfaceAtual.add(btRetratil);
  funcaoRetratil();
  function funcaoRetratil(){
    btHome.visible = false;
    btConf.visible = false;
    btAjuda.visible = false;
    btRetratil.visible = false;
    btLevels.visible = false;
    let btHomeSprite;
    let btConfSprite;
    let btLevelsSprite;
    let btAjudaSprite
    let btRetratilSprite;
    if (verificadorRetratil) {
      btRetratilSprite = game.add.sprite(-129,10,"retratil",0);
      btHomeSprite = game.add.sprite(-90,10,"botoes",15);
      btConfSprite = game.add.sprite(-90,10,"botoes",5);
      btLevelsSprite = game.add.sprite(-90,10,"botoes",13);
      btAjudaSprite = game.add.sprite(-90,10,"botoes",1);
      btHomeSprite.width = 90;
      btHomeSprite.height = 100;
      btConfSprite.width = 90;
      btConfSprite.height = 100;
      btRetratilSprite.width = 600;
      btRetratilSprite.height = 120;
      btLevelsSprite.width = 90;
      btLevelsSprite.height = 100;
      btAjudaSprite.width = 90;
      btAjudaSprite.height = 100;
      let efeitoRetratil = game.add.tween(btRetratilSprite);
      let efeitoHome = game.add.tween(btHomeSprite);
      let efeitoConf = game.add.tween(btConfSprite);
      let efeitoLevels = game.add.tween(btLevelsSprite);
      let efeitoAjuda = game.add.tween(btAjudaSprite);
      efeitoHome.to({x:100},1000,Phaser.Easing.Bounce.Out);
      efeitoHome.start();
      efeitoConf.to({x:400},1000,Phaser.Easing.Bounce.Out);
      efeitoConf.start();
      efeitoAjuda.to({x:300},1000,Phaser.Easing.Bounce.Out);
      efeitoAjuda.start();
      efeitoRetratil.to({x:0},1000,Phaser.Easing.Bounce.Out);
      efeitoRetratil.start();
      efeitoLevels.to({x:200},1000,Phaser.Easing.Bounce.Out);
      efeitoLevels.start();
    efeitoRetratil.onComplete.add(sentidoRetratil2,this);
      verificadorRetratil = false;
    }
    else {
      btRetratilSprite = game.add.sprite(500,10,"retratil",1);
      btHomeSprite = game.add.sprite(100,10,"botoes",15);
      btConfSprite = game.add.sprite(400,10,"botoes",5);
      btLevelsSprite = game.add.sprite(200,10,"botoes",13);
      btAjudaSprite = game.add.sprite(300,10,"botoes",1);
      btHomeSprite.width = 90;
      btHomeSprite.height = 100;
      btConfSprite.width = 90;
      btConfSprite.height = 100;
      btRetratilSprite.width = 139;
      btRetratilSprite.height = 120;
      btLevelsSprite.width = 90;
      btLevelsSprite.height = 100;
      btAjudaSprite.width = 90;
      btAjudaSprite.height = 100;
      let efeitoHome = game.add.tween(btHomeSprite);
      let efeitoConf = game.add.tween(btConfSprite);
      let efeitoRetratil = game.add.tween(btRetratilSprite);
      let efeitoLevels = game.add.tween(btLevelsSprite);
      let efeitoAjuda = game.add.tween(btAjudaSprite);
      efeitoHome.to({x:-200},1000,Phaser.Easing.Bounce.Out);
      efeitoHome.start();
      efeitoConf.to({x:-200},1000,Phaser.Easing.Bounce.Out);
      efeitoConf.start();
      efeitoAjuda.to({x:-200},1000,Phaser.Easing.Bounce.Out);
      efeitoAjuda.start();
      efeitoRetratil.to({x:0},1000,Phaser.Easing.Bounce.Out);
      efeitoRetratil.start();
      efeitoLevels.to({x:-200},1000,Phaser.Easing.Bounce.Out);
      efeitoLevels.start();
      verificadorRetratil = true;
      efeitoRetratil.onComplete.add(sentidoRetratil,this);
    }
    function sentidoRetratil(){
      btHomeSprite.destroy();
      btConfSprite.destroy();
      btRetratilSprite.destroy();
      btLevelsSprite.destroy();
      btAjudaSprite.destroy();
      btRetratil.frame = 1;
      btRetratil.width = 139;
      btRetratil.height = 120;
      btRetratil.visible = true;
      btRetratil.x = 0;
    }
    function sentidoRetratil2(){
      btHomeSprite.destroy();
      btConfSprite.destroy();
      btRetratilSprite.destroy();
      btLevelsSprite.destroy();
      btAjudaSprite.destroy();
      btRetratil.x = 0;
      btRetratil.frame = 0;
      btRetratil.width = 600;
      btRetratil.height = 120;
      btHome.visible = true;
      btConf.visible = true;
      btRetratil.visible = true;
      btLevels.visible = true;
      btAjuda.visible = true;
    }
  }
}
function level1(){
  interfaceAtual.removeAll(true);
  let imgfase01 = game.add.image(0,0,"cenariolv01");
  imgfase01.width = 1920;
  imgfase01.height = 1080;
  interfaceAtual.add(imgfase01);
  let botaoModulo1 = game.add.button(650,100,"levelbotao01",iniciaPuzzleUm,this,1,0,1);
  botaoModulo1.width = 312;
  botaoModulo1.height = 312;
  let botaoModulo2 = game.add.button(1050,400,"levelbotao02",iniciaPuzzleDois,this,1,0,1);
  botaoModulo2.width = 312;
  botaoModulo2.height = 312;
  interfaceAtual.add(botaoModulo1);
  interfaceAtual.add(botaoModulo2);
  let botaoVoltar = game.add.button(100,900,"botoes",levels,this,23,23,22);
  botaoVoltar.width = 140;
  botaoVoltar.height = 120;
  interfaceAtual.add(botaoVoltar);
  menuPersistente();
}
function level2(){
  interfaceAtual.removeAll(true);
  let imgfase02 = game.add.image(0,0,"cenarioloja");
  imgfase02.width = 1920;
  imgfase02.height = 1080;
  let botaoVoltar = game.add.button(100,900,"botoes",levels,this,23,23,22);
  botaoVoltar.width = 140;
  botaoVoltar.height = 120;
  interfaceAtual.add(botaoVoltar);
  let botao1 = game.add.button(1150,200,"botoesloja",iniciaPuzzleTres,this,1,0,1);
  botao1.width = 150;
  botao1.height = 150;
  let botao2 = game.add.button(1410,600,"botoesloja",iniciaPuzzle4,this,3,2,3);
  botao2.width = 150;
  botao2.height = 150;
  interfaceAtual.add(imgfase02);
  interfaceAtual.add(botao1);
  interfaceAtual.add(botao2);
  menuPersistente();

}
function popConf(){
  let compConfig = new Phaser.ArraySet();
  let janelaConf = game.add.image(150,100,"conf");
  janelaConf.width = 1590;
  janelaConf.height = 818;
  let btFechar = game.add.button(1580,100,"botoes",fechar,this,11,11,10);
  btFechar.width = 144;
  btFechar.height = 155;
  compConfig.add(janelaConf);
  compConfig.add(btFechar);
  function fechar(){
    compConfig.removeAll(true);
  }
}
  function popAjuda(){
    let compAjuda = new Phaser.ArraySet();
    let controlepop = 0;
    let janelaAjuda = game.add.image(150,150,"ajuda");
    janelaAjuda.width = 1590;
    janelaAjuda.height = 818;
    let imagemRevisao = game.add.image(450,300,"helpo",0);
    compAjuda.add(imagemRevisao);
    let btAvancar = game.add.button(1450,690,"botoes",proximo,this,3,3,2);
    let btVoltar = game.add.button(350,690,"botoes",anterior,this,23,23,22);
    let btFechar = game.add.button(1590,150,"botoes",fechar,this,11,11,10);
    btFechar.width = 144;
    btFechar.height = 155;
    compAjuda.add(janelaAjuda);
    compAjuda.add(btFechar);
    compAjuda.add(btAvancar);
    compAjuda.add(btVoltar);
    function proximo(){
      if(controlepop<3){
        controlepop++;
      }
      imagemRevisao.frame = controlepop;
    }
    function anterior(){
      if(controlepop>0){
        controlepop--;
      }
      imagemRevisao.frame = controlepop;
    }
    function fechar(){
      compAjuda.removeAll(true);
    }
  }
  function popRevisao(){
    let compRevisao = new Phaser.ArraySet();
    let janelaRevisao = game.add.image(150,150,"revisao");
    janelaRevisao.width = 1590;
    janelaRevisao.height = 818;
    let btFechar = game.add.button(1590,150,"botoes",fechar,this,11,11,10);
    btFechar.width = 144;
    btFechar.height = 155;
    compRevisao.add(janelaRevisao);
    compRevisao.add(btFechar);
    switch(controladorAtt){
        case 1:
        let imagemR1 = game.add.image(650,310,"revisaoPuzzle1");
        compRevisao.add(imagemR1);
        break;
        case 2:
        let imagem1 = game.add.image(650,300,"revisao2",1);
        compRevisao.add(imagem1);
        let botao1 = game.add.button(1420,740,"botoes",avancar,this,3,3,2);
        let botao2 = game.add.button(480,740,"botoes",retroceder,this,23,23,22);
        compRevisao.add(botao1);
        compRevisao.add(botao2);
        function avancar(){
          imagem1.frame = 0;
        }
        function retroceder(){
          imagem1.frame = 1;
        }
        break;
        case 3:
        let imagemR3 = game.add.image(500,300,"revisaoPuzzle3");
        imagemR3.width = 960;
        imagemR3.height = 540;
        compRevisao.add(imagemR3);
        break;
        case 4:
        let imagemR4 = game.add.image(750,300,"revisaoPuzzle4");
        imagemR4.scale.x = 0.6;
        imagemR4.scale.y = 0.6;
        compRevisao.add(imagemR4);
        break;
    }
    function fechar(){
      compRevisao.removeAll(true);
    }
  }

function instrucao() {
    let compInstrucao = new Phaser.ArraySet();
    let instrucaoUm = game.add.image(150,150,"instrucoes");
    instrucaoUm.width = 1590;
    instrucaoUm.height = 818;
    interfaceAtual.add(instrucaoUm);
    let btFechar = game.add.button(1585,150,"botoes",fechar,this,11,11,10);
    btFechar.width = 144;
    btFechar.height = 155;
    compInstrucao.add(instrucaoUm);
    compInstrucao.add(btFechar);

    switch(controladorAtt){
        case 1:
          let texto1 = game.add.text(450,400,"Os priminhos girinos de Floppy são girinos muito brincalhões,\nmas bagunçaram a casa toda e se sujaramde tinta.\nSão muitos girinos de muitas cores, será que\nvocê consegue pegar todos? Clique com o mouse sobre o\ngirino da cor certa.\n\nCheque a revisão para descobrir de que cor eles se pintaram!");
          compInstrucao.add(texto1);
          texto1.font = "Montserrat";
        break;
        case 2:
          let texto2 = game.add.text(450,400,"Agora que você arrumou os priminhos, hora de fazer uma brincadeira\nmais quietinha. Você e Lolô vão ensinar as partes da casa e seus\nmóveis para os priminhos de Floppy, usando uma casinha de bonecas.\n\nCheque a revisão para verificar se está tudo correto!");
          compInstrucao.add(texto2);
          texto2.font = "Montserrat";
        break;
        case 3:
          let texto3 = game.add.text(450,400,"Vamos nos preparar para a festa! Temos um número\ncerto de cada item para coletar. Você consegue\nlembrar de todos? Cuidado para não pegar os itens\nfora de ordem, hein?\n\nCheque a revisão para verificar se está tudo correto!");
          compInstrucao.add(texto3);
          texto3.font = "Montserrat";
        break;
        case 4:
          let texto4 = game.add.text(450,400,"Ih! Ainda tem mais coisa pra pegar. Mas o estoque acabou. Temos\nque ir até o galpão, que está todo bagunçado, e procurar os itens\nque faltam.\n\nVocê consegue enxergar os itens que faltam? Basta clicar nos itens\nda lista da revisão e arrastá-los para a sacola.\n\nNão esqueça de checar a revisão para ver o que falta!");
          compInstrucao.add(texto4);
          texto4.font = "Montserrat";
        break;
    }

    function fechar(){
      compInstrucao.removeAll(true);
    }
}

function janelaConfirmacao1(){
  if(estaNoJogo){
    let compConfirmacao = new Phaser.ArraySet();
    let janela = game.add.image(530,300,"janelaconfirmacao");
    janela.width = 970;
    janela.height = 516;
    let botaoverde = game.add.button(1050,650,"botoes",confirmar,this,7,7,6);
    botaoverde.width = 100;
    botaoverde.height = 100;
    let botaovermelho = game.add.button(850,650,"botoes",fechar,this,11,11,10);
    botaovermelho.width = 100;
    botaovermelho.height = 100;
    compConfirmacao.add(janela);
    compConfirmacao.add(botaoverde);
    compConfirmacao.add(botaovermelho);
    function confirmar(){
      compConfirmacao.removeAll(true);
      menu();
    }
    function fechar(){
      compConfirmacao.removeAll(true);
    }
  }
  else{
    menu();
  }
}
function janelaConfirmacao2(){
  if(estaNoJogo){
    let compConfirmacao = new Phaser.ArraySet();
    let janela = game.add.image(530,300,"janelaconfirmacao");
    janela.width = 970;
    janela.height = 516;
    let botaoverde = game.add.button(1050,650,"botoes",confirmar,this,7,7,6);
    botaoverde.width = 100;
    botaoverde.height = 100;
    let botaovermelho = game.add.button(850,650,"botoes",fechar,this,11,11,10);
    botaovermelho.width = 100;
    botaovermelho.height = 100;
    compConfirmacao.add(janela);
    compConfirmacao.add(botaoverde);
    compConfirmacao.add(botaovermelho);
    function confirmar(){
      compConfirmacao.removeAll(true);
      levels();
    }
    function fechar(){
      compConfirmacao.removeAll(true);
    }
  }
  else{
    levels();
  }
}
function janelaConfirmacao3(){
    let compConfirmacao = new Phaser.ArraySet();
    let janela = game.add.image(530,300,"janelaconfirmacao");
    janela.width = 970;
    janela.height = 516;
    let botaoverde = game.add.button(1050,650,"botoes",confirmar,this,7,7,6);
    botaoverde.width = 100;
    botaoverde.height = 100;
    let botaovermelho = game.add.button(850,650,"botoes",fechar,this,11,11,10);
    botaovermelho.width = 100;
    botaovermelho.height = 100;
    compConfirmacao.add(janela);
    compConfirmacao.add(botaoverde);
    compConfirmacao.add(botaovermelho);
    function confirmar(){
      compConfirmacao.removeAll(true);
      menu();
    }
    function fechar(){
      compConfirmacao.removeAll(true);

    }
}
function pause(){
  game.paused = true;
  game.input.onDown.add(unpause, self);
  let retangulo = game.add.graphics(0,0);
  retangulo.beginFill("gray",0.5);
  retangulo.drawRect(0,0,1920,1080);
  retangulo.endFill();
  let texto = game.add.text(700,400,"Clique na tela para continuar");
  texto.font = "Luckiest Guy";
  texto.fill = "white";
  function unpause(){
    game.paused = false;
    texto.destroy();
    retangulo.destroy();
  }

}

function randomizador(item){
  let resultado = game.rnd.integerInRange(0,9);
  if(resultado!=item){
    guardaTrava++;
    if(guardaTrava>2){
      resultado=item;
      guardaTrava=0;
    }
  }
  else{
    guardaTrava=0;
  }
  return resultado;
}

function relogio(){
  contadorMilesimos++;
  if(contadorMilesimos>=60){
    contadorSegundos++;
    contadorMilesimos=0;
  }
  if(contadorSegundos>=60){
    contadorMinutos++;
    contadorSegundos=0;
  }
}
