const pilotos = ['Vetel','Alonso', 'Raikkoner','Massa']
pilotos.pop()// massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()// Remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adionar e remover elementos

//adicionar
pilotos.splice(0, 0, 'Bottas', 'Massa')
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)// novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)