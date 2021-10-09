const carrinho = [

    '{"nome": "Borracah","preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90}',
    '{"nome": "Kit de lapis","preco": 41.22}',
    '{"nome": "Caneta","preco": 7.50}'
]

// Retorna um Array apenas com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)