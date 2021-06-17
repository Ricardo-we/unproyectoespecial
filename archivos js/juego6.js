let jugador1 = document.getElementById("personaje1")

let timer = document.getElementById("tiempo");
let time = 40;

let pointer = document.getElementById("puntos");
let puntos = 0;
 
let gameArea = document.getElementById("gameArea")



function sumarPuntos(){
     puntos++;
     pointer.innerHTML="Puntos: <b>"+ puntos + "</b>";
     
     randNum = Math.round( Math.random()*497 );
     randNum2 = Math.round( Math.random()*697 );

     jugador1.style.marginTop = randNum +"px";
     jugador1.style.marginLeft = randNum2 +"px";

     if( puntos==30 ){
        alert("Ganaste Mi vida!!!:´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´3");
        puntos = 0;
        time = 40;
        jugador1.style.margin = 0;
    }

}


function tiempo(){
     time--;
     timer.innerHTML = "Tiempo :3: " + time;
   
     if( time == 0 ){
         alert("Perdiste mi amor :(")
         puntos = 0;
         time = 40;
         jugador1.style.margin = 0;
     }
   

}


jugador1.addEventListener( "click",sumarPuntos );
setInterval( tiempo, 1000 );



