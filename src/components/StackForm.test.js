import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {StackForm} from "./StackForm";

Enzyme.configure({adapter: new Adapter});

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';


describe('StackForm', () => {
    const wrapper = shallow(<StackForm/>);

    it('renders title correctly', () => {
        expect(wrapper.find('h4').at(1).text()).toEqual('Create a New Stack');
    });
    it('renders home link', () => {
        expect(wrapper.find('h4').at(0).text()).toEqual('Home');
    });
    it('renders the Form component', () => {
        expect(wrapper.find('Form').exists()).toBe(true);
    });
    it('renders a button to add a new card', () => {
        expect(wrapper.find('Button').at(0).props().children).toEqual('Add Card');
    });
    it('renders a button to submit the form', () => {
        expect(wrapper.find('Button').at(1).props().children).toEqual('Add Stack');
    });

    describe('update the title', () => {
        beforeEach(() => {
            wrapper.find('FormControl').simulate('change', {target: {value: changeTitle}})
        });
        it('title should update', () => {
            expect(wrapper.state().title).toEqual(changeTitle);
        });
    });

    describe('add new card', () => {
        beforeEach(() => {
            wrapper.find('Button').at(0).simulate('click');
        });
        afterEach(() => {
            wrapper.setState({cards: []});
        })

        it('should add new card to the state', () => {
            expect(wrapper.state().cards.length).toEqual(1);
        });
        it('should render the prompt section', () => {
            expect(wrapper.find('FormLabel').at(1).props().children).toEqual('Prompt:');
        });
        it('should render the answer section', () => {
            expect(wrapper.find('FormLabel').at(2).props().children).toEqual('Answer:');
        });

        describe('update the card prompt', () => {
            beforeEach(() => {
                wrapper.find('FormControl').at(1).simulate('change', {target: {value: changePrompt}});
            });

            it('should update prompt in state', () => {
                expect(wrapper.state().cards[0].prompt).toEqual(changePrompt);
            });
        });
        describe('update the card answer', () => {
            beforeEach(() => {
                wrapper.find('FormControl').at(2).simulate('change', {target: { value: changeAnswer }});
            });
            it('should update answer in state', () => {
                expect(wrapper.state().cards[0].answer).toEqual(changeAnswer);
            });
        })
    });
});