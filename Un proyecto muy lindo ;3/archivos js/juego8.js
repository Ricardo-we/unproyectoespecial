var player = document.getElementById('player');
var enemy = document.getElementById('enemy1');

var btnUp = document.getElementById('btnUp');
var btnDown = document.getElementById('btnDown');
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');

var aument = 0;
var upDo = 0;
var win = true;
var enemyX = 0;
var enemyX2 = 0;
const velocity = 30;

document.addEventListener("keydown", playerMainFuncs);
playerButtons();

function playerMainFuncs() {

    if (event.keyCode === 68) {
        aument += velocity;
        player.style.left = aument + "px";
    }
    else if (event.keyCode === 65) {
        aument -= velocity;
        player.style.left = aument + "px";
    }
    else if (event.keyCode === 83) {
        upDo += velocity;
        player.style.top = upDo + "px";
    }
    else if (event.keyCode === 87) {
        upDo -= velocity;
        player.style.top = upDo + "px";
    }


barsCol();


}

function barsCol() {
    
    if (aument < 0 || aument > 570 || upDo < 0 || upDo > 560) {
        alert("Ño puedes salirte del mapa tramposha");
        upDo = 0;
        aument = 0;
        player.style.top = 0 + "px";
        player.style.left = 0 + "px";
    }
    else if (aument >= 0 && aument <= 330 && upDo == 30 || aument > 510 && aument < 570 && upDo == 30) {
        window.alert("Ño puedes pasar por ahi gatita")
        upDo = 0;
        aument = 0;
        player.style.top = 0 + "px";
        player.style.left = 0 + "px";
    }
    else if (upDo == 210 && aument >= 0 && aument < 150 || upDo == 210 && aument > 210 && aument < 570) {
        window.alert("Ño puedes pasar por ahi gatita")
        upDo = 0;
        aument = 0;
        player.style.top = 0 + "px";
        player.style.left = 0 + "px";        
    }
    else if (upDo == 390 && aument >= 0 && aument < 240 || upDo == 390 && aument > 270 && aument < 570) {
        window.alert("Ño puedes pasar por ahi gatita")
        upDo = 0;
        aument = 0;
        player.style.top = 0 + "px";
        player.style.left = 0 + "px";        
    }

    if( aument >= 510 && upDo >= 540 ){
        alert("Ganaste gatita :´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´3");
        upDo = 0;
        aument = 0;
        player.style.top = 0 + "px";
        player.style.left = 0 + "px";
        win = false;
    }



}

let colision = setInterval(function () {
        if (upDo === 150 && aument <= enemyX) {
            alert("perdiste gatita")
            upDo = 0;
            aument = 0;
            player.style.top = 0 + "px";
            player.style.left = 0 + "px";
            
        }


    }, 100);


let change = setInterval(function () {
    enemyX += 120;
        if(enemyX >= 600){
            enemyX = 0;
        }

    },1000)

let colision2 = setInterval(function () {
        if (upDo === 480 && aument <= enemyX2) {
            alert("perdiste gatita")
            upDo = 0;
            aument = 0;
            player.style.top = 0 + "px";
            player.style.left = 0 + "px";
            
        }


    }, 100);


let change2 = setInterval(function () {
    enemyX2 += 120;
        if(enemyX2 >= 600){
            enemyX2 = 0;
        }

}, 1000)


function playerButtons() {

    btnUp.addEventListener('click', function () {
        upDo -= velocity;
        player.style.top = upDo + "px";
        barsCol();
    })

    btnDown.addEventListener('click', function () {
        upDo += velocity;
        player.style.top = upDo + "px";
        player.innerHTML = upDo;
        barsCol();
    })

    btnLeft.addEventListener('click', function () {
        aument -= velocity;
        player.style.left = aument + "px";
        player.innerHTML = aument;
        barsCol();
    })

    btnRight.addEventListener('click', function () {
        aument += velocity;
        player.style.left = aument + "px";
        player.innerHTML = aument;
        barsCol();
    })

}
