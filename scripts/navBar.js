const navbar = document.getElementById('scrolling')

function abrirMenu() {
    const abrir = document.getElementById('menu');
    abrir.style = 'animation-name: abrirMenu;';
    abrir.id = 'menuOpen';
    navbar.style = 'overflow: hidden;';
}

function fecharMenu() {
    const fechar = document.getElementById('menuOpen');
    fechar.style = 'animation-name: fecharMenu;';
    fechar.id = 'menu';
    navbar.style = 'overflow-y: scroll;';
}

function abrirSacola() {
    const abrir = document.getElementById('sacola');
    abrir.classList.remove('close');
    abrir.classList.add('open');
    navbar.style = 'overflow: hidden;';
}

function fecharSacola() {
    const fechar = document.getElementById('sacola');
    fechar.classList.remove('open');
    fechar.classList.add('closing');
    setTimeout(() => {
        fechar.classList.remove('closing');
        fechar.classList.add('close');        
    }, 1000);
    navbar.style = 'overflow-y: scroll;';
}

