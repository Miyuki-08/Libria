const estante = document.getElementById("destaques_do_mes");
const lancamento = document.getElementById("proximos-lancamentos");
const destaquesDoMes = document.getElementById("destaquesDoMes");
const proximos = document.getElementById("proximosLancamentos")

const div_container = document.createElement('div')

// lista de lançamentos
const proximos_lancamentos = books.filter((book) => {
  return book.lancado == false;
})

// livros já lançados
let destaques = books.filter((book) => {
  return book.lancado == true;
})

// livros lançados agora ordenados por mês
destaques = destaques.sort((a, b) => {
  return parseInt(a.lancamento.split('-')[0]) - parseInt(b.lancamento.split('-')[0])
});

console.log(destaques);

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

  link.href = "./pages/book.html";
  img.src = book.capa;
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
lancamento.appendChild(div_container.cloneNode(true));

// limpar container para adicionar novos livros
div_container.innerHTML = "";

destaques.forEach((book) => {
  render(book);
});
estante.appendChild(div_container.cloneNode(true));

// books.forEach((book) => {

//   const titulo = document.createElement('h3')
//   const preco = document.createElement('h4')
//   const link = document.createElement('a');
//   const img = document.createElement('img');
//   const div_livro = document.createElement('div')

//   titulo.innerText = book.nome;

//   // Operador Ternário
//   preco.innerText = book.preco == 0 ? 'Grátis !' : `R$ ${book.preco.toFixed(2)}`;
//   // const nomeDoLivro = document.createTextNode(book.nome);
//   // const precoDoLivro = document.createTextNode('R$' + book.preco.toFixed(2));
//   // h3.appendChild(nomeDoLivro); 
//   // h4.appendChild(precoDoLivro);

//   // if (book.preco == 0.00) {
//   //     const gratis = document.createTextNode('Grátis !')
//   //     h4.innerText = "";
//   //     h4.appendChild(gratis);
//   // }

//   link.href = "./pages/book.html";
//   img.src = book.capa;
//   img.alt = book.nome;
//   div_livro.id = book.nome.replace(/\s+/g, '-').toLowerCase(); // Os Tres Porquinhos => os-tres-porquinhos
//   // div_livro.id = book.nome;

//   link.appendChild(img);
//   link.appendChild(titulo);
//   link.appendChild(preco);
//   div_livro.appendChild(link);
//   div_container.appendChild(div_livro);
// });