let getRandomNumber=size =>{
    return Math.floor (Math.random() * size);
}


let getDistance = (e,target)=>{
let diffX = e.offsetX - target.x;
let diffY = e.offsetY - target.y;

return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if (distance<30) {return "Hirviendo!"
    
    } else if (distance < 50) {
        return "Muy caliente";
    }
    else if (distance < 70) {
        return "Caliente";
    }
    else if (distance < 90) {
        return "Frio";
    }
    else if (distance < 100) {
        return "Muy frio";
    }
    else if (distance < 360) {
        return "Ni cerca";
    }
    else if (distance < 400) {
        return "Lejos muy lejos";
    }
}

let tiempo = 50;
function restarTiempo(){
    tiempo--
    document.getElementById("tiempo").innerHTML = "Tiempo:" + tiempo;
        if (tiempo == 0){
            alert("Perdiste :(")
            tiempo=50;
            puntos=0;
        }
}
setInterval(restarTiempo,1000);