import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders <App /> without crashing', () => {
  const wrapper =  shallow(<App />);  
  expect(wrapper.exists()).toBe(true);
});
