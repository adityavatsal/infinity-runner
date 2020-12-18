var tower,towerimg
var door,doorimg
var climber,climberimg
var s,simg
var gameState="PLAY"
var go
var climbergrp
var gogrp
var doorgrp


function preload(){
  towerimg=loadImage("vertical.jpg")
  doorimg=loadImage("door.png")
  climberimg=loadImage("climber.png")
  simg=loadAnimation("modern.png")
  
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300)
  tower.addImage(towerimg)
  tower.velocityY=2

  s=createSprite(300,300,10,10)
  s.addAnimation("s",simg)
  s.scale=0.08
climbergrp=new Group()
gogrp=new Group()
doorgrp=new Group()

}

function draw(){
  background(0);
if(gameState=="PLAY"){
  if(tower.y>450){ 
    tower.y=300
  }
if(keyDown("space")){
  s.velocityY=-2
}
s.velocityY=s.velocityY+0.05
if(keyDown("right")){
  s.x+=5
}
if(keyDown("left")){
  s.x-=5
}
if(s.isTouching(climbergrp)){
  s.velocityY=0
}
if(s.isTouching(gogrp)||s.y>600){
  gameState="END"
}
doors()
}
else{
  tower.destroy()
  s.destroy()
  climbergrp.destroyEach()
  doorgrp.destroyEach()
  textSize(25)
  fill("yellow")
  text("GAME OVER",300,300)
}
 
  drawSprites()
}
function doors(){
  if(frameCount%300==0){
    door=createSprite(random(300,400),0)
    door.addImage(doorimg)
    door.velocityY=1
    door.lifetime=600
    doorgrp.add(door)
    door.visible=false
    s.depth=door.depth+1
    climber=createSprite(door.x,door.y+50)
    climber.addImage(climberimg)
    climber.velocityY=1
    climber.lifetime=600
    climbergrp.add(climber)
    go=createSprite(climber.x,climber.y+10,60,10)
    go.velocityY=1
    go.lifetime=600
    go.visible=false
    gogrp.add(go)

  }
}