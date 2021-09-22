const estante = document.getElementById("destaquesDoMes");
const lancamento = document.getElementById("proximosLancamentos");

const div_container = document.createElement('div');

// lista de lançamentos
const proximos_lancamentos = books.filter((book) => {
  return book.lancado ==  false;
})

// livros já lançados
let destaques = books.filter((book) => {
  return book.lancado == true;
})

// livros lançados agora ordenados por mês
destaques = destaques.sort((a, b) => {
  return parseInt(a.lancamento.split('-')[0]) - parseInt(b.lancamento.split('-')[0])
});

// função que usamos para colocar os livros no HTML
const render = (book) => {

  const titulo = document.createElement('h3')
  const preco = document.createElement('h4')
  const link = document.createElement('a');
  const img = document.createElement('img');
  const div_livro = document.createElement('div')

  titulo.innerText = book.nome;

  // Operador Ternário
  preco.innerText = book.preco == 0 ? 'Grátis !' : `R$ ${book.preco.toFixed(2)}`;

  link.href = "../pages/book.html";
  img.src = '.' + book.capa;
  img.alt = book.nome;
  div_livro.id = book.nome.replace(/\s+/g, '-').toLowerCase(); // Os Tres Porquinhos => os-tres-porquinhos

  link.appendChild(img);
  link.appendChild(titulo);
  link.appendChild(preco);
  div_livro.appendChild(link);
  div_container.appendChild(div_livro);
}

proximos_lancamentos.forEach((book) => {
  render(book);
});

if (lancamento) {
    lancamento.appendChild(div_container.cloneNode(true));
}

// limpar container para adicionar novos livros
div_container.innerHTML = "";

destaques.forEach((book) => {
  render(book);
});

if (estante) {
    estante.appendChild(div_container.cloneNode(true));
}