import { Component, Input  } from '@angular/core';
import {  PersonalInfo } from '../../models/fees-expenses.model';
import { FeesExpenseService } from '../../services/fees-expenses.service';

@Component({
	selector: 'personal-info-form',
    template: require('./personal-info-form.component.html'),
    styles: [require('./personal-info-form.component.css')]
    
})

export class PersonalInfoFormComponent {
    @Input() onNext;

    personalInfo: PersonalInfo;
    constructor(private feesExpensesService: FeesExpenseService) {
        this.personalInfo = feesExpensesService.getPersonalInfo();

    }

    submit() {
        this.onNext();
    }
   
}