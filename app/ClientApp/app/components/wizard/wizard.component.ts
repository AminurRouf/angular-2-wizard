import { Component, Inject  } from '@angular/core';
import { FeesExpenseService } from '../../services/fees-expenses.service';
import {  ClaimStep } from '../../models/fees-expenses.model';

@Component({
	selector: 'wizard',
	template: require('./wizard.component.html')
})

export class WizardComponent  {

    wizard: ClaimStep;
    constructor(private claimStep: ClaimStep) {
        this.wizard = claimStep;
    }

    onNext = () => {
        this.wizard.addStep();
    }

    onBack = () => {
        this.wizard.subtractStep();
    }
 
}