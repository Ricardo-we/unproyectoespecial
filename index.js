var opener=document.getElementById('options');
var opened=document.querySelector('.ul_main_nav');

function openMenu(){
    if( opened.classList.contains('togler') ){
       opener.innerHTML = "⬇️";  
    }
     else{
         opener.innerHTML = "➡️";
     }
   opened.classList.toggle('togler');
}

opener.addEventListener('click', openMenu);
