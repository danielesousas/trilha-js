//CALCULADORA

/*let num = 44;

for (i = 0; i <= 10 ; i++) {
    console.log(i * num);
})*/
const num =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(i = 0; i<= 10; i++) {
    const numero = num[i];
   
    if (numero % 2 === 0) {
        console.log(numero);
    }  
}
