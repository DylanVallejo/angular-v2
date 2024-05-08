export class Person {
    
    // public name: string;
    // private address: string;
    // forma corta para definir clases en typescript se lo realiza en el constructor
    constructor(
        public name:string ,
        private address: string  = 'No address'
    ) {}
    
}


const ironMan = new Person('Kael', 'Durotar');


console.log(ironMan.name);
