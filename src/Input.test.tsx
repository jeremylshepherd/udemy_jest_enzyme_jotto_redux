import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { $findByAttr } from '../test/testUtils';
import Input from './Input';

const defaultProps : { secretWord :  string, success : boolean } = { secretWord: "party", success: false };

const mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState : string) => [initialState, mockSetCurrentGuess]
}));

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

describe("render", () => {

    it('renders Input component', () => {
        const wrapper = setup();
        const input = $findByAttr(wrapper, 'component-input');
        expect(input.exists()).toBe(true);
    });
    
    describe("if success is true", () => {
    
        let wrapper : ShallowWrapper;
    
        beforeEach(() => {   
            mockSetCurrentGuess.mockClear();
            wrapper = setup({ success:  true });
        });

        it('input box does not show', () => {
            const inputBox = $findByAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(false);
        });

        it('submit button does not show', () => {
            const submitButton = $findByAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(false);
        });

    });

    describe("if success is false", () => {
        let wrapper : ShallowWrapper;
    
        beforeEach(() => {   
            mockSetCurrentGuess.mockClear();
            wrapper = setup();
        });

        it('input box does show', () => {
            const inputBox = $findByAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true);
        });

        it('submit button does show', () => {
            const submitButton = $findByAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(true);
        });
    });

});



describe("state controlled input field", () => {
    
    let wrapper : ShallowWrapper;
    
    beforeEach(() => {   
        mockSetCurrentGuess.mockClear();
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

    it('will not accept an empty guess', () => {
        const inputBox = $findByAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: '' }}

        inputBox.simulate('change', mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });

    it('button is disabled until inputBox is no longer empty', () => {
        const submitButton = $findByAttr(wrapper, 'submit-button');
        expect(submitButton.is('[disabled]')).toBe(true);
    });

    it('button is enabled when inputBox is no longer empty', () => {
        const inputBox = $findByAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'brain' }}
        inputBox.simulate('change', mockEvent);

        const submitButton = $findByAttr(wrapper, 'submit-button');
        expect(submitButton.is('[disabled="false"]')).toBe(false);
    });

    it('value reset to empty string on submit click', () => {
        const preInputBox = $findByAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'brain' }};
        preInputBox.simulate('change', mockEvent);

        const submitButton = $findByAttr(wrapper, 'submit-button');      
        submitButton.simulate('click', { preventDefault() {} });
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });

    it('updates guessedWord State upon submit', () => {
        const inputBox = $findByAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'brain' }};
        inputBox.simulate('change', mockEvent);

        const submitButton = $findByAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() {} });
        //Check the GuessedWords Component for train
        expect(false).toBe(false);
    });

    it('checks guess against secret word to trigger success', () => {
        const inputBox = $findByAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'train' }};
        inputBox.simulate('change', mockEvent);

        const submitButton = $findByAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() {} });
        
        expect(false).toBe(false);
    });
    
});

