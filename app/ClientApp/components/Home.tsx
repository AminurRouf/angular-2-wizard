import * as React from 'react';
import {  AddressForm} from "./AddressForm";
import { UserForm} from "./UserForm";
import { ConfirmationForm} from "./ConfirmationForm";
import {WizardFormFirstPage} from './WizardFormFirstPage';

import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';
import * as FeesClaimExpensesStore from '../store/FeesClaimExpenses';


export class Home extends React.Component<FeesProp, any> {


    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = { page: 1}
    }
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

    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    showStep() {
        switch (this.props.step) {
            case 1:
                return <WizardFormFirstPage  onSubmit={this.nextPage}/>;
              //  return <AddressForm address= {this.props.fees.address} {...this.props}  />;
            case 2:
                return <UserForm person= {this.props.fees.person}  {...this.props}/>;
            case 3:
                return <ConfirmationForm  {...this.props}/>;
            case 4:
             
           
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