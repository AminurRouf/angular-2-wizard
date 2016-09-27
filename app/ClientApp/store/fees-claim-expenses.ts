
export  interface FeesState {
    step?: number;
    fees?: Fees;


}

export interface AddressState {
    address: Address;
    handleSubmit?: any;
    pristine?: any;
    reset?: any,
    submitting?: any,
}

export interface PersonState {
    person: Person;
    handleSubmit?: any;
    pristine?: any;
    reset?: any,
    submitting?: any,
}

export interface IFees {
    address: Address;
    person: Person;
}
export class Fees implements IFees {
    constructor(address?: Address, person?: Person) {

        this.address = address;
        this.person = person;
    }

    address: Address;
    person: Person;
}


export class Address {

    houseNumber: number;
    street: string;
}


export class Person  {
    name: string;
    age: number;
}




