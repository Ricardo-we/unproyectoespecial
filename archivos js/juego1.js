document.getElementById('jugador').addEventListener("click",sumarPuntos);// ESTO LO QUE HACE ES LLAMAR AL CIRCULITO


let puntos=0;
let tiempo=20;
//ESTO ES UNA FUNCION QUE AGREGA PUNTOS
function sumarPuntos(){
     puntos++;
     document.getElementById("puntos").innerHTML="Puntos: <b>"+ puntos+"</b>";//AHI LLAMA AL CUADRO Y AGREGA TEXTO DESDE AQUI

     randNum = Math.round(Math.random()*499);//ESTO ES UNA FUNCION QUE ELIGE NUMEROS AL AZAR
     randNum2 = Math.round(Math.random()*499);
     document.getElementById("jugador").style.marginTop = randNum +"px";
     document.getElementById("jugador").style.marginLeft = randNum2 +"px";//Y AQUI LE AGREGA EL MARGEN PARA QUE SE MUEVA :3
    
     if(puntos==20){
         alert("GANASTE!! :´´´´´´´´´´´3")
         puntos=0;
         tiempo=20;
     }
}

function restarTiempo(){
  tiempo--
  document.getElementById("tiempo").innerHTML= "Tiempo:"+tiempo;
  if(tiempo==0){
      alert("Perdiste :(")
      tiempo=20;
      puntos=0;
  }
}
setInterval(restarTiempo,1000);