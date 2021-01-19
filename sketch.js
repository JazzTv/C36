var database;
var Form, Game, Player;
var GameState = 0;
var PlayerCount = 0;

function setup()
{
    createCanvas(500,500);
    database = firebase.database();

    Game = new game ();
    Game.getState();
    Game.start();
   
    
}

function draw()
{
    background("white");
  
    drawSprites();
}

