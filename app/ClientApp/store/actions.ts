import { typeName, isActionType, Action, Reducer } from 'redux-typed';
import { FeesState, IFees, Fees, Address, Person } from "./fees-claim-expenses";
import ActionCreator = Redux.ActionCreator;
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.


@typeName("NEXT_STEP")
export class NextStep extends Action {

}

@typeName("PREVIOUS_STEP")
 export class PreviousStep extends Action {
}

@typeName("UPDATE_ADDRESS")
export class UpdateAddress extends Action {
    constructor(data:Address) {

        super();
        this.address = data;
    }
    address: any;
}
@typeName("UPDATE_PERSON")
export class UpdatePerson extends Action {
    constructor(data: Address) {

        super();
        this.person = data;
    }
    person: any;
}




// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    next: (): ActionCreator => (dispatch, getState) => {
        dispatch(new NextStep);
    },
    back: (): ActionCreator => (dispatch, getState) => {
        dispatch(new PreviousStep);
    },
    updateAddress: (data): ActionCreator => (dispatch, getState) => {
        dispatch(new UpdateAddress(data));
    },
    updatePerson: (data): ActionCreator => (dispatch, getState) => {
        dispatch(new UpdatePerson(data));
    }

};



