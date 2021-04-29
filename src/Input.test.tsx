import { shallow, ShallowWrapper } from 'enzyme';
import { $findByAttr } from '../test/testUtils';
import Input from './Input';

const defaultProps : object = {};

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
