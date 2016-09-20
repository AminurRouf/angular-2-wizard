import * as React from 'react';
import { AddressForm} from "./AddressForm";
import { UserForm} from "./UserForm";
import { ConfirmationForm} from "./ConfirmationForm";


import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';
import * as FeesClaimExpensesStore from '../store/FeesClaimExpenses';


export class Home extends React.Component<FeesProp, void> {
   
    public render() {
        return <div>
            <h1>Fees Claim Expenses Form</h1>
            <main>
                <span>Home Form Step {this.props.step}</span>

                {
                    this.showStep()
                }
            </main>
        </div>;
    }

    showStep() {
        switch (this.props.step) {
            case 1:
                return <AddressForm address= {this.props.fees.address} {...this.props} />;
            case 2:
                return <UserForm person= {this.props.fees.person}  {...this.props}/>;
            case 3:
                return <ConfirmationForm  {...this.props}/>;
           
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