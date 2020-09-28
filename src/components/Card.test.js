import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from "./Card";

Enzyme.configure({adapter: new Adapter});

const props = {card: {prompt: 'test prompt', answer: 'test answer'}};

describe('Card', () => {
    const wrapper = shallow(<Card {...props}/>);

    it('should set the `reveal` to false', () => {
        expect(wrapper.state().reveal).toBe(false);
    });
    it('should render the card prompt', () => {
        expect(wrapper.find('.card-prompt h4').at(0).text()).toEqual(props.card.prompt);
    });
    it('should render the card answer', () => {
        expect(wrapper.find('.card-answer h4').at(0).text()).toEqual(props.card.answer);
    });
    it('should apply `text-hidden` class to card answer', () => {
        expect(wrapper.find('.card-answer h4').hasClass('text-hidden')).toBe(true);
    });
    describe('when card clicked on', () => {
        beforeEach(() => {
            wrapper.simulate('click');
        });
        it('should set the `reveal` to true', () => {
            expect(wrapper.state().reveal).toBe(true);
        })
        it('should apply `text-revealed` class to card answer', () => {
            expect(wrapper.find('.card-answer h4').hasClass('text-revealed')).toBe(true);
        });
    });
});
