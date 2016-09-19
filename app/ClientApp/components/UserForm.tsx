import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Link } from 'react-router';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';
import * as FeesClaimExpensesStore from '../store/FeesClaimExpenses';
import {  Fees, Address, Person, FeesState} from '../store/FeesClaimExpenses';


export class UserForm extends React.Component<FeesProp, FeesState> {
 
    public render() {
        debugger;
        return <div>
            <h1>Counter</h1>

            <p>User Form</p>

            <p>Current step: <strong>{ this.props.step }</strong></p>
            <button onClick={ () => { this.props.next(); } }>Next</button>


        </div>;
    }

}

// Build the CounterProps type, which allows the component to be strongly typed
const provider = provide(
    (state: ApplicationState) => state.feesClaimExpenses, // Select which part of global state maps to this component
    FeesClaimExpensesStore.actionCreators                 // Select which action creators should be exposed to this component
);
type FeesProp = typeof provider.allProps;
export default provider.connect(UserForm);
