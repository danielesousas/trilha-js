//MANIPULANDO ARQUIVOS ATRAVÉS DE PROMISES

/*const fs = require('fs')
const leituraArquivo = fs.promises.readFile('tarefas.csv')
leituraArquivo.then((arquivo) =>{
    console.log(arquivo.toString('utf8'))
})
.catch((error) =>{
    console.log('Erro Detectado!', error)
})*/

const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname,'tarefas.csv')

const leituraArquivo = fs.promises.readFile(filePath)
leituraArquivo.then((arquivo) =>{
    console.log(arquivo.toString('utf8'))
})
.catch((error) =>{
    console.log('Erro Detectado!', error)
})