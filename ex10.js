//GERANDO ASSICRONISMO

const promessaNumero = new Promise ((resolve, reject) => { letTimout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 100)
})
    console.log('1, 2, 3 GO!')
    promessaNumero
        .then((value) => {
            console.log(value)
            return value + 10
        })
        .then((value) => {
            console.log(value)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(()=> {
            console.log('FINALIZOU!!')
        })