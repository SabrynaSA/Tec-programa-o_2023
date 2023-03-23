class Operacoes{
    constructor(){

    }

    somar(valorA,valorB){
        console.log(valorA+valorB)
    }

    somar(valorA,valorB,valorC){
        console.log(valorA+valorB+valorC)
    }
}

var objeto = new Operacoes()
objeto.somar(10,20,30)