let dots=document.querySelector('.cover-deco');
let infoCover=document.querySelector('.cover-info');
let Cover=document.querySelector('.cover');

cargarEventListeners();

function cargarEventListeners(){
    document.addEventListener('scroll',animTexto);
}

function animTexto(){
    infoCover.classList.add('cover-info-anim');
    //infoCover.classList.remove('cover-info');
}


