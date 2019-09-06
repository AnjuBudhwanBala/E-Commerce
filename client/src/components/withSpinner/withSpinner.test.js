import React from 'react';
import { shallow } from 'enzyme';
import WithSpinner from './withSpinner';
import Spinner from '../spinner/spinner';

describe('<WithSpinner> a HOC', () => {
  const TestComponent = () => <div className="test" />;
  const WrappedComponent = WithSpinner(TestComponent);

  describe('if loading is true', () => {
    it('should render Spinner component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      expect(wrapper.exists(Spinner)).toBe(true);
    });

    it('should not render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      expect(wrapper.exists(TestComponent)).toBe(false);
    });
  });

  describe('if loading is false', () => {
    it('should not render Spinner component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(Spinner)).toBe(false);
    });

    it('should  render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(TestComponent)).toBe(true);
    });
  });
});
