//JOIN E COMBIANÇÃO DE FUNÇÕES
/* 
const lista = [1, 2, 3, 4, 5]

console.log(lista.join(';'))
*/

const lista = [{nome: 'Alceu' }, {nome:'Dominique' }, {nome: 'Aroldo' }]
   
console.log(
        lista.map(e => e.nome)
        .filter((e) => e.startsWith('A'))
        .join('; ')
    )