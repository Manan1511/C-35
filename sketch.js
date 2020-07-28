var ball,ball1;
var database;
var pos,gameState = 0;
var playerCount,player,form;
var game;
function setup(){
    createCanvas(500,500);
    database = firebase.database();

    game = new Game();
    game.getgameState();
    console.log(gameState);
    game.start();
    //var ball1pos = database.ref('Ball/Position');
    //ball1pos.on("value",function(data){
        //pos = data.val();
        //ball1.x = pos.x;
        //ball1.y = pos.y;
    //});
}

function draw(){
    background("white");

    drawSprites();
}

function writePosition(x,y){
    database.ref('Ball/Position').set({
        x: pos.x+x,
        y: pos.y+y
    })
}