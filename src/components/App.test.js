import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";

Enzyme.configure({adapter: new Adapter()});

describe('App ', () => {
    const wrapper = shallow(<App/>);

    it('renders the "Flashcard Pro" title', () => {
        expect(wrapper.find('h2').text()).toEqual('Flashcard Pro');
    });

    it('renders the stack list', () => {
        expect(wrapper.find('Connect(StackList)').exists()).toBe(true);
    })

    it('renders link to create new stack', () => {
        expect(wrapper.find('Link h4').text()).toEqual('Create New Stack');
    })

})

