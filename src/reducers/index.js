import {combineReducers} from 'redux';
import {LOAD_STACKS, SET_STACK} from "../actions";

function stack(state = {}, action) {
    switch (action.type) {
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
}

function stacks(state = [], action) {
    switch (action.type) {
        case LOAD_STACKS:
            return action.stacks;
        default:
            return state;
    }
}

export default combineReducers({stack, stacks});