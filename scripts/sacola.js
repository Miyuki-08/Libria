const produtoUm = 0;

const itemUm = document.getElementById('itemUm');
itemUm.src = '.' + books[produtoUm].capa;
itemUm.alt = books[produtoUm].nome;

const nomeItemUm = document.getElementById('nomeItemUm');
const itemNomeUm = document.createTextNode(books[produtoUm].nome);
nomeItemUm.appendChild(itemNomeUm);

const totalItemUm = document.getElementById('totalItemUm');
const itemUmTotal = books[produtoUm].preco;
const itemTotalUm = document.createTextNode(itemUmTotal.toFixed(2));
totalItemUm.appendChild(itemTotalUm);


const produtoDois = 3;

const itemDois = document.getElementById('itemDois');
itemDois.src = '.' + books[produtoDois].capa;
itemDois.alt = books[produtoDois].nome;

const nomeItemDois = document.getElementById('nomeItemDois');
const itemNomeDois = document.createTextNode(books[produtoDois].nome);
nomeItemDois.appendChild(itemNomeDois);

const totalItemDois = document.getElementById('totalItemDois');
const itemDoisTotal = books[produtoDois].preco;
const itemTotalDois = document.createTextNode(itemDoisTotal.toFixed(2));
totalItemDois.appendChild(itemTotalDois);


const valueUm = document.getElementById('valueProdutoUm');
const valueDois = document.getElementById('valueProdutoDois');
const itens = document.getElementById('itens');
const numeroItens = valueUm.value * 1 + valueDois.value * 1;
const itensNumero = document.createTextNode(' ( ' + numeroItens  + ' itens )');
itens.appendChild(itensNumero);


const total = document.getElementById('total');
const subtotal = itemUmTotal + itemDoisTotal;
const valorTotal = document.createTextNode(subtotal.toFixed(2));
total.appendChild(valorTotal);

const gratis = document.createTextNode('Grátis !');

if (itemDoisTotal == 0.00) {
    totalItemDois.innerText = "";
    totalItemDois.appendChild(gratis);
}

if (itemUmTotal == 0.00) {
    totalItemUm.innerText = "";
    totalItemUm.appendChild(gratis);
}