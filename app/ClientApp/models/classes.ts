import {IFeesClaimExpensesProps, IUser, ITaxDeclaration} from "./interfaces";

export class FeesClaimExpenses implements IFeesClaimExpensesProps {
    constructor(user?:IUser, taxDeclaration?:TaxDeclaration) {
        this.user = user;
        this.taxDeclaration = taxDeclaration;
    }

    nextStep(): void {}

    previousStep(): void {}

    user?: IUser;
    taxDeclaration?: ITaxDeclaration;

}

export class User implements IUser{
    firstName: string;
    lastName: string;
}

export class TaxDeclaration implements ITaxDeclaration {
    isFirstJob: boolean
}




