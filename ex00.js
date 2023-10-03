class Carro {
 marca;
 cor;
 gastoMedio; 

 constructor(marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
 }
}

const uno = new Carro('Fiat', 'branco', 1/12);
console.log(uno);



