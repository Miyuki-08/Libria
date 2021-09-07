const estante = document.getElementById("destaques_do_mes");
const lancamento = document.getElementById("proximos-lancamentos")

const div_container = document.createElement('div')

books.forEach( (book) => {

    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const a = document.createElement('a');
    const img = document.createElement('img');
    const div_livro = document.createElement('div')
    
    const nomeDoLivro = document.createTextNode(book.nome);
    const precoDoLivro = document.createTextNode('R$' + book.preco);
    h3.appendChild(nomeDoLivro); 
    h4.appendChild(precoDoLivro);
    
        if (book.preco == 0.00) {
            const gratis = document.createTextNode('Grátis !')
            h4.innerText = "";
            h4.appendChild(gratis);
        }
    
    a.href = book.capa;
    img.src = book.capa;
    img.alt = book.nome;
    div_livro.id = book.nome;
    
    a.appendChild(img);
    a.appendChild(h3);
    a.appendChild(h4);
    div_livro.appendChild(a);
    div_container.appendChild(div_livro);
});

estante.appendChild(div_container.cloneNode(true));
lancamento.appendChild(div_container.cloneNode(true));