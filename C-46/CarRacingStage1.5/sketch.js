var Player,Npc1,Npc2,Npc3,Npc4,Laptop;
var Wall1,Wall2,Wall3,Wall4,Wall5,Wall6,Wall7,Wall8,Wall9,Wall10;
var Wall11,Wall12,Wall13,Wall14,Wall15,Wall16,Wall17,Wall18,Wall19,Wall20;
var computer1,computer2,computer3,computer4;
var loadingBar1,loadingBar2,loadingBar3,loadingBar4,thickness1,thickness2,thickness3,thickness4;

function preload(){

  PlayerImg = loadImage("Images/robber-cartoon.jpg");
  Npc = loadImage("Images/Guards.jpg");

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-200);

  thickness1 = 1;
  thickness2 = 1;
  thickness3 = 1;
  thickness4 = 1;

  loadingBar1 = createSprite(700,20,thickness1,50);
  loadingBar1.shapeColor="yellow"
  loadingBar1.visible = false;

  loadingBar2 = createSprite(700,20,thickness2,50);
  loadingBar2.shapeColor="yellow"
  loadingBar2.visible = false;

  loadingBar3 = createSprite(700,20,thickness3,50);
  loadingBar3.shapeColor="yellow"
  loadingBar3.visible = false;

  loadingBar4 = createSprite(700,20,thickness4,50);
  loadingBar4.shapeColor="yellow"
  loadingBar4.visible = false;

  computer1 = createSprite(30,350,50,50);
  computer1.shapeColor="red";

  computer2 = createSprite(300,600,50,50);
  computer2.shapeColor="red";

  computer3 = createSprite(925,250,50,50);
  computer3.shapeColor="red";

  computer4 = createSprite(800,600,50,50);
  computer4.shapeColor="red";

  //Wall parallel to Wall (Wall2)
  Wall1 = createSprite(250, 270,20,275);
  Wall1.shapeColor="brown";

  //Wall adjascent to (Wall3)
  Wall2 = createSprite(100, 325,20,150);
  Wall2.shapeColor="brown";

  //Wall above spawn (Wall4)
  Wall3 = createSprite(10, 400,200,20);
  Wall3.shapeColor="brown";

  // spawn Wall top
  Wall4 = createSprite(10, 525,265,20);
  Wall4.shapeColor="brown";

  // spawn Wall right
  Wall5 = createSprite(250, 600,20,150);
  Wall5.shapeColor="brown";

  //Wall adjascent to Wall (Wall1)
  Wall6 = createSprite(350, 397.5,200,20);
  Wall6.shapeColor="brown";

  //Wall adjascent to (Wall5)
  Wall7 = createSprite(350, 525,220,20);
  Wall7.shapeColor="brown";

  //Wall parallel to (Wall6)
  Wall8 = createSprite(465, 300,220,20);
  Wall8.shapeColor="brown";

  //Wall adjacent to 
  Wall9 = createSprite(350, 220,20,180);
  Wall9.shapeColor="brown";

  //Wall adjascent to
  Wall10 = createSprite(575, 540,20,300);
  Wall10.shapeColor="brown";

  //Wall
  Wall11 = createSprite(462.5, 125,245,20);
  Wall11.shapeColor="brown";

  //Wall
  Wall12 = createSprite(575, 250,20,100);
  Wall12.shapeColor="brown";
 
  //Wall
  Wall13 = createSprite(850, 125,250,20);
  Wall13.shapeColor="brown";

  //Wall
  Wall14 = createSprite(725, 250,20,110);
  Wall14.shapeColor="brown";

  //Wall
  Wall15 = createSprite(850, 300,250,20);
  Wall15.shapeColor="brown";

  //
  Wall16 = createSprite(975, 212.5,20,195);
  Wall16.shapeColor="brown";

  //
  Wall17 = createSprite(725, 527.5,20,275);
  Wall17.shapeColor="brown";

  Wall18 = createSprite(100, 25,10,50);
  Wall18.shapeColor="brown";

  Wall19 = createSprite(100, 25,10,50);
  Wall19.shapeColor="brown";

  Wall20 = createSprite(100, 25,10,50);
  Wall20.shapeColor="brown";

  Npc1 = createSprite(200,75,25,25)
  Npc1.addImage(Npc)
  Npc1.scale = 0.50

  Npc2 = createSprite(25,460,25,25)
  Npc2.addImage(Npc)
  Npc2.scale = 0.50

  Npc3 = createSprite(650,199,25,25)
  Npc3.addImage(Npc)
  Npc3.scale = 0.50

  Npc4 = createSprite(200,75,25,25)
  Npc4.addImage(Npc)
  Npc4.scale = 0.50

  Player = createSprite(30,625,25,25);
  Player.addImage(PlayerImg);
  Player.scale = 0.23;  

}
 
function draw(){
  background("White")

  Player.velocityX = 0;
  Player.velocityY = 0;

  loadingBar1.width = thickness1;
  loadingBar2.width = thickness2;
  loadingBar3.width = thickness3;
  loadingBar4.width = thickness4;
  
  
if (keyDown("W")){
  Player.velocityY = -3
};

if (keyDown("D")){
  Player.velocityX = 3
};

if (keyDown("A")){
  Player.velocityX = -3
};

if (keyDown("S")){
  Player.velocityY = 3
};

if (Npc1.x < 250){

  Npc1.velocityX = 3
};

if (Npc1.x > 650){

  Npc1.velocityX = -3
};

if (Npc2.x < 26){

  Npc2.velocityX = 3
};

if (Npc2.x > 400){

  Npc2.velocityX = -3
};

if (Npc3.y < 200){

 Npc3.velocityY = 3
};

if (Npc3.y > 600){

  Npc3.velocityY = -3
 };

if (Player.isTouching(Npc1)){

  Player.x = 30;
  Player.y = 625;
};

if (Player.isTouching(Npc2)){

  Player.x = 30;
  Player.y = 625;
};

if (Player.isTouching(Npc3)){

  Player.x = 30;
  Player.y = 625;
};

if (Player.isTouching(Npc4)){

  Player.x = 30;
  Player.y = 625;
};

if (Player.isTouching(computer1) && loadingBar1.width<=100){
  thickness1 = thickness1+1
  loadingBar1.visible = true;
  
} 

if (Player.isTouching(computer2) && loadingBar2.width<=100){
  thickness2 = thickness2+1
  loadingBar2.visible = true;
} 

if (Player.isTouching(computer3) && loadingBar3.width<=100){
  thickness3 = thickness3+1
  loadingBar3.visible = true;
} 

if (Player.isTouching(computer4) && loadingBar4.width<=100){
  thickness4 = thickness4+1
  loadingBar4.visible = true;
} 

if (loadingBar1.width>=100){

  loadingBar1.visible = false;

}
if (loadingBar2.width>=100){

  loadingBar2.visible = false;

}
if (loadingBar3.width>=100){

  loadingBar3.visible = false;

}
if (loadingBar4.width>=100){

  loadingBar4.visible = false;

}





Player.collide(Wall1);
Player.collide(Wall2);
Player.collide(Wall3);
Player.collide(Wall4);
Player.collide(Wall5);
Player.collide(Wall6);
Player.collide(Wall7);
Player.collide(Wall8);
Player.collide(Wall9);
Player.collide(Wall10);
Player.collide(Wall11);
Player.collide(Wall12);
Player.collide(Wall13);
Player.collide(Wall14);
Player.collide(Wall15);
Player.collide(Wall16);
Player.collide(Wall17);
Player.collide(Wall18);
Player.collide(Wall19);
Player.collide(Wall20);
drawSprites();
  }

function hacking(){
};