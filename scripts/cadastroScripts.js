//variáveis botões
let btn = document.querySelector('#verSenha');
let btnConfirm = document.querySelector('#verConfirmeSenha');

//variáveis validação - cadastro
let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmarSenha = document.querySelector('#confirmarSenha');
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha');
let validConfirmarSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');
let msgCaps = document.querySelector('#msgCaps');

//botao eyes
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha');

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
    }else{
        inputSenha.setAttribute('type', 'password');
    }
})


btnConfirm.addEventListener('click', ()=>{
    let inputConfirmarSenha = document.querySelector('#confirmarSenha');

    if(inputConfirmarSenha.getAttribute('type') == 'password'){
        inputConfirmarSenha.setAttribute('type', 'text');
    }else{
        inputConfirmarSenha.setAttribute('type', 'password');
    }
})

// valiações de caracteres
function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-zA-Z0-9 ]';

    if(char.match(pattern)){
        return true;
    }
}
nome.addEventListener('keypress', function(e) {
    if(!checkChar(e)){
        e.preventDefault();
        
    }
})

senha.addEventListener('keyup', function(e) {
    const capsLockOn = e.getModifierState('CapsLock');
    
    if(capsLockOn){
        msgCaps.innerHTML = 'CapsLock está ativo'
        msgCaps.setAttribute('style', 'display:flex');
    }else{
        msgCaps.innerHTML = ''
        msgCaps.setAttribute('style', 'display:none');
    }
})

usuario.addEventListener('keypress', function(e) {
    if(!checkChar(e)){
        e.preventDefault();
    }
})


//validações de cadastro
nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome - <i>Insira no mínimo 3 caracteres<i>';
        nome.setAttribute('style', 'border-color: red');
        validNome;
    }else{
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome';
        nome.setAttribute('style', 'border-color: green');
        validNome = true;
    }
})

usuario.addEventListener('keyup', ()=>{


    if(usuario.value.length <= 5){
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuário - <i>Insira no mínimo 6 caracteres<i>';
        usuario.setAttribute('style', 'border-color: red');
        validUsuario;
    }else{
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'Usuário';
        usuario.setAttribute('style', 'border-color: green');
        validUsuario = true;
    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha - <i>Insira no mínimo 6 caracteres<i>';
        senha.setAttribute('style', 'border-color: red');
        validSenha;
    }else{
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: green');
        validSenha = true;
    }
})

confirmarSenha.addEventListener('keyup', ()=>{
    if(senha.value != confirmarSenha.value){
        labelConfirmarSenha.setAttribute('style', 'color: red');
        labelConfirmarSenha.innerHTML = 'Confirmar Senha - <i>As senhas não conferem<i>';
        confirmarSenha.setAttribute('style', 'border-color: red');
        validConfirmarSenha;
    }else{
        labelConfirmarSenha.setAttribute('style', 'color: green');
        labelConfirmarSenha.innerHTML = 'Confirmar Senha';
        confirmarSenha.setAttribute('style', 'border-color: green');
        validConfirmarSenha = true;
    }
})

cadastrar = function(){
    if(validNome && validUsuario && validSenha && validConfirmarSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        //validação
        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = ('Aguarde, cadastrando usuário ' + usuario.value);
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = ('');

        setTimeout(()=>{
        msgSuccess.innerHTML = ('Usuário ' + usuario.value + ' cadastrado com sucesso!');
        }, 1000)

        setTimeout(()=>{
            window.location.href = '../login.html';
        }, 3000)

    }else{



        //validação
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Verifique todos os campos e preencha corretamente.'
        msgSuccess.setAttribute('style', 'display: none');
        msgSuccess.innerHTML = ('');
        
    }
}

pageLogin = function(){
    window.location.href = '../../login.html';
}