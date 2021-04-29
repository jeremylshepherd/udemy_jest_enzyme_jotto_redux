import { shallow, ShallowWrapper } from 'enzyme';
import { $findByAttr } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props? : object) : ShallowWrapper => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps} />);
}

it('renders GuessedWords component', () => {
    const wrapper : ShallowWrapper = setup();
    expect(wrapper.exists()).toBe(true);
});

describe("if there are NO words guessed", () => {
    
    let wrapper : ShallowWrapper;

    beforeEach(() => {
      wrapper = setup({ guessedWords: []});
    });
    
    it('renders without error', () => {
        const component = $findByAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    it('renders instructions to guess a word', () => {
        const instructions = $findByAttr(wrapper, 'guess-instructions');
        expect(instructions.exists()).toBe(true);
    });
});

describe("if there are words guessed", () => {

});


