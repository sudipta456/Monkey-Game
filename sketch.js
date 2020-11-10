//declaring variables for game objects
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup,obstacleGroup;
var score;
var ground;

function preload(){
  
//loading monkey animation
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
//loading banana image
  bananaImage = loadImage("banana.png");
//loading obstacle image
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
//create game space
  createCanvas(600,400);
//creating monkey
  monkey = createSprite(80,315,20,20)  ;
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.15;
//ceating ground
  ground = createSprite(600,400,1300,20);
  ground.velocityX = -4;
  console.log(ground.x);

  ground.x = ground.width/2;
//declaring variable for survival time
  var survivalTime = 0;
  
}


function draw() {
//adding scores
 background("white");
 stroke("white");
 textSize (20);
 fill("white");
 text("Score: "+ score,500,50);
 
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime = Math.ceil(frameCount/frameRate());
 text("survival Time: "+ survivalTime, 100,50);
//creating infinite ground
  if(ground.x<0){
    ground.x = ground.x/2;
  }
//making the monkey jump
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
//adding gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
//declaring function for banana and obstacle
  spawnbanana();
  spawnObstacles();
//draw all objects
  drawSprites();
}
//function spawn banana
function spawnbanana(){
  if (frameCount % 80 === 0){
    var banana = createSprite(600,165,20,40);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -6;
    banana.scale = 0.09;
    banana.lifetime = 200;
    
   
    
  }
}
//function spawn obstacles
function spawnObstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(600,380,40,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);

  obstacle.scale = 0.4;
  obstacle.lifetime = 300;
  

  }
}




