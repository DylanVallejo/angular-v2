interface Product  {
    description: string; 
    price :number;
    
}

const phone : Product = {
    description: "Nokia A1",
    price : 150
}

const tablet : Product = {
    description: 'iPad Air',
    price: 250
}

interface TaxCalculationsOptions {
    tax:number;
    products: Product[];
}

function taxCalculator( options: TaxCalculationsOptions ): [number,number]{
    
    const { tax , products} = options
    let total = 0;
    products.forEach(  ({price})  =>{
        total += price;
    });
    return [total, total * tax];
}

const shoopingCart  = [phone, tablet];
const tax = 0.15;

const result = taxCalculator({products: shoopingCart,tax: tax})
const  [total,finalTax]:number[] = result;
console.log('Total ',total);
console.log('Tax', finalTax);

export {};