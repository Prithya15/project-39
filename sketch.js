
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
var backgroundimg

function preload(){
  
  
  monkey_running =loadImage("sprite_0.png")
  //,"sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png"
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundimg= loadImage("forest.jpg")
 
}



function setup() {
createCanvas(400,400);
  
 monkey=createSprite(0,350,20,20); 
 monkey.addImage("moving",monkey_running);
 monkey.scale=0.1;
 //monkey.y=450;
 
 ground=createSprite(100,450,1000,10);
 ground.velocityX=0;
 //ground.x=ground.width/2
  
 FoodGroup = createGroup();
 obstacleGroup=createGroup();


}


function draw() {
  background(backgroundimg);

  if(ground.x<0){
      ground.x=ground.width/2;
  }
  
 if(keyDown("space")&& monkey.y>=100) {
        monkey.velocityY = -12;
 }

  
 textSize(20);
 survivalTime=Math.ceil(frameCount/frameRate())
 text("Survival Time:"+survivalTime,100,50);

 camera.position.y=monkey.y
 camera.position.x=monkey.x
 
 if(keyDown("right")) {
  monkey.x = monkey.x+7;
}
if (frameCount%100===0){
  fill("blue")
  text("gameover",50,300)
  monkey.hide()
  
}

 monkey.x=monkey.x
 monkey.y=monkey.y
 spawnBananas(); 
 spawnobstacles();
 drawSprites(); 
}
function spawnBananas() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,130,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime =-1;
    
    FoodGroup.add(banana);
  }
}
function spawnobstacles() {
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,330,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime =-1;
    
    obstacleGroup.add(obstacle);
  }
}




