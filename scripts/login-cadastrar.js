const login = document.getElementById('input-login');
const cadastrar = document.getElementById('input-cadastrar');
const sectionLogin = document.getElementById('login');
const condicoes = document.getElementById('condicoes');

function checkLogin() {
    const sectionCadastrar = document.getElementById('cadastrar');

    if (login.checked == false) {
        sectionLogin.classList.remove('login-check');
        sectionLogin.classList.add('login-desabilitado');
        condicoes.classList.add('desabilitado');
        cadastrar.checked = true;

    }else{
        sectionLogin.classList.remove('login-desabilitado');
        sectionLogin.classList.add('login-check');
        condicoes.classList.remove('desabilitado');
        condicoes.classList.add('habilitado');
        cadastrar.checked = false;
    }
}

function checkCadastrar() {
    if (cadastrar.checked == true) {
        sectionLogin.classList.remove('login-check');
        sectionLogin.classList.add('login-desabilitado');
        condicoes.classList.add('desabilitado');
        login.checked = false;

    }else {
        sectionLogin.classList.remove('login-desabilitado');
        sectionLogin.classList.add('login-check');
        condicoes.classList.remove('desabilitado');
        condicoes.classList.add('habilitado');
        login.checked = true;
    }
}