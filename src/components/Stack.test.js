import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Stack} from "./Stack";
import {stack} from "../data/fixtures";

Enzyme.configure({adapter: new Adapter});

const props = { stack };

describe('Stack', () => {
    const wrapper = shallow(<Stack {...props} />);

    it('should render title', () => {
        expect(wrapper.find('h3').text()).toEqual(props.stack.title);
    });
    it('should render link home', () => {
        expect(wrapper.find('Link h4').text()).toEqual('Home');
    });
    it('should render the correct number of cards', () => {
        expect(wrapper.find('Card').length).toEqual(props.stack.cards.length);
    })
})