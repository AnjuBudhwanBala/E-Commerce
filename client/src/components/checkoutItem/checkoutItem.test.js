import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutItem } from './checkoutItem';

describe('CheckoutItem component', () => {
  let wrapper;
  let mockClearItem;
  let mockAddItem;
  let mockRemoveItem;

  beforeEach(() => {
    mockAddItem = jest.fn();
    mockClearItem = jest.fn();
    mockRemoveItem = jest.fn();

    const mockProps = {
      cartItem: {
        name: 'hats',
        imageUrl: 'www.testImage.com',
        price: 10,
        quantity: 2
      },
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem
    };
    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it('should render Checkout component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call clearItem  when remove button is called', () => {
    wrapper.find('RemoveButtonContainer').simulate('click');
    expect(mockClearItem).toHaveBeenCalled();
  });

  it('should call removeItem when left arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .childAt(0)
      .simulate('click');
    expect(mockRemoveItem).toHaveBeenCalled();
  });

  it('should call addItem when right arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .childAt(2)
      .simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });
});
