import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { WizardComponent } from './components/wizard/wizard.component';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';
import { TaxDeclarationFormComponent } from './components/tax-declaration-form/tax-declaration-form.component';
import { ResultFormComponent } from './components/result-form/result-form.component';
import { FeesExpenseService } from './services/fees-expenses.service';
import { ClaimStep }  from "./models/fees-expenses.model";
import { EqualValidator } from './validators/validators.directive';


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        WizardComponent,
        PersonalInfoFormComponent,
        TaxDeclarationFormComponent,
        ResultFormComponent,
        EqualValidator
    ],
    
    providers: [FeesExpenseService, ClaimStep ],

    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: WizardComponent },
            { path: '**', redirectTo: 'home' } 
        ])
    ]


})
export class AppModule {
}
