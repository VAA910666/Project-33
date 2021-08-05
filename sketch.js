var bg, bgImg;
var snow, snowImg;

function preload(){
  bgImg = loadImage("snow3.jpg");
 snowImg = loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,400);

 
 
  
}

function draw() {
  background(bgImg); 
  if(frameCount%65===0){
    snow = createSprite(400,20,50,50);
    snow.x = Math.round(random(50,750))
    snow.addImage(snowImg);
    snow.scale = 0.09
    snow.velocityY = 2;
  }
  console.log(frameCount); 
  
  drawSprites();


}