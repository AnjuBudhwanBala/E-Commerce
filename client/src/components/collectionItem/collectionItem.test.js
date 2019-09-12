import React from 'react';
import { shallow } from 'enzyme';
import { CollectionItem } from './collectionItem';

describe('CollectionItem Component', () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = 'www.testImage.com';
  const mockName = 'black hat';
  const mockPrice = 10;

  beforeEach(() => {
    mockAddItem = jest.fn();
    const mockProps = {
      item: {
        name: mockName,
        price: 10,
        imageUrl
      },
      addItem: mockAddItem
    };
    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addItem when AddButton clicked', () => {
    wrapper.find('AddButton').simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should render ImageUrl as a prop on BackgroundImage', () => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(imageUrl);
  });

  it('should render name prop in NameContainer', () => {
    expect(wrapper.find('NameContainer').text()).toBe(mockName);
  });
  it('should render price prop in PriceContainer', () => {
    const price = parseInt(wrapper.find('PriceContainer').text());
    expect(price).toBe(mockPrice);
  });
});
