import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Link } from 'react-router';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';
import * as FeesClaimExpensesStore from '../store/FeesClaimExpenses';
import { Person } from '../store/FeesClaimExpenses';


export class UserForm extends React.Component<PersonProp, void> {
 
    public render() {
        return <div>
            <h2>User Form</h2>

            <label> Name </label> <input type="text" ref="name" defaultValue={this.props.person.name}/>
            <br/>
         
            <button onClick={ this.back}>Save and Back</button>
            <button onClick={ this.next}>Save and Next</button>
        </div>;
    }

    next = () => {
        this.saveFormInput();
        this.props.next();
    }

    back = () => {
        this.saveFormInput();
        this.props.back();
    }

    saveFormInput() {
        this.props.person.name = ReactDom.findDOMNode<HTMLInputElement>(this.refs["name"]).value;
    }

}

// Build the CounterProps type, which allows the component to be strongly typed
const provider = provide(
    (state: ApplicationState) => state.person, // Select which part of global state maps to this component
    FeesClaimExpensesStore.actionCreators                 // Select which action creators should be exposed to this component
);
type PersonProp = typeof provider.allProps;
export default provider.connect(UserForm);
