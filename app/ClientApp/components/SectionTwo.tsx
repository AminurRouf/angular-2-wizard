import * as React from 'react';
import * as ReactDom from 'react-dom';
import {IFeesClaimExpensesProps } from "../models/interfaces";
import {TaxDeclaration } from "../models/classes";

export class SectionTwo extends React.Component<IFeesClaimExpensesProps, {}> {
    private taxDeclaration: TaxDeclaration;
    constructor(props) {
        super(props);
        this.taxDeclaration = new TaxDeclaration;
    }

    public render() {
        return <div>
            <h1>Section Two</h1>
            
            <p>Tax Declaration</p>
            <input type="checkbox" ref="isFirstJob" defaultChecked={this.props.taxDeclaration.isFirstJob} />

         
            <li className="form-footer list-unstyled">
                <button className="btn -primary pull-left" onClick={() => { this.previous(); } }>Save &amp;Back</button>
                <button className="btn -primary pull-right" onClick={this.next}>Save &amp; Continue</button>
            </li>
        </div>;
    }

    previous = () => {
        this.taxDeclaration.isFirstJob = ReactDom.findDOMNode<HTMLInputElement>(this.refs["isFirstJob"]).checked;
        this.props.saveTaxDeclaration(this.taxDeclaration);
        this.props.previousStep();
    };

    next = () => {
        this.taxDeclaration.isFirstJob = ReactDom.findDOMNode<HTMLInputElement>(this.refs["isFirstJob"]).checked;
        this.props.saveTaxDeclaration(this.taxDeclaration);
        this.props.nextStep();
    };


}

