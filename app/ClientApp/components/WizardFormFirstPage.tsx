import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Link } from 'react-router';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';
import * as FeesClaimExpensesStore from '../store/fees-claim-expenses';

import { Field, reduxForm } from 'redux-form';
import validate from '../utils/validate'

import * as ActionCreator from '../store/actions';


const renderField = ({ input, label, type, meta: { touched, error } }) => {
    //debugger;
    return <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}  />
            {touched && error && <span>{error}</span>}
        </div>
    </div>;
};

const renderError = ({ meta: { touched, error } }) => touched && error ? <span>{error}</span> : false;





export class WizardFormFirstPage extends React.Component<AddressProp, void> {
    public render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return <form onSubmit={ handleSubmit(this.next) }>
            <p>Address form</p>
            <Field name="street" type="text" component={renderField}  label="street"   />
            <div>
                <button type="submit" disabled={submitting}>Save and Next</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>;
    }
    next = (data) => {
        this.props.updateAddress(data);
        this.props.next();
    }

}

const provider = provide(
    (state: ApplicationState) => state.address, // Select which part of global state maps to this component
    ActionCreator.actionCreators     // Select which action creators should be exposed to this component
);

type AddressProp = typeof provider.allProps;

export default reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    validate
})(WizardFormFirstPage);



