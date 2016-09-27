import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Link } from 'react-router';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';

import {  Fees, Address, Person, FeesState} from '../store/fees-claim-expenses';
import * as ActionCreator from '../store/actions';

export class ConfirmationForm extends React.Component<FeesProp, void> {
  
    public render() {

        return <div>
            
            <h2>Confirmation Form</h2>

         

            <p>Current step: <strong>{ this.props.step }</strong></p>

            <p>Name: {this.props.fees.person.name}</p>
            <p>Address: {this.props.fees.address.street}</p>

            <button onClick={ this.props.back}>Back</button>
    
          
           
        </div>;
    }

 
}

// Build the CounterProps type, which allows the component to be strongly typed
const provider = provide(
    (state: ApplicationState) => state.feesClaimExpenses, 
    {back: ActionCreator.actionCreators.back }               
);
type FeesProp = typeof provider.allProps;
export default provider.connect(ConfirmationForm);
