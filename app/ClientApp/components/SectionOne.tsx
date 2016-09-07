import * as React from 'react';
import {IFeesClaimExpenses} from "../models/fees-claim-expenses";
import {INavigationState as NavigationState} from "../models/navigation-state";

export class SectionOne extends React.Component<IFeesClaimExpenses,{}> {
    constructor(props) {
        super(props);
        this.nextStep = this.props.nextStep;
    }

    public render() {
        return <div>
            <h1>Section One</h1>

            <p>This is a simple example of a React component.</p>
            <input type="label" ref="name" defaultValue={this.props.lastName} />
            <li className="form-footer">
                <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
            </li>
        </div>;
    }



    //nextStep() {
    //    debugger;
    //    this.props.nextStep();
    //}
    nextStep=() => {this.props.nextStep();};
}
