import { Component, Input  } from '@angular/core';
import {  TaxDeclaration, } from '../../models/fees-expenses.model';
import { FeesExpenseService } from '../../services/fees-expenses.service';

@Component({
    selector: 'tax-declaration-form',
    template: require('./tax-declaration-form.component.html'),

})

export class TaxDeclarationFormComponent {
    @Input() onNext;
    @Input() onBack;

    taxDeclaration: TaxDeclaration;
    constructor(private feesExpensesService: FeesExpenseService) {
        this.taxDeclaration = feesExpensesService.getTaxDeclaration();

    }
    submit() {
        this.onNext();
    }

    back() {
        this.onBack();
    }

 
}