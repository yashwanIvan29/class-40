var database;
var gameState = 0, playerCount;
var form,game,player;
var allPlayers;
var distance = 0;
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img;
var track, ground ;
var goldImg , silverImg , bronzeImg;
var finishedPlayers = 0;

function preload(){
  car1img=loadImage("images/car1.png");
  car2img=loadImage("images/car2.png");
  car3img=loadImage("images/car3.png");
  car4img=loadImage("images/car4.png");
 track=loadImage("images/track.jpg");
 ground=loadImage("images/ground.png")
 goldImg=loadImage("images/gold.png")
 silverImg=loadImage("images/silver.png")
 bronzeImg=loadImage("images/bronze.png")
}



function setup(){
  createCanvas(displayWidth,displayHeight)
  database = firebase.database();
 game = new Game();
 game.getState();
 game.start();
}

function draw(){
  background("lightblue");
  if(playerCount === 4 && finishedPlayers === 0){
    game.update(1);
  }
  if(gameState ===1){
    game.play();
  }
  if(finishedPlayers ===4){
    game.update(2);
  }
  if(gameState === 2 && finishedPlayers === 4){
    game.displayRanks();
  }
}
