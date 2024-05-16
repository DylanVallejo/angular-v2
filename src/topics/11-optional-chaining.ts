
export interface Passenger {
    
    name:string;
    children?: string [];
    
}


const passengerOne: Passenger = {
    name: 'Dylan',
}

const passengerTwo : Passenger = {
    name: 'Jane',
    children : ['Nathan']
}

const returnChildrenNumber = ( passenger : Passenger):number => {
    
    if ( !passenger.children) return 0
    //podemos indicar un valor opcional de no existir
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length || 0;
    
    console.log(passenger.name ,howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passengerOne);