import { Product, taxCalculator, tax as porcentTax } from "./06-function-destructuring";

//export ejecutara todo la funcionalidad existente por eso solo se debe tener las funcionalidades necesarias
//por eso se ejecuta dos veces la impresion de tax y total 
const shoppingCart :Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
    
];

const [total , tax] = taxCalculator( {products: shoppingCart,tax:porcentTax });

console.log('Total', total);
console.log('Tax', tax)