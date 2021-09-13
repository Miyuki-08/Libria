const carrossel = document.getElementById("carrossel");

const div_box = document.createElement('div')
const ul = document.createElement('ul');
const div = document.createElement('div');

lista.forEach( (item, index) => {
    
    const li = document.createElement('li');
    const a = document.createElement('a');
    const span = document.createElement('span')
    const a_imagem = document.createElement('a');
    const img = document.createElement('img');

    a_imagem.href = item.id;
    a.href = item.link;
    img.src = item.src;
    img.alt = item.alt;
    img.id = item.id;
    span.className = 'progress';

    a_imagem.appendChild( span );
    li.appendChild( a_imagem );
    a.appendChild(img);
    div.appendChild(a);
    ul.appendChild(li);

    console.log(index)

});

div_box.appendChild(ul);
div_box.appendChild(div)

carrossel.appendChild(div_box);

// for (let i = 1; i < lista.length; i++) {
//     const subtract = Object.keys(lista).length - 1;
//     const string = subtract.toString()
//     console.log(string)
// 