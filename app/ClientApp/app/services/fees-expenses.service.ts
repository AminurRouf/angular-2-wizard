import { Injectable }     from '@angular/core';
import { PersonalInfo, TaxDeclaration, ClaimStep, FeesExpensesClaim }     from '../models/fees-expenses.model';



@Injectable()
export class FeesExpenseService {
    personalInfo: PersonalInfo;
    taxDeclaration: TaxDeclaration;
    claimStep: ClaimStep;
    constructor() {
        this.personalInfo = new PersonalInfo();
        this.taxDeclaration = new TaxDeclaration();
        this.claimStep = new ClaimStep();
    }
   

  getPersonalInfo(): PersonalInfo {
      return this.personalInfo;
    }

  getTaxDeclaration(): TaxDeclaration {
      return this.taxDeclaration;
  }

  nextStep(): number {
      return this.claimStep.addStep();
  }

  getFeesExpensesClaim(): FeesExpensesClaim {
      return new FeesExpensesClaim(this.personalInfo, this.taxDeclaration);

  }
}
