//closure e o escopo criado quando uma funcao e declarada
// Esse escopo permite a funcao acessar e manupilar variaveis externa a funcao

// contesto lexico em cao

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
     return x
}
return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())