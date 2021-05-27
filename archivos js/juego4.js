/*var pong1;
var pong2;
var ball;
var score1;
var score2;
var point1 = 0;
var point2 = 0;


function startGame(){
    myGameArea.start();

    pong1 = new component(8 , 60 , "black" , 20 , 150 );
    pong2 = new component(8 , 60 , "black" , 670 , 150 );
    ball = new component(7 , 7 , "blue" , 350 , 170 );
    score1 = new component("16px", "consolas", "yellow", 200, 25, "text");
    score2 = new component("16px", "consolas", "yellow", 410, 25, "text");

}

var myGameArea = {
  canvas : document.createElement('canvas'), 

  start : function(){
      this.canvas.width = 700;
      this.canvas.height = 390;
      this.context = this.canvas.getContext('2d');
      document.body.insertBefore(this.canvas , document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 30);
  
      window.addEventListener('keydown', function(e) {
        myGameArea.keys = (myGameArea.keys || []);
        myGameArea.keys [e.keyCode] = true;

      })
      window.addEventListener('keyup', function(e) {
        myGameArea.keys = (myGameArea.keys || []);
        myGameArea.keys [e.keyCode] = false;

      })      

    },

    clear: function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function(){
        clearInterval(this.interval);
    }

}  
  //FUNCION PARA CREAR DIFERENTES OBJETOS

    function component(width , height , color , x ,y , type){
        this.type = type;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.text = "";
        this.speedX = 0;
        this.speedY =  0;

        this.update = function(){
            ctx = myGameArea.context;
            if(this.type == "text"){
                ctx.font = this.width + " " + this.height;
                ctx.fillStyle = color;
                ctx.fillText(this.text , this.x , this.y);

            } else{
                ctx.fillStyle = color;
                ctx.fillRect(this.x ,this.y , this.width , this.height);
            }
        }
        this.newPos = function(){
            this.x += this.speedX;
            this.y += this.speedY
        }

        this.crashWith = function(otherobj ){
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var otherleft = otherobj.x;
            var otherright = otherobj.x + (otherobj.width);
            var othertop = otherobj.y;
            var otherbottom = otherobj.y + (otherobj.height);
            var crash = true;

            if((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)){
              crash = false;
            }
            return crash;
        }
    }

     function updateGameArea(){
    //PONG CONTROL/////////////////////////////////
       if(pong1.y <= -1){
         pong1.y = 0;
       }
       if(pong1.y >= 350){
        pong1.y = 330;
       }      
       if(pong2.y <= -1){
        pong2.y = 0;
      }
      if(pong2.y >= 350){
       pong2.y = 330;
      } 

       //CONTROLES
     if(myGameArea.keys && myGameArea.keys[40]){
           pong1.y += 10;
           if(ball.crashWith(pong1)){
              ball.speedY = -4;
              ball.speedX = 14;

           }
       }

     if(myGameArea.keys && myGameArea.keys[38]){
        pong1.y -= 10;
        if(ball.crashWith(pong2)){
           ball.speedY = 4;
           ball.speedX = 14;

        }
     }

    if(myGameArea.keys && myGameArea.keys[40]){
        pong2.y += 10;
        if(ball.crashWith(pong2)){
           ball.speedY = -4;
           ball.speedX = 8;

        }
    }

    if(myGameArea.keys && myGameArea.keys[38]){
        pong2.y -= 10;
        if(ball.crashWith(pong1)){
           ball.speedY = 4;
           ball.speedX = 14;

        }
    }

    ball.newPos();
    if(ball.crashWith(pong1)){
        ball.speedY = 0;
        ball.speedX = 13;

    }
    else if(ball.crashWith(pong2)){
        ball.speedY = 0;
        ball.speedX = -8;

    }
    else{
        ball.x -= 10;
        }


    if(ball.y <= 0){
        ball.speedY = 4;
    }
    if(ball.y <= 390){
        ball.speedY = -4;
    }

    if(ball.x <= 2){
       ball.speedX= 700;
       point2++;
    }
    if(ball.x <= 690){
        ball.speedX = 0;
        point1++;
    }        

         myGameArea.clear();
         pong1.update();
         pong2.update();
         ball.update();

         score1.update();
         score1.text = "Score: " + point1;

         score2.update();
         score2.text = "Score: " + point2;
     }*/

     var hockey1;
		var hockey2;
		var ball;
		var point1 = 0;
		var point2 = 0;

		function startGame() {
			myGameArea.start();
			hockey1 = new component(8, 60, "black", 20, 150);
			hockey2 = new component(8, 60, "black", 670, 150);
			ball = new component(7, 7, 'red', 350, 170);
			myScore = new component("16px", "Consolas", "black", 200, 25, "text");
			myScore1 = new component("16px", "Consolas", "black", 410, 25, "text");
		}

		var myGameArea = {
			canvas: document.createElement("canvas"),
			start: function() {
				this.canvas.width = 700;
				this.canvas.height = 390;
				this.context = this.canvas.getContext("2d");
				document.body.insertBefore(this.canvas, document.body.childNodes[0]);
				this.interval = setInterval(updateGameArea, 30);
				window.addEventListener('keydown', function(e) {
					myGameArea.keys = (myGameArea.keys || []);
					myGameArea.keys[e.keyCode] = true;
				})
				window.addEventListener('keyup', function(e) {
					myGameArea.keys[e.keyCode] = false;
				})
			},

			clear: function() {
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			},
			stop: function() {
				clearInterval(this.interval);
			}
		}

		function component(width, height, color, x, y, type) {
			this.type = type;
			this.width = width;
			this.height = height;
			this.x = x;
			this.y = y;
			this.speedX = 0;
			this.speedY = 0;
			this.update = function() {
				ctx = myGameArea.context;
				if (this.type == "text") {
					ctx.font = this.width + " " + this.height;
					ctx.fillStyle = color;
					ctx.fillText(this.text, this.x, this.y);
				} else {
					ctx.fillStyle = color;
					ctx.fillRect(this.x, this.y, this.width, this.height);
				}
			}

			this.newPos = function() {
				this.x += this.speedX;
				this.y += this.speedY;
			}

			this.crashWith = function(otherobj) {
				var myleft = this.x;
				var myright = this.x + (this.width);
				var mytop = this.y;
				var mybottom = this.y + (this.height);
				var otherleft = otherobj.x;
				var otherright = otherobj.x + (otherobj.width);
				var othertop = otherobj.y;
				var otherbottom = otherobj.y + (otherobj.height);
				var crash = true;
				if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
					crash = false;
				}
				return crash;
			}
		}

		function updateGameArea() {

			//Hockey Control //////////////////////////////
			///////////////////////////////////////////////

			if (hockey1.y <= 0) {
				hockey1.y = 0;
			}
			if (hockey1.y >= 350) {
				hockey1.y = 350;
			}
			if (hockey2.y <= 0) {
				hockey2.y = 0;
			}
			if (hockey2.y >= 350) {
				hockey2.y = 350;
			}

			//Keyboard control /////////////////////////////
			////////////////////////////////////////////////

			if (myGameArea.keys && myGameArea.keys[38]) {
				hockey1.y -= 10;
				if (ball.crashWith(hockey1)) {
					ball.speedY = -4;
					ball.speedX = 14;
				}
			}
			if (myGameArea.keys && myGameArea.keys[40]) {
				hockey1.y += 10;
				if (ball.crashWith(hockey1)) {
					ball.speedY = 4;
					ball.speedX = 14;
				}
			}
			if (myGameArea.keys && myGameArea.keys[38]) {
				hockey2.y += 15;
				if (ball.crashWith(hockey2)) {
					ball.speedY = -4;
					ball.speedX = -8;
				}
			}
			if (myGameArea.keys && myGameArea.keys[40]) {
				hockey2.y -= 15;
				if (ball.crashWith(hockey2)) {
					ball.speedY = 4;
					ball.speedX = -8;
				}
			}


			///********BALL MOVEMENTS *************/////////
			////////////////////////////////////////////////

			ball.newPos();

			if (ball.crashWith(hockey1)) {
				ball.speedY = 0;
				ball.speedX = 13;
			} else if (ball.crashWith(hockey2)) {
				ball.speedY = 0;
				ball.speedX = -8;
			} else {
				ball.x += -4;
			}



			if (ball.y <= 0) {
				ball.speedY = 4;
			}
			if (ball.y >= 390) {
				ball.speedY = -4;
			}
			if (ball.x <= 2) {
				ball.x = 690;
				point2 += 1;
				//myGameArea.stop();
			}
			if (ball.x >= 700) {
				ball.x = 0;
				point1 += 1;
				//myGameArea.stop();
			}
			//			console.log(point1);
			//			console.log(point2);

			//ball.x -= 4;
			myGameArea.clear();
			hockey1.update();
			hockey2.update();
			ball.update();
			myScore.text = "SCORE: " + point1;
			myScore.update();
			myScore1.text = "SCORE: " + point2;
			myScore1.update();

		}
