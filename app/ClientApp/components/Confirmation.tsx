import * as React from 'react';
import {IFeesClaimExpensesProps} from "../models/interfaces";

export class Confirmation extends React.Component<IFeesClaimExpensesProps, {}> {

    public render() {
        debugger;
        return <div>
            <h1>Confirmation</h1>

            <p>This is a simple example of CONFIRMATION component.</p>
            <p> Last Name: {this.props.user.lastName} </p>
            <p> Is First Job: {this.props.taxDeclaration.isFirstJob.toString()} </p>
         
            <li className="form-footer list-unstyled">
                <button className="btn -primary pull-right" onClick={() => { this.props.previousStep() } }>Back</button>
            </li>
        </div>;
    }
    
}
