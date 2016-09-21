import { typeName, isActionType, Action, Reducer } from 'redux-typed';
import { ActionCreator } from  './index';
import * as Immutable from 'immutable';
import {recordify, TypedRecord} from 'typed-immutable-record';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

interface IFeesRecord extends TypedRecord<IFeesRecord>, IFees { }

export  interface FeesState {
    step: number;
    fees: Fees;
}

export interface AddressState {
    address: Address;
}

export interface PersonState {
    person: Person;

}

export interface IFees {
    address: Address;
    person: Person;
}
export class Fees implements IFees {
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


export class Person  {
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

@typeName("PREVIOUS_STEP")
class PreviousStep extends  Action {
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
    }
};




// ---------------- 
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
export const reducer: Reducer<FeesState> = (state, action) => {
  

    if (isActionType(action, NextStep)) {
       let rec= getFeesRecord(state);
       return { step: state.step + 1, fees: rec };
      // return { step: state.step+1, fees: state.fees };
    }

    if (isActionType(action, PreviousStep)) {
        let rec = getFeesRecord(state);
        return { step: state.step - 1, fees: rec };
       // return { step: state.step - 1, fees: state.fees };;
    }

    function getFeesRecord(feesState: FeesState) {
    const rec= recordify<IFees, IFeesRecord>({
        person: feesState.fees.person,
        address: feesState.fees.address
    });
    return rec;
}

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { step: 1, fees: new Fees(new Address(), new Person()) };
};


