import {mount} from 'enzyme';
import {CounterBadge} from './';
import * as React from 'react';

describe('CounterBadge', () => {
  let wrapper;

  const render = (props = {}) => mount(
    <CounterBadge {...props}/>,
    {attachTo: document.createElement('div')}
  );

  describe('general', () => {
    afterEach(() => wrapper.detach());

    describe('children prop', () => {

      it('should render the children', () => {
        wrapper = render({children: 12});
        expect(wrapper.text()).toBe('12');
      });

      it('should render the children as a component', () => {
        wrapper = render({children: <div data-hook="comp">12</div>});
        expect(wrapper.find('[data-hook="comp"]').text()).toBe('12');
      });
    });
  });

  describe('validations', () => {
    it('should throw when children length is more than 2', () => {
      expect(() => render({children: 123})).toThrow('CounterBadge children max length must be less than 2');
    });
  });
});
