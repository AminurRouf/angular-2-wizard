export interface IFeesClaimExpenses {
    user: IUser;
    nextStep:()=>void;
    previousStep: () => void;
    saveValues: (user:IUser) => IUser;
}

export interface IUser {
    lastName: string;
    
}

