export interface IFeesClaimExpensesProps {
    user: IUser;
    nextStep:()=>void;
    previousStep: () => void;
    saveValues: (user:IUser) => void;
}

export interface IUser {
    firstName:string;
    lastName: string;
    
}

