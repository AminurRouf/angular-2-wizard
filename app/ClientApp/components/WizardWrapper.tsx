import * as React from 'react';
import { ConfirmationForm} from "./ConfirmationForm";
import  WizardFormFirstPage  from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';

import * as ActionCreator from '../store/actions';

export class WizardWrapper extends React.Component<FeesProp, any> {

    public render() {
        return <div>
            <h1>Fees Claim Expenses Form</h1>
            <main>
                <span>Wizard  Wrapper  Step {this.props.step}</span>

                {
                    this.showStep()
                }
            </main>
        </div>;
    }



    showStep() {
        switch (this.props.step) {
            case 1:
                return <WizardFormFirstPage  address={this.props.fees.address}  onSubmit={this.props.next} {...this.props}/>;
           
            case 2:
                return <WizardFormSecondPage person={this.props.fees.person}  onSubmit={this.props.next}  {...this.props}/>;
            case 3:
                return <ConfirmationForm  {...this.props}/>;
            case 4:
             
           
            default:
                return null;
        }
    };


}


const provider = provide(
    (state: ApplicationState) => state.feesClaimExpenses,
    ActionCreator.actionCreators
);
type FeesProp = typeof provider.allProps;


export default provider.connect(WizardWrapper);