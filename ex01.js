/*const nome = 'clark kent';

for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}*/

/*const notas = [];

notas.push(9);
notas.push(8);
notas.push(10);
notas.push(9);
notas.push(9);

let soma = 0;


for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}
let media = soma / notas.length;
console.log(media);*/

const totalSalas = parseInt(gets(2));

const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

for (let sala = 1; sala <= totalSalas; sala++) {
        const temTesouro = salasComTesouro.includes(sala);
        const temMonstro = salasComMonstro.includes(sala);
}
if ( salasComTesouro.includes(sala) ) {
    print("Tesouro na sala " + sala + "!");
} else if (salasComMonstro.includes(sala)) {
    print("Monstro na sala " + sala + "!");
}
