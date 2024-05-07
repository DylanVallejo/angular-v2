

function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = ( a: number, b: number):string => {
    return `${a + b}`;
}



//en los parametros indicamos que sea obligatorio , opcional , y opcional con valor por defecto 
function multiply(firstNumber:number, secondNumber?:number, base:number = 2){
    return firstNumber * base;
}

interface Character {
    hp: number;
    name: string;
    showHp: () => string;
}


const healCharacter = (character:Character, amount:number) => {
    character.hp += amount;
    return character;
}

const strider:Character = {
    name: 'Strider',
    hp: 50,
    // showHp: function ():string {
    //     console.log(`Puntos de vida ${this.hp}`)
    // }
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 20);

strider.showHp();


// const result: number  = addNumbers(1, 2); 
// const result2: string = addNumbersArrow(1,2)
// const multiplyResult:number = multiply(5);

// console.log({result, result2, multiplyResult})


export {};