var bg,bgImg;
var player, shooterImg, shooter_shooting;
var nave1;
var nave;
var bala1;



function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  nave1=loadImage("assets/nave1.png");
  bgImg = loadImage("assets/espaco.avif");
  bala = loadImage("assets/bala.png");


}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.5

  bala1 = createSprite(20,20,20,20);
  bala1.addImage(bala);

//criando o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.15
  //  player.debug = true
  //  player.setCollider("rectangle",0,0,300,300)

  grupoTiros = new Group();
}

function draw() {
  background(0); 




  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
if(keyDown("UP_ARROW")){
  player.y = player.y-20
}
if(keyDown("DOWN_ARROW")){
 player.y = player.y+20
}

if(keyDown("SPACE")){
  Tiro();

}


//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada


//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço

spawnNaves();
drawSprites();

}

function Tiro(){
  var Tiro = createSprite(nave.x,nave.y);
  Tiro.addImage(bala);
  
  Tiro. VelocityX=5
  grupoTiros.add(Tiro) 


  
  }


function spawnNaves() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    nave = createSprite(1500,0,20,20)
    nave.addImage(nave1);
    nave.scale = 0.20
    nave.y = Math.round(random(10,800))
    
    nave.velocityX = -3;
    
    
    //atribua tempo de vida à variável
   
    
    
    }

}