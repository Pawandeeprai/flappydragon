var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var score = 0;
var x = canvas.width/2;
var y = canvas.height/2;
var pipeStart = canvas.width - 10;
var pipeHeights = [0,50,100,150,200,250,300];
var dx = 0;
var dy = 1;
var ballRadius = 10;
var pipes = [];
var upperPipes = [];
var clouds = new Image();
var gameOver = false;
clouds.src = "assets/images/cloud_scene_preview.png";
var dragonImage1 = new Image();
dragonImage1.src = "assets/images/dragon/frame-1.png";
var dragonImage2 = new Image();
dragonImage2.src = "assets/images/dragon/frame-3.png";
var dragonImage3 = new Image();
dragonImage3.src = "assets/images/dragon/frame-2.png";
var walls = new Image();
walls.src = "assets/images/kpa_blockA.png";

function drawGameOver(){
  ctx.font = "80px Arial";
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("Game Over", 20, 100);
}


function addPipe(space){
  y = pipeHeights[Math.floor(Math.random() * 7)];
  pipes.push({
    x: pipeStart + space,
    y: y,
    width: 80,
    height: 100
  });

}


function drawBall() {

  if (dy > 0){
    ctx.drawImage(dragonImage1, x, y, 60, 60);
  } else if (dy === 0) {
    ctx.drawImage(dragonImage3, x, y, 60, 60);
  } else {
    ctx.drawImage(dragonImage2, x, y, 60, 60);
  }

}

function drawPipe(pipe){
  var pattern = ctx.createPattern(walls, 'repeat-x');
  ctx.beginPath();
  ctx.drawImage(walls, pipe.x, pipe.y, pipe.width, pipe.height);
  ctx.fillStyle = pattern;
  ctx.fill();
  ctx.closePath();
}


  function keyPressedhandler(e) {
    if(e.keyCode === 32 && y > 0) {
      dy = -9;
    }
  }

function drawScore() {
ctx.font = "16px Arial";
ctx.fillStyle = "#FFFFFF";
ctx.fillText("Score: "+score, 8, 20);
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(clouds, 0, 0, 800, 500);
  drawBall();
  y += dy;


  pipes.forEach(function(pipe, idx){
    drawPipe(pipe);
    pipe.x --;
    if (((y + 5 >= pipe.y && y + 5 <= pipe.y + pipe.height )
      || (y + 55 >= pipe.y && y + 55 <= pipe.y + pipe.height))
      && (x + ballRadius > pipe.x && x + ballRadius < pipe.x + pipe.width) ){
      gameOver = true;
    } else if (x === pipe.x) {
      score += 1;
    }

  });
  drawScore();

  this.token = requestAnimationFrame(draw);
  resDy();
  if (gameOver) {
    cancelAnimationFrame(this.token);
    drawGameOver();
  }
}

function resDy(){
  if (dy < 1) {
    dy += 1;
  }
}

document.addEventListener("keypress", keyPressedhandler, false);
var spacing = 0;
for (var i = 0; i < 1000; i++){
  addPipe(spacing);
  spacing += 125;
}

draw();
