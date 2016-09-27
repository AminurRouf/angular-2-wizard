import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Link } from 'react-router';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store/index';


import { Field, reduxForm } from 'redux-form';
import validate from '../utils/validate'
import * as ActionCreator from '../store/actions';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);



export class WizardFormSecondPage extends React.Component<PersonProp, void> {

    public render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return <form onSubmit={handleSubmit(this.next)}>
            <p>person form</p>
            <Field name="name" type="text" component={renderField} label="person name" />

            <div>
                <button type="submit" disabled={submitting}>Save and Next</button>
                <button type="button" onClick={this.back}>Back</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>;
    }


    next = (data) => {
        this.props.updatePerson(data);
        this.props.next();
    }

    back = (e) => {
        this.props.back();
    }

}

// Build the CounterProps type, which allows the component to be strongly typed
const provider = provide(
    (state: ApplicationState) => state.person, // Select which part of global state maps to this component
    ActionCreator.actionCreators      // Select which action creators should be exposed to this component
);
type PersonProp = typeof provider.allProps;

//


///export default provider.connect(WizardFormFirstPage);

const rf = reduxForm({
    form: 'wizard2', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    validate
})(WizardFormSecondPage);

export default rf;
