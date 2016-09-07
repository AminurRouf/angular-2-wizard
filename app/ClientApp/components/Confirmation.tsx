import * as React from 'react';
import {IFeesClaimExpenses} from "../models/fees-claim-expenses";

export class Confirmation extends React.Component<IFeesClaimExpenses, {}> {

    public render() {
        return <div>
            <h1>Confirmation</h1>

            <p>This is a simple example of CONFIRMATION component.</p>
            <p> Last Name : {this.props.lastName} </p>
         
         
        </div>;
    }



}
