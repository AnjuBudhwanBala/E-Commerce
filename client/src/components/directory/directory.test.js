import React from 'react';
import { shallow } from 'enzyme';
import { Directory } from './directory';

it('should render Directory component', () => {
  expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});
