class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome) {this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco) {this.preco = pPreco}

    calcularDesconto(pDesconto){
        this.Preco = this.Preco - ((this.preco*pDesconto)/100)
    }
}

var obj_livro1 = new Livro("Use a cabeça Java",200)
var obj_livro2 = new Livro("Use a cabeça C#",170)

var lista = []

lista.push(obj_livro1)
lista.push(obj_livro2)

/*/console.log(lista[1]) a possicao da lista comeca 
em zero entao 1 vai mostrar o livro 2*/

console.log(lista)
