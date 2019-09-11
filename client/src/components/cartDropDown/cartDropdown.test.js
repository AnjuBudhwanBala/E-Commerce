import React from 'react';
import { shallow } from 'enzyme';
import { CartDropdown } from './cartDropDown';

describe('CartDropDown component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };

    mockDispatch = jest.fn();

    const mockProps = {
      history: mockHistory,
      dispatch: mockDispatch,
      cartItems: mockCartItems
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it('should render CartDropdown component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
