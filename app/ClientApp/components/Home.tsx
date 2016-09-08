import * as React from 'react';
import { SectionOne} from "./SectionOne";
import { Confirmation} from "./Confirmation";
import {IFeesClaimExpensesProps, IUser } from "../models/fees-claim-expenses";

interface IStepState {
    currentStep: number;
}

export class Home extends React.Component<IFeesClaimExpensesProps, IStepState> {
   public user: IUser;
  
    constructor(props) {
        super(props);
        this.state = { currentStep: 1 };
        this.user = { lastName: '', firstName: '' };
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

    nextStep=()=> {
        this.setState({ currentStep: this.state.currentStep+1 });
    };

    previousStep = () => {
        this.setState({ currentStep: this.state.currentStep-1 });
    };

    saveValues = (user: IUser) => {
        this.user.lastName = user.lastName;
       
    }

    showStep() {
 
        switch (this.state.currentStep) {
        case 1:
                return <SectionOne    user={this.user} nextStep={this.nextStep} previousStep={this.previousStep}  saveValues={this.saveValues}/>;
        case 2:
                return <Confirmation  user={this.user} nextStep={this.nextStep} previousStep={this.previousStep} saveValues={this.saveValues} />;
                default :
                    return null;
        }
    };
}
