import { typeName, isActionType, Action, Reducer } from 'redux-typed';
import { ActionCreator } from './index';


// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export  interface FeesState {
    step: number;
    fees:Fees;
    
}

export class Fees {
    constructor(address?: Address, person?: Person) {

        this.address = address;
        this.person = person;
    }

    address: Address;
    person: Person;
}

export class Address {
    houseNumber:number;
    street: string;
}

export class Person {
    name: string;
    age: number;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

@typeName("NEXT_STEP")
class NextStep extends Action {

}


// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    next: (): ActionCreator => (dispatch, getState) => {
        console.log(getState().feesClaimExpenses.step);
       
        dispatch(new NextStep);
    }
};

// ---------------- 
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
export const reducer: Reducer<FeesState> = (state, action) => {


    if (isActionType(action, NextStep)) {
        debugger;

            let fees = state.fees;
        let newstate = { step: state.step + 1, fees: new Fees(new Address(), new Person()) };
        return newstate;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { step: 1, fees: new Fees(new Address(), new Person()) };
};
