// vælger vores canvas/kasse 
let canvas = document.querySelector("#canvas");

// ctx=canvascontext 
let ctx = canvas.getContext('2d');

let maze1 = [
    [0, 0, 0, 0, 0, 1, 1, 1, 4, 1, 1, 2, 0, 1, 1, 1, 0, 0, 0, 0], 
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0], 
    [0, 1, 4, 0, 0, 1, 0, 1, 5, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 4, 1, 0, 1, 0, 1, 1, 1, 0, 1, 5, 0, 1, 0], 
    [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 4, 0, 0, 0, 0, 1, 0], 
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 4, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1], 
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1], 
    [1, 1, 4, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 4, 1], 
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1], 
    [0, 5, 0, 0, 0, 1, 0, 1, 4, 1, 4, 1, 0, 1, 1, 1, 0, 0, 1, 4],

    [1, 1, 1, 1, 0, 1, 0, 1, 1, 4, 1, 1, 0, 1, 4, 0, 0, 1, 1, 0], 
    [0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 4, 1, 0], 
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0], 
    [0, 4, 1, 1, 1, 0, 1, 1, 0, 0, 5, 0, 1, 0, 1, 0, 1, 0, 1, 0], 
    [0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0], 
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0], 
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4], 
    [0, 3, 1, 1, 1, 1, 5, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// player, maze, tiles 
let y = 0;
let x = 0;
let player = 3;
let playerPosition;
let startPosition = {y:9, x:1};
let tileSize = 25;

// point/score
let point = 0;
let score = 1;
let pointText = document.querySelector('#point');
pointText.innerHTML = point;

// bestemmer farverne på de forskellige tiles 
function grid(){
for(y = 0; y < maze1.length; y++){

    for(x = 0; x < maze1[y].length; x++){
        if(maze1[y][x] == 0) { // selve banen
            ctx.fillStyle = "darkgreen";
            ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);
        }else if(maze1[y][x] == 2){ // mål 
            ctx.fillStyle = "darkgrey";
            ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);
        }else if(maze1[y][x] == player){ //player = 3
            //sætter x og y positionen det er {} fordi det er i et object 
            playerPosition = {y, x}; 
            console.log(playerPosition.y + " " + playerPosition.x); 
            ctx.fillStyle = "wheat";
            ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize); 
        }else if(maze1[y][x] == 4){ //bomb 
            ctx.fillStyle = "darkred";
            ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);
        }else if(maze1[y][x] == 5){ //point 
            ctx.fillStyle = "darkblue";
            ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);
        }else{
            ctx.fillStyle = "white"; 
            ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);    
        }
    }
}
}


// får siden til at reloade til index.html efter en tid på 700 milisekunder
function bomb(){
    setTimeout(function(){location.href = "index.html";}, 700);
}

// Når man vinder komemr man ind på en anden side 
function winPage(){
    setTimeout(function(){location.href = "win.html";}, 1000);
}

// point regnes og vises 
function pointScore(){
    point += score;
    pointText.innerHTML = point;
}

function win(){
    if(point==6){
        soundCheers();
        winPage();
    } else {
        alert("you don't have enough points");
    }
}


// functions til hvad der sker når man trykker på piltasterne
function keyRight() {
    if(maze1[playerPosition.y][playerPosition.x+1] == 1){
        maze1[playerPosition.y][playerPosition.x+1] = 3; //players nye position 
        maze1[playerPosition.y][playerPosition.x] = 1; //players gamle position 
    } else if(maze1[playerPosition.y][playerPosition.x+1] == 4){ // bomb 
        soundBomb();
        bomb();
    } else if(maze1[playerPosition.y][playerPosition.x+1] == 0){ // wall
        soundWall();
    } else if(maze1[playerPosition.y][playerPosition.x+1] == 5){ // point 
        pointScore();
        soundPoint();
        maze1[playerPosition.y][playerPosition.x+1] = 3; //players nye position 
        maze1[playerPosition.y][playerPosition.x] = 1; //players gamle position 
    } else if(maze1[playerPosition.y][playerPosition.x+1] == 2){ //new maze/win this round
        win();
    }
}

function keyUp(){
    if(maze1[playerPosition.y-1][playerPosition.x] == 1){
        maze1[playerPosition.y-1][playerPosition.x] = 3; //players nye position 
        maze1[playerPosition.y][playerPosition.x] = 1; //players gamle position 
    } else if(maze1[playerPosition.y-1][playerPosition.x] == 4){
        soundBomb();
        bomb();
    } else if(maze1[playerPosition.y-1][playerPosition.x] == 0){
        soundWall();
    } else if(maze1[playerPosition.y-1][playerPosition.x] == 5){ // point 
        pointScore();
        soundPoint();
        maze1[playerPosition.y-1][playerPosition.x] = 3; //players nye position 
        maze1[playerPosition.y][playerPosition.x] = 1; //players gamle position 
    } else if(maze1[playerPosition.y-1][playerPosition.x] == 2){
        win();
    }
}

function keyLeft(){
    if(maze1[playerPosition.y][playerPosition.x-1] == 1){
        maze1[playerPosition.y][playerPosition.x-1] = 3; //players nye position 
        maze1[playerPosition.y][playerPosition.x] = 1; //players gamle position 
    } else if(maze1[playerPosition.y][playerPosition.x-1] == 4){
        soundBomb();
        bomb();
    } else if(maze1[playerPosition.y][playerPosition.x-1] == 0){
        soundWall();
    } else if(maze1[playerPosition.y][playerPosition.x-1] == 5){ // point 
        pointScore();
        soundPoint();
        maze1[playerPosition.y][playerPosition.x-1] = 3; //players nye position 
        maze1[playerPosition.y][playerPosition.x] = 1; //players gamle position 
    } else if(maze1[playerPosition.y][playerPosition.x-1] == 2){
        win();
    }
}


function keyDown(){
    if(maze1[playerPosition.y+1][playerPosition.x] == 1){
        maze1[playerPosition.y+1][playerPosition.x] = 3; //players nye position 
        maze1[playerPosition.y][playerPosition.x] = 1; //players gamle position 
    } else if(maze1[playerPosition.y+1][playerPosition.x] == 4){
        soundBomb();
        bomb();
    } else if(maze1[playerPosition.y+1][playerPosition.x] == 0){
        soundWall();
    } else if(maze1[playerPosition.y+1][playerPosition.x] == 5){ // point 
        pointScore();
        soundPoint();
        maze1[playerPosition.y+1][playerPosition.x] = 3; //players nye position 
        maze1[playerPosition.y][playerPosition.x] = 1; //players gamle position 
    } else if(maze1[playerPosition.y+1][playerPosition.x] == 2){
        win();
    }
}


// Lyde functions
function soundMove(){
    let audio = new Audio('sound/footsteps.mp3');//ændrer så de varer kortere! 
    audio.play();
}

function soundWall(){
     let audio = new Audio('sound/wallhit.mp3');
     audio.play();
 }
function soundBomb(){
    let audio = new Audio('sound/bomb.mp3'); //ændrer så den varer kortere og starter hurtigere
    audio.play();
}
function soundCheers(){
    let audio = new Audio('sound/cheers.mp3');
    audio.play();
}
function soundPoint(){
    let audio = new Audio('sound/coin.mp3');
    audio.play();
}

// Switch der lytter på hvornår noget bliver trykket på 
window.addEventListener('keydown', function(event){
    soundMove();
    //console.log(event.keyCode); = tjekker key code for keyboard
    switch (event.keyCode) {
        case 39: // keycode til keyRight
        keyRight();
        grid();
            break;

        case 38: // keycode til keypUp
        keyUp();
        grid();
            break;

        case 37: // keycode til keyLeft
        keyLeft();
        grid();
            break;

        case 40: // keycode til keyDown
        keyDown();
        grid();
            break;
        

        default:
            break;
    }
});


grid();