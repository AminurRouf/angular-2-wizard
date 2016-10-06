import { Component, Input  } from '@angular/core';
import {  PersonalInfo, TaxDeclaration } from '../../models/fees-expenses.model';
import { FeesExpenseService } from '../../services/fees-expenses.service';
import { FeesSubmissionService } from '../../services/fees-submission.service';

@Component({
	selector: 'result-form',
    template: require('./result-form.component.html'),
    providers: [ FeesSubmissionService ]
    
})

export class ResultFormComponent {
    @Input() onBack;

    personalInfo: PersonalInfo;
    taxDeclaration: TaxDeclaration;
    submissionMessage: any;
    errorMessage: any;

    constructor(private feesExpensesService: FeesExpenseService, private feesSubmissionService: FeesSubmissionService) {
        this.personalInfo = feesExpensesService.getPersonalInfo();
        this.taxDeclaration = feesExpensesService.getTaxDeclaration();

    }

    back() {

        this.onBack();
    }


    submit() {

        console.log(this.submissionMessage);
        this.feesSubmissionService.submitClaim(this.feesExpensesService.getFeesExpensesClaim())
            .subscribe(
            message => console.log(this.submissionMessage = message),
            error => this.errorMessage = error);

    }
   
}