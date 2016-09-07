import * as React from 'react';
import { SectionOne} from "./SectionOne";
import { Confirmation} from "./Confirmation";
import {IFeesClaimExpenses} from "../models/fees-claim-expenses";


export class Home extends React.Component<IFeesClaimExpenses, any> {
    constructor(props) {
        super(props);
        this.state = { step: 1};
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



    showStep() {
        debugger;
        switch (this.state.step) {
        case 1:
            return  <SectionOne lastName="roufy" nextStep={this.nextStep}  />;
        case 2:
                return <Confirmation lastName="roufy" nextStep={this.nextStep}/>;
                default :
                    return null;
        }
    };
}
