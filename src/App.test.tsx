import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { $findByAttr } from '../test/testUtils';
import App from './App';

/**
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () : ShallowWrapper => {
    return shallow(<App/>);
}

it('renders <App /> without crashing', () => {
  const wrapper =  setup();
  const appComponent = $findByAttr(wrapper, 'component-app');
  expect(appComponent.exists()).toBe(true);
});

