import * as React from 'react';
import {IFeesClaimExpensesProps} from "../models/fees-claim-expenses";

export class Confirmation extends React.Component<IFeesClaimExpensesProps, {}> {

    public render() {
        return <div>
            <h1>Confirmation</h1>

            <p>This is a simple example of CONFIRMATION component.</p>
            <p> Last Name : {this.props.user.lastName} </p>
         
            <li className="form-footer">
                <button className="btn -primary pull-right" onClick={() => { this.props.previousStep() } }>Back</button>
            </li>
        </div>;
    }
    
}
