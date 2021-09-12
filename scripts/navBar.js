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
    abrir.style = 'animation-name: abrirSacola; display: block;';
    abrir.id = 'sacolaOpen';
    navbar.style = 'overflow: hidden;';
}

function fecharSacola() {
    const fechar = document.getElementById('sacolaOpen');
    fechar.style = 'animation-name: fecharSacola;';
    fechar.id = 'sacola';
    navbar.style = 'overflow-y: scroll;';
}