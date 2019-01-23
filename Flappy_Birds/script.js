 var canvas = document.getElementById("c1");
 var ctx = canvas.getContext('2d');


 var bird = new Image();
 bird.src = "img/bird.png";
 var bg = new Image();
 bg.src = "img/bg.png";
 var fg = new Image();
 fg.src = "img/ground.png";
 var pipeUp = new Image();
 pipeUp.src = "img/pipe_up.png";
 var pipeBottom = new Image();
 pipeBottom.src = "img/pipe_down.png";

 var gap = 120;

 //positin of bird

 var xPos = 10;
 var yPos = 150;
 var grav = 0.5;

 var jump_value = 30;
 var map_speed = 0.5;

 var score = 0;

 //нажатие на кнопку
 document.addEventListener("keydown", moveUp);

 function moveUp() {
     yPos -= jump_value;
 }

 //создание препядствий

 var pipe = [];
 pipe[0] = {
     x: canvas.width,
     y: 0
 }


 function draw() {

     ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

     for (var i = 0; i < pipe.length;i++) {
         ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y, 50, 300);
         ctx.drawImage(pipeUp,  pipe[i].x,  pipe[i].y + 300 + gap, 50, 300);
         pipe[i].x-=map_speed;

         if(pipe[i].x==125){
             pipe.push({
                 x: canvas.width,
                 y: Math.floor(Math.random()*300)-300
             })
         }

         if(xPos + 40 >=pipe[i].x && xPos <= pipe[i].x+50
            &&(yPos <=pipe[i].y + 300|| yPos + 30 >= pipe[i].y+300+gap)||yPos>=canvas.height - 75 - 30 || yPos <=0+20){
                location.reload();
                score=0;
         }
         if(pipe[i].x==5){
                score++;
                console.clear();
                console.log("Score: "+score);
         }   
     }

     ctx.drawImage(fg, 0, canvas.height - 75, canvas.width, 75);
     ctx.drawImage(bird, xPos, yPos, 40, 30);

     yPos += grav;
     
     ctx.fillStyle = "#000";
     ctx.font = "20px Verdana";
     ctx.fillText("Score: "+score,10, canvas.height - 20);


     requestAnimationFrame(draw);

 }
 draw();