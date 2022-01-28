var bgImage
var bg
var player
var playerImage,shooterImage

function preload(){
  bgImage=loadImage("bg.jpeg")
  playerImage=loadImage("shooter_2.png")
  shooterImage=loadImage("shooter_3.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImage)
  bg.scale=1.1
  player=createSprite(displayWidth-1150,displayHeight-300,50,50)
  player.addImage(playerImage)
  player.scale=0.3
  player.setCollider("rectangle",0,0,300,300)
  
}

function draw() {
  background(255,255,255);  
  if (keyDown("UP_ARROW")){
    player.y-=30
  }
  if (keyDown("DOWN_ARROW")){
    player.y+=30
  }
  //if(keyWentDowm("space")){
   // player.addImage(shooterImage)
  //}
  //else if(keyWentUp("space")){
  //  player.addImage(playerImage)
  //}
  //drawSprites();
}