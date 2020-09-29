import rootReducer from './index';
import * as actions from '../actions/index';
import {stack, stacks} from "../data/fixtures";

describe('RootReducer', () => {
    it('should return the initial state', () => {
        expect(rootReducer({}, {})).toEqual({stack: {}, stacks: []});
    });
    it('should set the main stack', () => {
        expect(rootReducer({}, {type: actions.SET_STACK, stack})).toEqual({stack, stacks: []});
    });
    it('should load stacks', () => {
        expect(rootReducer({}, {type: actions.LOAD_STACKS, stacks})).toEqual({stack: {}, stacks});
    });
    it('should add stack', () => {
        expect(rootReducer({}, {type: actions.ADD_STACK, stack})).toEqual({stack: {}, stacks: [stack]});
    })
});