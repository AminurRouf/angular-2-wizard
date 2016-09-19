import * as React from 'react';
import { SectionOne} from "./SectionOne";
import { Confirmation} from "./Confirmation";
import { SectionTwo} from "./SectionTwo";
import {IFeesClaimExpensesProps, IUser, ITaxDeclaration } from "../models/interfaces";
import {FeesClaimExpenses, User, TaxDeclaration } from "../models/classes";


interface IStepState {
    currentStep: number;
}

export class Home extends React.Component<{}, IStepState> {
  
    public fees: IFeesClaimExpensesProps;

    constructor(props) {
        super(props);
        this.state = { currentStep: 1 };
    
        this.fees = new FeesClaimExpenses(new User, new TaxDeclaration); 
    }
    
    public render() {
        return <div>
            <h1>Fees Claim Expenses Form</h1>
            <main>
                <span className="progress-step">Step {this.state.currentStep}</span>

                {this.showStep() }
            </main>
        </div>;
    }

    nextStep=()=> {this.setState({ currentStep: this.state.currentStep+1 });};

    previousStep = () => { this.setState({ currentStep: this.state.currentStep-1 }); };

    saveUser = (user: IUser) => {this.fees.user = user;}

    saveTaxDeclaration = (taxDeclaration: ITaxDeclaration) => {this.fees.taxDeclaration = taxDeclaration;}

    showStep() {
        switch (this.state.currentStep) {
            case 1:
                return <SectionOne  user={this.fees.user} nextStep={this.nextStep} previousStep={this.previousStep}  saveUser={this.saveUser}/>;
            case 2:
                return <SectionTwo  taxDeclaration={this.fees.taxDeclaration}  nextStep={this.nextStep} previousStep={this.previousStep} saveTaxDeclaration={this.saveTaxDeclaration} />;
            case 3:
                return <Confirmation  user={this.fees.user}  taxDeclaration={this.fees.taxDeclaration} nextStep={this.nextStep} previousStep={this.previousStep}  />;

        default:
                    return null;
        }
    };
}
