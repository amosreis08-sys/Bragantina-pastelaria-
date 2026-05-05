const produtos = [
    { cat: 'Salgados', nome: "Carne com Queijo", desc: "Carne moída temperada com muito queijo derretido!", preco: 19.00 },
    { cat: 'Salgados', nome: "Frango com Catupiry", desc: "Frango desfiado temperado com o verdadeiro Catupiry!", preco: 18.00 },
    { cat: 'Salgados', nome: "Catupiry e Queijo +", desc: "A combinação perfeita de Catupiry com queijo!", preco: 18.00 },
    { cat: 'Salgados', nome: "Vento", desc: "Pastel sem recheio, crocante e sequinho.", preco: 8.00 },
    { cat: 'Salgados', nome: "Muçarela", desc: "Queijo muçarela derretido.", preco: 14.00 },
    { cat: 'Salgados', nome: "Frango", desc: "Frango temperado com tempero da casa.", preco: 13.00 },
    { cat: 'Salgados', nome: "Calabresa", desc: "Calabresa Aurora moída.", preco: 13.00 },
    { cat: 'Salgados', nome: "Pizza", desc: "Queijo muçarela, orégano e tomate fatiado.", preco: 14.00 },
    { cat: 'Salgados', nome: "Palmito", desc: "Creme de palmito delicioso.", preco: 13.00 },
    { cat: 'Salgados', nome: "Carne", desc: "Carne moída com tempero da casa.", preco: 14.00 },
    { cat: 'Salgados', nome: "Queijo Minas", desc: "Queijo minas frescal cortado em cubos.", preco: 13.00 },
    { cat: 'Salgados', nome: "Bauru", desc: "Muçarela, presunto, tomate fatiado e orégano.", preco: 15.00 },
    { cat: 'Salgados', nome: "3 Queijos", desc: "Muçarela derretida, Catupiry original e parmesão.", preco: 17.00 },
    { cat: 'Salgados', nome: "Americano", desc: "Muçarela, bacon, milho e orégano.", preco: 18.00 },
    { cat: 'Salgados', nome: "Mexicano", desc: "Muçarela, calabresa, cebola, pimenta e orégano.", preco: 18.00 },
    { cat: 'Salgados', nome: "Sírio", desc: "Carne moída temperada, cebola, hortelã e limão.", preco: 16.00 },
    { cat: 'Salgados', nome: "Vegetariano", desc: "Muçarela, brócolis, milho, alho frito e orégano.", preco: 17.00 },
    { cat: 'Salgados', nome: "Crocante", desc: "Muçarela, bacon, presunto, milho, batata palha.", preco: 18.00 },
    { cat: 'Salgados', nome: "Ô pastel", desc: "Carne moída, muçarela, purê, parmesão e orégano.", preco: 18.00 },
    { cat: 'Salgados', nome: "Mineirinho", desc: "Frango, queijo minas, milho e orégano.", preco: 19.00 },
    { cat: 'Salgados', nome: "Portuguesa", desc: "Muçarela, presunto, ovos, cebola, azeitona.", preco: 18.00 },
    { cat: 'Salgados', nome: "Brócolis Especial", desc: "Muçarela, brócolis, bacon, parmesão.", preco: 19.00 },
    { cat: 'Salgados', nome: "Marguerita", desc: "Queijo, orégano, tomate e manjericão.", preco: 14.50 },
    { cat: 'Salgados', nome: "Linguiça Bragantina", desc: "Linguiça bragantina e vinagrete.", preco: 19.00 },
    { cat: 'Salgados', nome: "Pernil", desc: "Pernil temperado e desfiado com vinagrete.", preco: 20.00 },
    { cat: 'Salgados', nome: "Pizza de Pepperoni", desc: "Muçarela, tomate, pepperoni e orégano.", preco: 19.00 },
    { cat: 'Salgados', nome: "Carne com Vinagrete", desc: "Carne moída temperada com vinagrete.", preco: 19.00 },
    { cat: 'Doces', nome: "Pastel Doce de Pudim", desc: "LANÇAMENTO: Doce, cremoso e irresistível!", preco: 18.00, lancamento: true },
    { cat: 'Doces', nome: "Doce de leite", desc: "Doce de leite cremoso.", p1: 11.00, p2: 16.00 },
    { cat: 'Doces', nome: "Romeu e Julieta", desc: "Queijo minas e goiabada.", p1: 12.00, p2: 17.00 },
    { cat: 'Doces', nome: "Banana 1", desc: "Banana e doce de leite.", p1: 12.00, p2: 17.00 },
    { cat: 'Doces', nome: "Banana 2", desc: "Banana e leite condensado.", p1: 12.00, p2: 17.00 },
    { cat: 'Doces', nome: "Nutella 2", desc: "Nutella e morango.", p1: 18.00, p2: 23.00 },
    { cat: 'Especiais', nome: "Crazy Dog", desc: "Duas salsichas e purê.", preco: 19.00 },
    { cat: 'Especiais', nome: "Monte seu pastel", desc: "Escolha 3 recheios.", preco: 31.00 },
    { cat: 'Bebidas', nome: "Refri lata", desc: "Sabores variados.", preco: 9.00 },
    { cat: 'Bebidas', nome: "Coca-cola 2 Litros", desc: "Zero e normal.", preco: 17.00 },
    { cat: 'Porções', nome: "Batata Cheddar Bacon", desc: "Frita com cobertura especial.", p1: 31.00, p2: 36.00, p3: 41.00, t: ["100g","250g","350g"] },
    { cat: 'Porções', nome: "16 Mini pastéis", desc: "Sabores tradicionais.", preco: 26.00 }
];

let carrinho = [];
const fone = "5511995759202";
let catAtiva = 'Todos';

function render() {
    const grid = document.getElementById('lista-produtos');
    const busca = document.getElementById('buscar').value.toLowerCase();
    grid.innerHTML = '';

    const filtrados = produtos.filter(p => (catAtiva === 'Todos' || p.cat === catAtiva) && p.nome.toLowerCase().includes(busca));

    filtrados.forEach(p => {
        let precosHtml = '';
        if(p.p1 !== undefined) {
            const labels = p.t || ["7x22", "12x22", "Especial"];
            precosHtml += criaPreco(p.nome, labels[0], p.p1);
            precosHtml += criaPreco(p.nome, labels[1], p.p2);
            if(p.p3) precosHtml += criaPreco(p.nome, labels[2], p.p3);
        } else {
            precosHtml = criaPreco(p.nome, "Valor", p.preco);
        }

        grid.innerHTML += `
            <div class="card ${p.lancamento ? 'card-lancamento' : ''}">
                <div>
                    ${p.lancamento ? '<span class="badge-lancamento">🚀 LANÇAMENTO</span>' : ''}
                    <div class="nome">${p.nome}</div>
                    <p class="descricao">${p.desc}</p>
                </div>
                ${precosHtml}
            </div>`;
    });
}

function criaPreco(nome, label, valor) {
    return `
        <div class="price-row">
            <span><small>${label}</small><br><strong>R$ ${valor.toFixed(2).replace('.',',')}</strong></span>
            <button class="btn-add" onclick="addCart('${nome} - ${label}', ${valor})">+ Add</button>
        </div>`;
}

function addCart(item, preco) {
    carrinho.push({ item, preco });
    atualizaCarrinho();
}

function limparCarrinho() {
    if(confirm("Esvaziar o carrinho?")) {
        carrinho = [];
        atualizaCarrinho();
    }
}

function atualizaCarrinho() {
    const footer = document.getElementById('cart-footer');
    const total = carrinho.reduce((acc, i) => acc + i.preco, 0);
    if(carrinho.length > 0) {
        footer.style.display = 'flex';
        document.getElementById('cart-count').innerText = carrinho.length;
        document.getElementById('cart-total').innerText = `R$ ${total.toFixed(2).replace('.',',')}`;
    } else {
        footer.style.display = 'none';
    }
}

function enviarPedido() {
    const tipoEntrega = document.querySelector('input[name="tipo_entrega"]:checked').value;
    let msg = `*NOVO PEDIDO - PASTÉIS PREMIUM*\n`;
    msg += `------------------------------\n`;
    msg += `📍 *OPÇÃO:* ${tipoEntrega.toUpperCase()}\n`;
    msg += `------------------------------\n\n`;
    
    let total = 0;
    const resumo = {};
    carrinho.forEach(c => {
        resumo[c.item] = (resumo[c.item] || 0) + 1;
        total += c.preco;
    });

    for(let key in resumo) msg += `✅ ${resumo[key]}x ${key}\n`;
    
    msg += `\n------------------------------\n`;
    msg += `*TOTAL: R$ ${total.toFixed(2).replace('.',',')}*\n`;
    msg += `------------------------------\n\n`;
    msg += `_Olá! Este é meu pedido, aguardo confirmação._`;

    window.open(`https://wa.me/${fone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function filtrarCategoria(cat) {
    catAtiva = cat;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.innerText.includes(cat)));
    render();
}

document.getElementById('buscar').addEventListener('input', render);
render();