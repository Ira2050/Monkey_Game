var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  score=0;
  

  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
 ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
    obstacleGroup = createGroup();
  foodGroup= createGroup();
  
}


function draw() {
  
background("white");
 
  if(keyDown("space")) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  
  monkey.collide(ground);
  
  food();
  obstacle();
  drawSprites(); 

stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score, 500, 500);
  
    if (obstacleGroup.isTouching(monkey)){
    monkey.velocityX = 0;
    ground.velocityX = 0;
  obstacleGroup.setVelocityXEach(0);
  foodGroup.setVelocityXEach(0); 

  obstacleGroup.setLifetimeEach(-1);
  foodGroup.setLifetimeEach(-1);
    
    //obstacleGroup.destroyEach();
    //foodGroup.destroyEach();
   
  }
  
 stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
 text("Survival Time: "+ survivalTime, 100, 50);
  
}

function food(){
  if (frameCount % 60 === 0){
  banana=createSprite(600,120,40,10)
    banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
    banana.scale = 0.1;
 banana.velocityX = -3;
    banana.lifetime = 300;
    
    foodGroup.add(banana);
}
}

function obstacle(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,320,10,40);
  obstacle.lifetime = 300;
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -3;
   obstacle.scale = 0.1;
     obstacle.collide(ground);
   
   obstacleGroup.add(obstacle);
   
 }
}




