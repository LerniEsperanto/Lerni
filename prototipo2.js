let moveis;
let controle2 = 0;
let cama,chuveiro,abajour,criadomudo,estante,fogao,geladeira,guardaroupa,mesinha,microondas,piabanheiro,piacozinha,quadros,sofa,tv,vaso,cinza;
let terminou=false;
let objetoTexto;
let botaoRevisaoDois,botaoPauseDois;
let exibetempo;
let triste,feliz;
function iniciaPuzzleDois(){
interfaceAtual.removeAll(true);
terminou = false;
estaNoJogo = true;
contadorMinutos=0;
contadorSegundos=0;
contadorMilesimos=0;
let imagemCenario = game.add.image(0,0,"cenariopuzzle02");
imagemCenario.width = 1920;
imagemCenario.height = 1080;
let imagemSeletor= game.add.image(50-fatorFonte*5,300,"seletor");
imagemSeletor.width = 286+fatorFonte*10;
imagemSeletor.height = 456+fatorFonte*5;
interfaceAtual.add(imagemSeletor);
interfaceAtual.add(imagemCenario);
let botao1 = game.add.button(50-fatorFonte*5,800,"botoes",anterior,this,23,23,22);
let botao2 = game.add.button(250-fatorFonte*5,800,"botoes",proximo,this,3,3,2);
botao1.width = 100;
botao1.height = 110;
botao2.width = 100;
botao2.height = 110;
moveis = game.add.group();
cama = game.add.sprite(55,480,"itenspegaveis",1);
cama.inputEnabled = true;
cama.input.enableDrag();
cama.certo = false;
cama.texto = "lito";
cama.originalX = 55;
cama.originalY = 480;
cama.arrastado = false;
cama.events.onInputDown.add(mudaStatus,this);
cama.events.onInputUp.add(mudaStatus2,this);
chuveiro = game.add.sprite(160,540,"itenspegaveis",2);
chuveiro.inputEnabled = true;
chuveiro.input.enableDrag();
chuveiro.certo = false;
chuveiro.texto = "duŝilo";
chuveiro.originalX = 120;
chuveiro.originalY = 440;
chuveiro.arrastado = false;
chuveiro.events.onInputDown.add(mudaStatus,this);
chuveiro.events.onInputUp.add(mudaStatus2,this);
abajour = game.add.sprite(100,580,"itenspegaveis",0);
abajour.inputEnabled = true;
abajour.input.enableDrag();
abajour.certo = false;
abajour.texto = "lampo";
abajour.originalX = 160;
abajour.originalY = 540;
abajour.arrastado = false;
abajour.events.onInputDown.add(mudaStatus,this);
abajour.events.onInputUp.add(mudaStatus2,this);
criadomudo = game.add.sprite(100,580,"itenspegaveis",3);
criadomudo.inputEnabled = true;
criadomudo.input.enableDrag();
criadomudo.certo = false;
criadomudo.texto = "komodo";
criadomudo.originalX = 150;
criadomudo.originalY = 540;
criadomudo.arrastado = false;
criadomudo.events.onInputDown.add(mudaStatus,this);
criadomudo.events.onInputUp.add(mudaStatus2,this);
estante = game.add.sprite(100,580,"itenspegaveis",4);
estante.inputEnabled = true;
estante.input.enableDrag();
estante.certo = false;
estante.texto = "libroŝranko";
estante.originalX = 150;
estante.originalY = 420;
estante.arrastado = false;
estante.events.onInputDown.add(mudaStatus,this);
estante.events.onInputUp.add(mudaStatus2,this);
fogao = game.add.sprite(100,580,"itenspegaveis",5);
fogao.inputEnabled = true;
fogao.input.enableDrag();
fogao.certo = false;
fogao.texto = "kuirilo";
fogao.originalX = 130;
fogao.originalY = 430;
fogao.arrastado = false;
fogao.events.onInputDown.add(mudaStatus,this);
fogao.events.onInputUp.add(mudaStatus2,this);
geladeira = game.add.sprite(100,580,"itenspegaveis",6);
geladeira.inputEnabled = true;
geladeira.input.enableDrag();
geladeira.certo = false;
geladeira.texto = "glaciŝranko";
geladeira.originalX = 130;
geladeira.originalY = 440;
geladeira.arrastado = false;
geladeira.events.onInputDown.add(mudaStatus,this);
geladeira.events.onInputUp.add(mudaStatus2,this);
guardaroupa = game.add.sprite(100,580,"itenspegaveis",7);
guardaroupa.inputEnabled = true;
guardaroupa.input.enableDrag();
guardaroupa.certo = false;
guardaroupa.texto = "vestoŝranko";
guardaroupa.originalX = 110;
guardaroupa.originalY = 440;
guardaroupa.arrastado = false;
guardaroupa.events.onInputDown.add(mudaStatus,this);
guardaroupa.events.onInputUp.add(mudaStatus2,this);
mesinha = game.add.sprite(100,580,"itenspegaveis",8);
mesinha.inputEnabled = true;
mesinha.input.enableDrag();
mesinha.certo = false;
mesinha.texto = "tablo";
mesinha.originalX = 170;
mesinha.originalY = 530;
mesinha.arrastado = false;
mesinha.events.onInputDown.add(mudaStatus,this);
mesinha.events.onInputUp.add(mudaStatus2,this);
microondas = game.add.sprite(100,580,"itenspegaveis",9);
microondas.inputEnabled = true;
microondas.input.enableDrag();
microondas.certo = false;
microondas.texto = "mikroondoj";
microondas.originalX = 140;
microondas.originalY = 560;
microondas.arrastado = false;
microondas.events.onInputDown.add(mudaStatus,this);
microondas.events.onInputUp.add(mudaStatus2,this);
piabanheiro = game.add.sprite(100,580,"itenspegaveis",10);
piabanheiro.inputEnabled = true;
piabanheiro.input.enableDrag();
piabanheiro.certo = false;
piabanheiro.texto = "lavkuvo";
piabanheiro.originalX = 120;
piabanheiro.originalY = 430;
piabanheiro.arrastado = false;
piabanheiro.events.onInputDown.add(mudaStatus,this);
piabanheiro.events.onInputUp.add(mudaStatus2,this);
piacozinha = game.add.sprite(100,580,"itenspegaveis",11);
piacozinha.inputEnabled = true;
piacozinha.input.enableDrag();
piacozinha.certo = false;
piacozinha.texto = "lavopelvo";
piacozinha.originalX = 80;
piacozinha.originalY = 460;
piacozinha.arrastado = false;
piacozinha.events.onInputDown.add(mudaStatus,this);
piacozinha.events.onInputUp.add(mudaStatus2,this);
quadros = game.add.sprite(100,580,"itenspegaveis",12);
quadros.inputEnabled = true;
quadros.input.enableDrag();
quadros.certo = false;
quadros.texto = "Pentrartoj";
quadros.originalX = 130;
quadros.originalY = 500;
quadros.arrastado = false;
quadros.events.onInputDown.add(mudaStatus,this);
quadros.events.onInputUp.add(mudaStatus2,this);
sofa = game.add.sprite(100,580,"itenspegaveis",13);
sofa.inputEnabled = true;
sofa.input.enableDrag();
sofa.certo = false;
sofa.texto = "Sofo";
sofa.originalX = 80;
sofa.originalY = 500;
sofa.arrastado = false;
sofa.events.onInputDown.add(mudaStatus,this);
sofa.events.onInputUp.add(mudaStatus2,this);
tv = game.add.sprite(100,580,"itenspegaveis",14);
tv.inputEnabled = true;
tv.input.enableDrag();
tv.certo = false;
tv.texto = "Televido";
tv.originalX = 120;
tv.originalY = 450;
tv.arrastado = false;
tv.events.onInputDown.add(mudaStatus,this);
tv.events.onInputUp.add(mudaStatus2,this);
vaso = game.add.sprite(100,580,"itenspegaveis",15);
vaso.inputEnabled = true;
vaso.input.enableDrag();
vaso.certo = false;
vaso.texto = "florero";
vaso.originalX = 130;
vaso.originalY = 500;
vaso.arrastado = false;
vaso.events.onInputDown.add(mudaStatus,this);
vaso.events.onInputUp.add(mudaStatus2,this);
cinza = game.add.sprite(243,463,"itenspegaveisPB",0);
cinza.visible = false;
moveis.add(abajour);
moveis.add(cama);
moveis.add(chuveiro);
moveis.add(criadomudo);
moveis.add(estante);
moveis.add(fogao);
moveis.add(geladeira);
moveis.add(guardaroupa);
moveis.add(mesinha);
moveis.add(microondas);
moveis.add(piabanheiro);
moveis.add(piacozinha);
moveis.add(quadros);
moveis.add(sofa);
moveis.add(tv);
moveis.add(vaso);
moveis.setAllChildren('scale.x',0.8);
moveis.setAllChildren('scale.y',0.8);
moveis.getAt(0).visible = true;
for(let i=1; i<moveis.length; i++){
  moveis.getAt(i).visible = false;
}
triste = game.add.sprite(1750,500,"caras",0);
triste.scale.x = 0.2;
triste.scale.y = 0.2;
feliz = game.add.sprite(1750,800,"caras",1);
feliz.scale.x = 0.2;
feliz.scale.y = 0.2;
triste.visible = false;
feliz.visible = false;
interfaceAtual.add(triste);
interfaceAtual.add(feliz);
interfaceAtual.add(moveis);
interfaceAtual.add(cinza);
interfaceAtual.add(botao1);
interfaceAtual.add(botao2);
objetoTexto = game.add.text(80-fatorFonte*5,330,abajour.texto);
objetoTexto.font = "Luckiest Guy";
objetoTexto.fontSize = 40+fatorFonte;
interfaceAtual.add(objetoTexto);
exibetempo = game.add.text(1020,80,"");
exibetempo.font = "Luckiest Guy";
exibetempo.fontSize = 48+fatorFonte;
interfaceAtual.add(exibetempo);
menuPersistente();
botaoRevisaoDois = game.add.button(1770,100,"botoes",popRevisao,this,25,25,24);
botaoRevisaoDois.width = 130;
botaoRevisaoDois.height = 136;
botaoPauseDois = game.add.button(1770,250,"botoes",pause,this,17,17,16);
botaoPauseDois.width = 130;
botaoPauseDois.height = 136;
interfaceAtual.add(botaoRevisaoDois);
interfaceAtual.add(botaoPauseDois);
controladorAtt = 2;
//Instruções
instrucao();
}
function atualizaJogo2(){
  if((cama.certo)&&(chuveiro.certo)&&(abajour.certo)&&(criadomudo.certo)&&(estante.certo)&&(fogao.certo)&&(geladeira.certo)&&(guardaroupa.certo)&&(mesinha.certo)&&(microondas.certo)&&(piabanheiro.certo)&&(piacozinha.certo)&&(quadros.certo)&&(sofa.certo)&&(tv.certo)&&(vaso.certo)){
    terminarJogo();
  }
  else{
    checagem();
    relogio();
    mostraRelogio();
  }
}

function proximo(){
  if (controle2<moveis.length-1){
    controle2++;
  }
  cinza.frame=controle2;
  for(let i=0; i<moveis.length; i++){
    if(moveis.getAt(i).certo == false){
      moveis.getAt(i).x = moveis.getAt(i).originalX;
      moveis.getAt(i).y = moveis.getAt(i).originalY;
      moveis.getAt(i).visible = false;
    }
  }
  if (moveis.getAt(controle2).certo == true){
    cinza.visible = true;
    cinza.x = moveis.getAt(controle2).originalX;
    cinza.y = moveis.getAt(controle2).originalY;
  }
  else {
    cinza.visible = false;
    moveis.getAt(controle2).visible = true;
  }
    objetoTexto.setText(moveis.getAt(controle2).texto);
}

function anterior(){
  if (controle2>0){
    controle2--;
  }
  cinza.frame=controle2;
  for(let i=0; i<moveis.length; i++){
    if(moveis.getAt(i).certo == false){
      moveis.getAt(i).x = moveis.getAt(i).originalX;
      moveis.getAt(i).y = moveis.getAt(i).originalY;
      moveis.getAt(i).visible = false;
    }
  }
  if (moveis.getAt(controle2).certo == true){
    cinza.visible = true;
    cinza.x = moveis.getAt(controle2).originalX;
    cinza.y = moveis.getAt(controle2).originalY;
  }
  else {
    cinza.visible = false;
    moveis.getAt(controle2).visible = true;
  }
  objetoTexto.setText(moveis.getAt(controle2).texto);
}


function checagem(){
    if((cama.arrastado==true)){
      if((cama.x>100 && cama.x<900) && (cama.y>50 && cama.y<700)){
        feliz.visible = true;
        triste.visible = false;
        if((cama.x>450 && cama.x<700)&&(cama.y>200 && cama.y<500)){
          cama.certo = true;
          cama.input.disableDrag();
          cama.x = 520;
          cama.y = 510;
          cama.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((chuveiro.arrastado==true)){
      if((chuveiro.x>900 && chuveiro.x<1600) && (chuveiro.y>50 && chuveiro.y<700)){
        feliz.visible = true;
        triste.visible = false;
        if((chuveiro.x>1200 && chuveiro.x<1400)&&(chuveiro.y>200 && chuveiro.y<500)){
          chuveiro.certo = true;
          chuveiro.input.disableDrag();
          chuveiro.x = 1525;
          chuveiro.y = 365;
          chuveiro.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((abajour.arrastado==true)){
      if((abajour.x>200 && abajour.x<800) && (abajour.y>50 && abajour.y<700)){
        feliz.visible = true;
        triste.visible = false;
        if((abajour.x>400 && abajour.x<700)&&(abajour.y>200 && abajour.y<500)){
          abajour.certo = true;
          abajour.input.disableDrag();
          abajour.x = 470;
          abajour.y = 500;
          abajour.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((criadomudo.arrastado==true)){
      if((criadomudo.x>200 && criadomudo.x<800) && (criadomudo.y>50 && criadomudo.y<700)){
        feliz.visible = true;
        triste.visible = false;
        if((criadomudo.x>400 && criadomudo.x<700)&&(criadomudo.y>200 && criadomudo.y<500)){
          criadomudo.certo = true;
          criadomudo.input.disableDrag();
          criadomudo.x = 460;
          criadomudo.y = 550;
          criadomudo.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((estante.arrastado==true)){
      if((estante.x>200 && estante.x<800) && (estante.y>500 && estante.y<1000)){
        feliz.visible = true;
        triste.visible = false;
        if((estante.x>500 && estante.x<800)&&(estante.y>700 && estante.y<1000)){
          estante.certo = true;
          estante.input.disableDrag();
          estante.x = 830;
          estante.y = 775;
          estante.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((fogao.arrastado==true)){
      if((fogao.x>800 && fogao.x<1600) && (fogao.y>500 && fogao.y<1000)){
        feliz.visible = true;
        triste.visible = false;
        if((fogao.x>1000 && fogao.x<1400)&&(fogao.y>700 && fogao.y<1000)){
          fogao.certo = true;
          fogao.input.disableDrag();
          fogao.x = 1220;
          fogao.y = 760;
          fogao.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((geladeira.arrastado==true)){
      if((geladeira.x>800 && geladeira.x<1600) && (geladeira.y>500 && geladeira.y<1000)){
        feliz.visible = true;
        triste.visible = false;
        if((geladeira.x>1200 && geladeira.x<1600)&&(geladeira.y>700 && geladeira.y<1000)){
          geladeira.certo = true;
          geladeira.input.disableDrag();
          geladeira.x = 1550;
          geladeira.y = 780;
          geladeira.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((guardaroupa.arrastado==true)){
      if((guardaroupa.x>200 && guardaroupa.x<800) && (guardaroupa.y>50 && guardaroupa.y<700)){
        feliz.visible = true;
        triste.visible = false;
        if((guardaroupa.x>400 && guardaroupa.x<700)&&(guardaroupa.y>200 && guardaroupa.y<500)){
          guardaroupa.certo = true;
          guardaroupa.input.disableDrag();
          guardaroupa.x = 770;
          guardaroupa.y = 370;
          guardaroupa.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }

    if((mesinha.arrastado==true)){
      if((mesinha.x>200 && mesinha.x<800) && (mesinha.y>500 && mesinha.y<1000)){
        feliz.visible = true;
        triste.visible = false;
        if((mesinha.x>500 && mesinha.x<800)&&(mesinha.y>700 && mesinha.y<1000)){
          mesinha.certo = true;
          mesinha.input.disableDrag();
          mesinha.x = 640;
          mesinha.y = 925;
          mesinha.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((microondas.arrastado==true)){
      if((microondas.x>800 && microondas.x<1600) && (microondas.y>500 && microondas.y<1000)){
        feliz.visible = true;
        triste.visible = false;
        if((microondas.x>1200 && microondas.x<1600)&&(microondas.y>700 && microondas.y<1000)){
          microondas.certo = true;
          microondas.input.disableDrag();
          microondas.x = 1350;
          microondas.y = 840;
          microondas.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((piabanheiro.arrastado==true)){
      if((piabanheiro.x>900 && piabanheiro.x<1600) && (piabanheiro.y>50 && piabanheiro.y<700)){
        feliz.visible = true;
        triste.visible = false;
        if((piabanheiro.x>1200 && piabanheiro.x<1400)&&(piabanheiro.y>200 && piabanheiro.y<500)){
          piabanheiro.certo = true;
          piabanheiro.input.disableDrag();
          piabanheiro.x = 1250;
          piabanheiro.y = 370;
          piabanheiro.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((piacozinha.arrastado==true)){
      if((piacozinha.x>800 && piacozinha.x<1600) && (piacozinha.y>500 && piacozinha.y<1000)){
        feliz.visible = true;
        triste.visible = false;
        if((piacozinha.x>1200 && piacozinha.x<1600)&&(piacozinha.y>700 && piacozinha.y<1000)){
          piacozinha.certo = true;
          piacozinha.input.disableDrag();
          piacozinha.x = 1350;
          piacozinha.y = 850;
          piacozinha.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }

    if((quadros.arrastado==true)){
      if((quadros.x>200 && quadros.x<800) && (quadros.y>500 && quadros.y<1000)){
        feliz.visible = true;
        triste.visible = false;
        if((quadros.x>400 && quadros.x<600)&&(quadros.y>700 && quadros.y<1000)){
          quadros.certo = true;
          quadros.input.disableDrag();
          quadros.x = 690;
          quadros.y = 725;
          quadros.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((sofa.arrastado==true)){
      if((sofa.x>200 && sofa.x<800) && (sofa.y>500 && sofa.y<1000)){
        feliz.visible = true;
        triste.visible = false;
        if((sofa.x>400 && sofa.x<600)&&(sofa.y>700 && sofa.y<1000)){
          sofa.certo = true;
          sofa.input.disableDrag();
          sofa.x = 460;
          sofa.y = 915;
          sofa.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((tv.arrastado==true)){
      if((tv.x>200 && tv.x<800) && (tv.y>500 && tv.y<1000)){
        feliz.visible = true;
        triste.visible = false;
        if((tv.x>500 && tv.x<700)&&(tv.y>700 && tv.y<1000)){
          tv.certo = true;
          tv.input.disableDrag();
          tv.x = 720;
          tv.y = 875;
          tv.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
    if((vaso.arrastado==true)){
      if((vaso.x>900 && vaso.x<1600) && (vaso.y>50 && vaso.y<700)){
        feliz.visible = true;
        triste.visible = false;
        if((vaso.x>1200 && vaso.x<1400)&&(vaso.y>200 && vaso.y<500)){
          vaso.certo = true;
          vaso.input.disableDrag();
          vaso.x = 1400;
          vaso.y = 490;
          vaso.arrastado = false;
        }
      }
      else{
        feliz.visible = false;
        triste.visible = true;
      }
    }
}
function terminarJogo(){
  if(terminou==false){
    let botaoConclusao1,botaoConclusao2,janelaConclusao,retangulo;
    retangulo = game.add.graphics(0,0);
    retangulo.beginFill(0x000000,0.5);
    retangulo.drawRect(0,0,1920,1080);
    retangulo.endFill();
    janelaConclusao = game.add.image(300,100,"conclusao");
    botaoConclusao1 = game.add.button(600,700,"botoes",iniciaPuzzleDois,this,21,21,20);
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
    terminou = true;
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

function mostraRelogio(){
  if(contadorSegundos<10){
    exibetempo.setText(""+contadorMinutos+":0"+contadorSegundos);
  }
  else{
    exibetempo.setText(""+contadorMinutos+":"+contadorSegundos);
  }
}

function mudaStatus(sprite){
  sprite.arrastado = true;
}

function mudaStatus2(sprite){
  sprite.arrastado = false;
  feliz.visible = false;
  triste.visible = false;
}


function dialogoDois(){ // dialogo do segundo puzzle
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
  let irPuzzle2 = game.add.button(1700,700,"botoes",iniciaPuzzleDois,this,19,19,18);
  irPuzzle2.width = 90;
  irPuzzle2.height = 100;
  interfaceAtual.add(botaoAvancar);
  interfaceAtual.add(botaoRetroceder);
  interfaceAtual.add(irPuzzle2);
  function retroceder(){
    if(controlaTexto>0)
      controlaTexto--;
    nome.setText(vetorTexto[controlaTexto].nome);
    dialogo.setText(vetorTexto[controlaTexto].texto);
    checaSprite();
  }
  function avancar(){
    if (controlaTexto==vetorTexto.length-1)
      iniciaPuzzleDois();
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
