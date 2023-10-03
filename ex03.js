/*ORIENTAÇÃO A PROTÓTIPO COM JS -> base p/ objeto*/
/*
const pessoa = {
    genero: 'feminino'
}

const dan = {
    nome: 'dan',
    idade: 22,
    __proto__: pessoa
}



console.log(dan.genero);*/

function Pessoa (nome, idade){
    this.nome = nome
    this.idade = idade
}
Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`)
}

const dani = new Pessoa('dani', 25);

//console.log(dani);

dani.falar()