import * as React from 'react';
import * as ReactDom from 'react-dom';
import {IFeesClaimExpensesProps, IUser} from "../models/interfaces";
import {User } from "../models/classes";

export class SectionOne extends React.Component<IFeesClaimExpensesProps, {}> {
    private user: User;
    constructor(props) {
        super(props);
        this.user = new User();
         this.user = this.props.user;
    }



    public render() {
 
        return <div>
            <h1>Section One</h1>
            
            <p>Personal Information </p>
            <input type="label" ref="lastName" defaultValue={this.props.user.lastName} />

            <li className="form-footer list-unstyled">
                <button className="btn -primary pull-right" onClick={this.next}>Save &amp; Continue</button>
            </li>
        </div>;
    }

    next = () => {
 
        this.user.lastName = ReactDom.findDOMNode<HTMLInputElement>(this.refs["lastName"]).value;

        this.props.saveUser(this.user);
        this.props.nextStep();
    };


}

