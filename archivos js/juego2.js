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