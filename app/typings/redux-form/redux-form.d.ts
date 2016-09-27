declare module ReduxForm {
    var reducer: any;
    var reduxForm: any;
    var Field: any;
    var formValueSelector: any;
}

declare module "redux-form" {
    export = ReduxForm;
}