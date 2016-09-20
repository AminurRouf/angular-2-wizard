import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Link } from 'react-router';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';
import * as FeesClaimExpensesStore from '../store/FeesClaimExpenses';
import {  Fees, Address, Person, FeesState} from '../store/FeesClaimExpenses';


export class AddressForm extends React.Component<FeesProp, void> {
  
    public render() {

        return <div>
            <h2>Address Form</h2>

            <p>Current step: <strong>{ this.props.step }</strong></p>

            <label> Street </label> <input type="text" ref="street"  defaultValue={this.props.fees.address.street}/>
            <br/>

            <button onClick={ this.next}>Save and Next</button>
    
          
        </div>;
    }

    next = () => {
        this.props.fees.address.street = ReactDom.findDOMNode<HTMLInputElement>(this.refs["street"]).value;
        this.props.next();
    }


}

// Build the CounterProps type, which allows the component to be strongly typed
const provider = provide(
    (state: ApplicationState) => state.feesClaimExpenses, // Select which part of global state maps to this component
    FeesClaimExpensesStore.actionCreators                 // Select which action creators should be exposed to this component
);
type FeesProp = typeof provider.allProps;
export default provider.connect(AddressForm);
