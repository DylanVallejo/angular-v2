export class Person {
    
    // public name: string;
    // private address: string;
    // forma corta para definir clases en typescript se lo realiza en el constructor
    constructor(
        public name:string ,
        private address: string  = 'No address'
    ) {}
    
}

export class Hero extends Person {
    
    constructor(
        public alterEgo : string,
        public age : number, 
        public realName: string
    ){
        super( realName, 'Durotar' )
    }
    
}


const ironMan = new Hero('Kael', 100, 'Kaeltalas', );


console.log(ironMan);
