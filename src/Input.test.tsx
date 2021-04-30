import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { $findByAttr } from '../test/testUtils';
import Input from './Input';

const defaultProps : { secretWord :  string } = { secretWord: "party" };

/**
 * Factory function to create a ShallowWrapper for the Input Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props? : object) : ShallowWrapper => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Input {...setupProps} />);
}

it('renders Input component', () => {
    const wrapper : ShallowWrapper = setup();
    const input = $findByAttr(wrapper, 'component-input');
    expect(input.exists()).toBe(true);
});

describe("state controlled input field", () => {
    
    let mockSetCurrentGuess : jest.Mock;
    let wrapper : ShallowWrapper;
    
    beforeEach(() => {
        mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        wrapper = setup();
    });

    it('input box exists', () => {
        const inputBox = $findByAttr(wrapper, 'input-box');
        expect(inputBox.exists()).toBe(true);
    });

    it('state updates with value of input box upon change', () => {
        const inputBox = $findByAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'train' } };

        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
});
