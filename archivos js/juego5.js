var canva = document.getElementById("canva");
var ctx = canva.getContext("2d");

var arriba = document.getElementById("btn1");
var abajo = document.getElementById("btn2");
var izquierda = document.getElementById("btn3");
var derecha = document.getElementById("btn4");
var tableSize = 22.5;


function drawflect(x, y, color){
var size = 20;
var padding = 2;
ctx.fillStyle = color;
ctx.beginPath();
ctx.rect( (size + padding) * x, (size + padding)*y, size, size);

ctx.fill();
}



class User {
    x = 10;
    y = 10;
    color = "gold";
    dire = 2;
    tailList = []

    update(){
      var prev = { x:this.x, y:this.y};
      for(var i in this.tailList){
        var temp = this.tailList[i];
        this.tailList[i] = prev;
        prev = temp;
      }

        switch(this.dire){
            case 0: this.x -=1;break;
            case 1: this.y -=1;break;
            case 2: this.x +=1;break;
            case 3: this.y +=1;break;
        }

         this.loop(this.x);
         this.loop(this.y);

    }

    updateOutButtons(){
        var prev = { x:this.x, y:this.y};
        for(var i in this.tailList){
          var temp = this.tailList[i];
          this.tailList[i] = prev;
          prev = temp;
        }
  
          switch(this.dire){
              case 0: this.x -=1;break;
              case 1: this.y -=1;break;
              case 2: this.x +=1;break;
              case 3: this.y +=1;break;
          }
  
           this.loop(this.x);
           this.loop(this.y);
  
      }

    addTail(){
        this.tailList.push( {x:this.x, y:this.y} );
    }

    loop( value){
       if(value < 0){
           value = tableSize - 1;
       } else if(value > tableSize - 1){
           value = 0;
       }
       return value;

    }


}



class Item {
    x = 0;
    y= 0;
    color = "red";

    randomPosition(){
        this.x = parseInt(Math.random() * tableSize);
        this.y = parseInt(Math.random() * tableSize);
    }
}


  var user = new User();
  var item = new Item();
  item.randomPosition();
  var puntero = 0;

  setInterval(function(){

     for( var x=0; x<tableSize; x++){
         for(var y=0; y<tableSize; y++){
             drawflect(x,y,"black");
            }
     }


    user.update();

    if(user.x == item.x && user.y == item.y){
       user.addTail();
       item.randomPosition();
    }

    if( user.x <= -1 ){   
        location.reload();
    } 
    else if( user.x >= tableSize ){
        location.reload();
    }   
    else if(user.y <= -1){
        location.reload();
    }
    else if ( user.y >= tableSize ){
        location.reload();
    }


    for(var i in user.tailList){
        var p = user.tailList[i];
        drawflect( p.x, p.y, user.color)

    }

    drawflect( user.x, user.y, user.color);
    drawflect( item.x, item.y, item.color);

  },200);

  window.onkeydown = function(e){
   if(e.keyCode >= 37 && e.keyCode <= 40){
      user.dire = e.keyCode - 37;
   }
 } 
 
   arriba.addEventListener("click",  function(){
     user.dire = 1;
   
   })
  
   abajo.addEventListener("click",  function(){
    user.dire = 3;
  
   })
   izquierda.addEventListener("click",  function(){
    user.dire = 0;
  
   })
   derecha.addEventListener("click",  function(){
    user.dire = 2;
  
   })