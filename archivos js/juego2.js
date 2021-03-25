const corazon2 = document.getElementById("contenedor_personaje2");


function saltar(){
    if(corazon2.classList!= "saltar"){
    corazon2.classList.add("saltar");

    setTimeout(function(){
    corazon2.classList.remove("saltar");
    } ,500);
    }
}

document.addEventListener("keydown",function(event) {
   saltar();

});

const enemigo= document.getElementById("enemigos_juego2");
 

function moverEnemigo (){
    enemigo.classList.add("movimiento_enemigo")

    setInterval(function(){
    enemigo.classList.remove("movimiento_enemigo")
    },300);
}

document.addEventListener("click",function(event){
    moverEnemigo();
});