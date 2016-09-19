import * as React from 'react';
import { AddressForm} from "./AddressForm";
import { UserForm} from "./UserForm";
import { FeesState, Fees, Address, Person} from '../store/FeesClaimExpenses';

import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';
import * as FeesClaimExpensesStore from '../store/FeesClaimExpenses';



export class Home extends React.Component<FeesProp, FeesState> {
   
    public render() {
        return <div>
            <h1>Fees Claim Expenses Form</h1>
            <main>
                <span>Home Form Step {this.props.step}</span>

                {this.showStep() }
            </main>
        </div>;
    }
    showStep() {
        switch (this.props.step) {
            case 1:
                return <AddressForm next={this.props.next} {...this.props}/>;
            case 2:
                return <UserForm next={this.props.next} {...this.props}/>;
           
            default:
                return null;
        }
    };



}


// Build the CounterProps type, which allows the component to be strongly typed
const provider = provide(
    (state: ApplicationState) => state.feesClaimExpenses, // Select which part of global state maps to this component
    FeesClaimExpensesStore.actionCreators                 // Select which action creators should be exposed to this component
);
type FeesProp = typeof provider.allProps;


export default provider.connect(Home);