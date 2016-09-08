import * as React from 'react';
import { SectionOne} from "./SectionOne";
import { Confirmation} from "./Confirmation";
import {IFeesClaimExpenses, IUser } from "../models/fees-claim-expenses";


export class Home extends React.Component<IFeesClaimExpenses, any> {
   public user: IUser;
   public fees: IFeesClaimExpenses;

    constructor(props) {
        super(props);
        this.state = { step: 1 };
        this.user = { lastName: '' };
    }
    

    public render() {
        return <div>
            <h1>Fees Claim Expenses Form</h1>
            <main>
                <span className="progress-step">Step {this.state.step}</span>

                {this.showStep() }
            </main>
        </div>;
    }

    nextStep=()=> {
        this.setState({ step: this.state.step + 1 });
    };

    previousStep = () => {
        this.setState({ step: this.state.step - 1 });
    };

    saveValues = (user: IUser): IUser => {
        debugger;
        this.user.lastName = user.lastName;
        return this.user;
    }


    showStep() {
 
        switch (this.state.step) {
        case 1:
                return <SectionOne    user={this.user} nextStep={this.nextStep} previousStep={this.previousStep}  saveValues={this.saveValues}/>;
        case 2:
                return <Confirmation  user={this.user} nextStep={this.nextStep} previousStep={this.previousStep} saveValues={this.saveValues} />;
                default :
                    return null;
        }
    };
}
