import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Link } from 'react-router';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';
import * as FeesClaimExpensesStore from '../store/FeesClaimExpenses';
import { Address, Fees} from '../store/FeesClaimExpenses';


export class AddressForm extends React.Component< AddressProp, void> {
  
    public render() {
    
        return <div>
            <h2>Address Form</h2>

            <label> Street </label> <input type="text" ref="street"  defaultValue={this.props.address.street}/>
            <br/>

            <button onClick={ this.next}>Save and Next</button>
    
        </div>;
    }

    next = () => {
        this.props.address.street = ReactDom.findDOMNode<HTMLInputElement>(this.refs["street"]).value;
        this.props.next();
    }


}

// Build the CounterProps type, which allows the component to be strongly typed
const provider = provide(
    (state: ApplicationState) => state.address, // Select which part of global state maps to this component
    FeesClaimExpensesStore.actionCreators      // Select which action creators should be exposed to this component
);
type AddressProp = typeof provider.allProps;


export default provider.connect(AddressForm);
