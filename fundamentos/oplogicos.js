/*function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaldavel = !comprarSorvete // operador unario

    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaldavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))*/

var idade = 20

var maior20 = idade >= 20
var menor30 = idade <= 30

var entre = maior20 && menor30

console.log("maior que vinte", maior20)
console.log("menor que trinta", menor30)
console.log("entre vinte e trinta", entre)