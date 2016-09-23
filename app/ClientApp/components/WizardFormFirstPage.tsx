import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../utils/validate'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

export const WizardFormFirstPage = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="firstName" type="text" component={renderField} label="First Name"/>
            <Field name="lastName" type="text" component={renderField} label="Last Name"/>
            <div>
                <button type="submit" className="next">Next</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'wizard',              // <------ same form name
    destroyOnUnmount: false,     // <------ preserve form data
    validate
})(WizardFormFirstPage)

