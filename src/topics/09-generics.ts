
// T es el estandar para el primer generico
export function whatsMyType<T>( argument :T ) : T {
    
    
    
    return argument;
}

const amIString = whatsMyType<string>('Hola mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4]);



console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
