import {mount} from 'enzyme';
import CounterBadge from './';
import React from 'react';

describe('CounterBadge', () => {
  let wrapper;

  const render = (props = {}) => mount(
    <CounterBadge {...props}/>,
    {attachTo: document.createElement('div')}
  );

  describe('validations', () => {
    it('should throw when children length is more than 2', () => {
      expect(() => render({children: 123})).toThrow('CounterBadge children max length must be less than 2');
    });
  });

  describe('children prop', () => {
    afterEach(() => wrapper.detach());

    it('should render the children', () => {
      wrapper = render({children: 12});
      expect(wrapper.text()).toBe('12');
    });
  });
});
