import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('App renders correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('.app').exists()).toBe(true);
});
