import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Link } from 'react-router';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';
import * as FeesClaimExpensesStore from '../store/FeesClaimExpenses';
import {  Fees,  Person, FeesState} from '../store/FeesClaimExpenses';


export class UserForm extends React.Component<FeesProp, FeesState> {
 
    public render() {
        return <div>
            <h2>User Form</h2>
            <p>Address: {this.props.fees.address.street}</p>

            <p>Current step: <strong>{ this.props.step }</strong></p>

            <label> Name </label> <input type="text" ref="name" defaultValue={this.props.fees.person.name}/>
            <br/>
         
            <button onClick={ this.back}>Save and Back</button>
            <button onClick={ this.next}>Save and Next</button>
        </div>;
    }

    next = () => {
        this.props.fees.person.name = ReactDom.findDOMNode<HTMLInputElement>(this.refs["name"]).value;
        this.props.next();
    }

    back = () => {
        this.props.fees.person.name = ReactDom.findDOMNode<HTMLInputElement>(this.refs["name"]).value;
        this.props.back();
    }

}

// Build the CounterProps type, which allows the component to be strongly typed
const provider = provide(
    (state: ApplicationState) => state.feesClaimExpenses, // Select which part of global state maps to this component
    FeesClaimExpensesStore.actionCreators                 // Select which action creators should be exposed to this component
);
type FeesProp = typeof provider.allProps;
export default provider.connect(UserForm);
