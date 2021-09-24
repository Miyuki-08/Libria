const lancamento = document.getElementById("livros");

const div_container = document.createElement('div')

books.forEach( (book) => {

    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const a = document.createElement('a');
    const img = document.createElement('img');
    const div_livro = document.createElement('div')
    
    const nomeDoLivro = document.createTextNode(book.nome);
    h3.appendChild(nomeDoLivro); 
    
    img.src = '.' + book.capa;
    img.alt = book.nome;
    div_livro.id = book.nome;
    
    a.appendChild(img);
    a.appendChild(h3);
    div_livro.appendChild(a);
    div_container.appendChild(div_livro);
});

lancamento.appendChild(div_container.cloneNode(true));