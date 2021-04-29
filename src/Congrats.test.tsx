import { shallow, ShallowWrapper } from 'enzyme';
import { $findByAttr } from '../test/testUtils';
import Congrats from './Congrats';

const defaultProps = { success:  false };

/**
 * Factory function to create a ShallowWrapper for the Congrats Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props? : object) : ShallowWrapper => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Congrats {...setupProps} />);
}

it('renders without Error', () => {
    const wrapper : ShallowWrapper = setup({ success: true });
    const component = $findByAttr(wrapper, 'component-congrats');
    expect(component.exists()).toBe(true);
});

it(`renders no text when 'success' is false`, () => {
    const wrapper : ShallowWrapper = setup();
    const component = $findByAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

it(`renders text when 'success' is true`, () => {
    const wrapper : ShallowWrapper = setup({ success: true });
    const message = $findByAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});
