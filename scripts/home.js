let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let nameUser = document.querySelector('#nameUser');

if(localStorage.getItem('token') == null){
    let ppNull = document.querySelector('#nullLogin-popup');
    let header = document.querySelector('header');
    let body = document.querySelector('body');
    let img = document.querySelector('#img-developer');
    let main = document.querySelector('main');

    header.setAttribute('style', 'display: none');
    body.setAttribute('style', 'background: url(../../img/bg-null.png)');
    img.setAttribute('style', 'display: none');
    main.setAttribute('style', 'display: none');
    ppNull.setAttribute('style', 'display: flex');
}

logout = function(){
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = '../../login.html';
}

nameUser.innerHTML = `Boas-vindas, ${userLogado.nome}.`;