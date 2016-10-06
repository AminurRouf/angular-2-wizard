import { Injectable }     from '@angular/core';


export class FeesExpensesClaim {
    constructor(private personalInfo: PersonalInfo, private taxDeclaration: TaxDeclaration) {

    }
    
}

export class PersonalInfo {
    constructor(private name = "",
        private email = "",
        private confirmEmail ="") {

    }

 

}

export class TaxDeclaration {
    constructor(private isFirstJob = false,
            private isOnlyJob = false,
            private hasAnotherJob = false,
            private hasNotFullyRepaidStudentLoan =false) {

    }
}

@Injectable()
export class ClaimStep {
    currentStep: number;
    constructor() {
        this.currentStep = 1;
    }

    addStep(): number {
        return this.currentStep++;
       
    }

  

    subtractStep() {
        this.currentStep = this.currentStep - 1;
        return this.currentStep;
    }
}
