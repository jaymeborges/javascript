const saldacao = 'Opa' // contexto lexico 1

function exec(){
    const saudacao ='falaaa' // contesto lexico 2
    return saudacao
}
// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }

}
console.log(saldacao)
console.log(exec())
console.log(cliente)
