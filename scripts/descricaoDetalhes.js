const edicaoDaHistoria = 3;

const capa = document.getElementById('capa');
capa.src = ('.' + books.at(edicaoDaHistoria).capa);
capa.alt = books.at(edicaoDaHistoria).nome;

const titulo = document.getElementById('tituloLivro');
const tituloLivro = document.createTextNode(books.at(edicaoDaHistoria).nome);
titulo.appendChild(tituloLivro);

const preco = document.getElementById('preco');
const precoLivro = document.createTextNode(books.at(edicaoDaHistoria).preco.toFixed(2));
const precoDoLivro = document.createTextNode ('R$' + books.at(edicaoDaHistoria).preco.toFixed(2))
preco.appendChild(precoDoLivro);

    if (precoLivro == '0.00') {
        const gratis = document.createTextNode('Grátis !')
        preco.innerText = "";
        preco.appendChild(gratis);
    }

const descricao = document.getElementById('descricao');
const detalhes = document.getElementById('tableDetalhes');

const sinopse = document.createTextNode(books.at(edicaoDaHistoria).sinopse);
descricao.appendChild(sinopse);

// const detalhes = ['nome', 'autor', 'ano', 'edição', 'legendas', 'interpretação', 'tempo', 'lançamento'];
const nome = document.getElementById('nome');
const nomeLivro = document.createTextNode(books.at(edicaoDaHistoria).nome);
nome.appendChild(nomeLivro);

const autor = document.getElementById('autor');
const autorLivro = document.createTextNode(books.at(edicaoDaHistoria).autor);
autor.appendChild(autorLivro);

const ano = document.getElementById('ano');
const anoLivro = document.createTextNode(books.at(edicaoDaHistoria).ano);
ano.appendChild(anoLivro)

const edicao = document.getElementById('edicao');
const edicaoLivro = document.createTextNode(books.at(edicaoDaHistoria).edicao);
edicao.appendChild(edicaoLivro);

const legendas = document.getElementById('legendas');
const legendaLivro = document.createTextNode(books.at(edicaoDaHistoria).legendas);
legendas.appendChild(legendaLivro);

const interpretacao = document.getElementById('interpretacao');
const interpretacaoLivro = document.createTextNode(books.at(edicaoDaHistoria).interpretacao);
interpretacao.appendChild(interpretacaoLivro);

const tempo = document.getElementById('tempo');
const tempoDoLivro = books.at(edicaoDaHistoria).tempo;
const minutosSegundos = tempoDoLivro.split(':');
const tempoLivro = document.createTextNode(minutosSegundos[1] + ' minutos e ' + minutosSegundos[2] + ' segundos');
tempo.appendChild(tempoLivro);

const lancamento = document.getElementById('lancamento');
const lancamentoDoLivro = books.at(edicaoDaHistoria).lancamento;
const lancado = books.at(edicaoDaHistoria).lancado;
const diaMesAno = lancamentoDoLivro.split('-');
const lancamentoLivro = document.createTextNode(diaMesAno[1] + '/' + diaMesAno[0] + '/' + diaMesAno[2]);
const emBreve = document.createTextNode('Em breve');

if (lancado == true) {
    lancamento.appendChild(lancamentoLivro);

}else{
    lancamento.appendChild(emBreve);

}


function dropdownDescricao() {
    const descricaoButton = document.getElementById('descricaoButton');

    if (descricao.className == 'fechado') {
        descricao.classList.remove('fechado');
        descricao.classList.add('aberto');
        descricaoButton.style = 'transform: rotate(-90deg);';
    }else{
        descricao.classList.remove('aberto');
        descricao.classList.add('fechado');
        descricaoButton.style = 'transform: rotate(90deg);';
    }
}

function dropdownDetalhes() {
    const detalhesButton = document.getElementById('detalhesButton');

    if (detalhes.className == 'fechado') {
        detalhes.classList.remove('fechado');
        detalhes.classList.add('aberta');
        detalhesButton.style = 'transform: rotate(-90deg);';
    }else{
        detalhes.classList.remove('aberta');
        detalhes.classList.add('fechado');
        detalhesButton.style = 'transform: rotate(90deg);';
    }
}