
const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, 'tarefas.csv')

const leituraArquivo = fs.promises.readFile(filePath)

leituraArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoArquivo) => textoArquivo.split('\n').slice(1))
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'true'
        }
    }))   
    .then((listaTarefas) => console.log(listaTarefas))
    .catch((error) => console.log('3RR0 D3T3CT4D0!!', error))