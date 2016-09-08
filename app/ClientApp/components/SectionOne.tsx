import * as React from 'react';
import * as ReactDom from 'react-dom';
import {IFeesClaimExpenses, IUser} from "../models/fees-claim-expenses";

export class SectionOne extends React.Component<IFeesClaimExpenses, {}> {
     private user: IUser;
    constructor(props) {
        super(props);
        this.user = { lastName: props.user.lastName}
    }

    public render() {
        return <div>
            <h1>Section One</h1>

            <p>This is a simple example of a React component.</p>
            <input type="label" ref="lastName" defaultValue={this.props.user.lastName} />

            <li className="form-footer">
                <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
            </li>

       
        </div>;
    }

    nextStep = () => {
        debugger;
        
        let lastNameInput = ReactDom.findDOMNode<HTMLInputElement>(this.refs["lastName"]);
        this.user.lastName = lastNameInput.value;
        this.props.saveValues(this.user);
        this.props.nextStep();
    };


}

