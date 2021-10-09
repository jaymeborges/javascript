class Lancamento {
    constructor(nome = 'Generico', valor = 0){
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.mes = ano
        this.lancamentos = []
    }

    addLancmentos(...lancamentos){
      lancamentos.forEach(l => this.lancamentos.push(l))  
    }

    sumario() {
        let  valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salrio = new Lancamento('salrio', 45000)
const contaDeluz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancmentos(salrio, contaDeluz)
console.log(contas.sumario())
