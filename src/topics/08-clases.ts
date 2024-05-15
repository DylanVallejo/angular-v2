export class Person {
    
    // public name: string;
    // private address: string;
    // forma corta para definir clases en typescript se lo realiza en el constructor
    constructor(
        public name:string ,
        public lastName: string,
        private address: string  = 'No address'
    ) {}
    
}

export class Hero  {
    
    // public person: Person;
    
    constructor(
        public alterEgo : string,
        public age : number, 
        public realName: string,
        public person: Person
    ){
        // this.person = new Person(realName);
    }
    
}
// export class Hero extends Person {
    
//     constructor(
//         public alterEgo : string,
//         public age : number, 
//         public realName: string
//     ){
//         super( realName, 'Durotar' )
//     }
    
// }


const kael = new Person('Kael',"Talas", "Durotar")
const ironMan = new Hero('Kael', 100, 'Kaeltalas', kael );


console.log(ironMan);
