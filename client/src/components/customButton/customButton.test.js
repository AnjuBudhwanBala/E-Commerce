import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './customButton';

it('should render CustomButton component', () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot();
});
