//MNIPULAÇÃO DE LISTAS
//Map

class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Dani'), new Pessoa('Dja'), new Pessoa('Dio'), new Pessoa('Estacio')]

//console.log(lista)

const listaNomes = lista.map((element) => {
    return element.name
})

console.log(listaNomes)