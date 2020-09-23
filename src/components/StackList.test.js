import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {StackList} from './StackList';
import {stacks} from "../data/fixtures";

Enzyme.configure({adapter: new Adapter});

const props = {stacks};

describe('StackList', () => {
    const wrapper = shallow(<StackList {...props} />);

    it('render the correct number of links', () => {
        expect(wrapper.find('Link').length).toEqual(props.stacks.length)
    })
});