const carrossel = document.getElementById("carrossel");

const ul = document.createElement('ul');
const div = document.createElement('div');

lista.forEach( (item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const a_imagem = document.createElement('a');
    const img = document.createElement('img');

    a_imagem.href = item.id;
    a.href = item.link;
    img.src = item.src;
    img.alt = item.alt;
    img.id = item.id;

    li.appendChild( a_imagem );
    a.appendChild(img);
    div.appendChild(a);
    ul.appendChild(li);
});

carrossel.appendChild(div);
carrossel.appendChild(ul);