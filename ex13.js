//ASYNC e AWAIT
//Simplica um callback, só se usa await com async

const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoArquivo = arquivo.toString('utf8')
        console.log(textoArquivo)
    } catch(error) {
        console.log(error)
    } finally {
        console.log('FINALIZOU!')
    }
}

buscarArquivo()