export interface IFeesClaimExpensesProps {
 
    user?: IUser;
    taxDeclaration?:  ITaxDeclaration;
    nextStep:()=>void;
    previousStep: () => void;
    saveUser?: (user: IUser) => void;
    saveTaxDeclaration?: (taxDeclaration: ITaxDeclaration) => void;
}

export interface IUser {
    firstName: string;
    lastName: string;

}

export interface ITaxDeclaration {
    isFirstJob: boolean
}



