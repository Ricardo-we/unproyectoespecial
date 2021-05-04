const corazon2 = document.getElementById("contenedor_personaje2");
const enemigo= document.getElementById("enemigos_juego2");

function saltar(){
    
    if(corazon2.classList!= "saltar"){
    corazon2.classList.add("saltar");
    setTimeout(function(){
    corazon2.classList.remove("saltar");
    } ,500);
    }
}
       document.addEventListener("click",function(event) {
       saltar(); });
       
       document.addEventListener("keydown",function(event) {
        saltar(); });


        let pts2=0;
 function puntos2(){
    pts2++;
    let puntero2=document.getElementById("puntero_juego2")
    puntero2.innerHTML= 'Puntos: <b>'+ pts2+'</b>'
}

setInterval(puntos2,100)//ENEMIGO
let vivo = setInterval(function (){
  let corazon2Top= parseInt(window.getComputedStyle(corazon2).getPropertyValue("top"));

  let enemigoLeft=parseInt( window.getComputedStyle(enemigo).getPropertyValue("left"));

      //colision
      if(enemigoLeft<50 && enemigoLeft>0 && corazon2Top>=140){
         alert("Estos son tus puntos amor!:3 "+"  =  "+pts2);
         pts2=0;
      }
},10); 