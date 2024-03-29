import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPreview } from './collectionPreview';

describe('CollectionPreview component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const mockRouteName = 'hats';

  beforeEach(() => {
    mockMatch = {
      path: '/shop'
    };
    mockHistory = {
      push: jest.fn()
    };
    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: 'hats',
      items: []
    };
    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  it('should render CollectionPreview component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when clicked on title', () => {
    wrapper.find('TitleContainer').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith(
      `${mockMatch.path}/${mockRouteName}`
    );
  });
});
