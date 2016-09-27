import {recordify, TypedRecord, makeTypedFactory} from 'typed-immutable-record';
import { FeesState, IFees, Fees, Address, Person } from "./fees-claim-expenses";
import { NextStep, PreviousStep, UpdateAddress, UpdatePerson} from "./actions";
import {  isActionType, Action, Reducer } from 'redux-typed';


interface IFeesRecord extends TypedRecord<IFeesRecord>, IFees { }

// ---------------- 
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
export const reducer: Reducer<FeesState> = (state, action) => {

    if (isActionType(action, NextStep)) {

        return { step: state.step + 1, fees: state.fees };
    }

    if (isActionType(action, PreviousStep)) {
        return { step: state.step - 1, fees: state.fees };

    }

    if (isActionType(action, UpdateAddress)) {
        const newFees = recordify<Fees, IFeesRecord>({
            address: action.address,
            person: state.fees.person
        });

        return { step: state.step, fees: newFees };

    }
    if (isActionType(action, UpdatePerson)) {
        const newFees = recordify<Fees, IFeesRecord>({
            person: action.person,
            address: state.fees.address
        });

        return { step: state.step, fees: newFees };

    }


    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { step: 1, fees: new Fees(new Address(), new Person()) };
};



