import {mount} from 'enzyme';
import CounterBadge from './';
import React from 'react';
import {DomTestkit} from 'wix-ui-jss/domTestkit';
import {SKIN} from './constants';
import {palette} from '../../palette';

describe('CounterBadge', () => {
  let wrapper;
  const dataHook = 'myDataHook';

  const render = (props = {}) => mount(
    <CounterBadge {...props}/>,
    {attachTo: document.createElement('div')}
  );

  afterEach(() => wrapper.detach());

  describe('children prop', () => {
    it('should render the children', () => {
      wrapper = render({children: 12});
      expect(wrapper.text()).toBe('12');
    });
  });

  describe('theme', () => {
    it('should have the correct theme that affects the actual styles in the dom', () => {
      wrapper = render({children: 12, dataHook});
      const comp = wrapper.findWhere(n => n.prop('dataHook') === dataHook && !!n.node.id);
      const domTestkit = new DomTestkit({componentId: comp.node.id});
      expect(domTestkit.getCssValue({className: 'badge', property: 'height'})).toBe('18px');
      expect(domTestkit.getCssValue({className: 'badge', property: 'padding'})).toBe('3px 6px');
      expect(domTestkit.getCssValue({className: 'badge', property: 'border-radius'})).toBe('12px');
    });

    describe('skin prop', () => {
      it('should have default style by default', () => {
        wrapper = render({children: 12, dataHook});
        const comp = wrapper.findWhere(n => n.prop('dataHook') === dataHook && !!n.node.id);
        const domTestkit = new DomTestkit({componentId: comp.node.id});
        expect(domTestkit.getCssValue({className: 'badge', property: 'background'})).toBe(palette.heading3Dark);
        expect(domTestkit.getCssValue({className: 'badge', property: 'border-color'})).toBe(palette.heading3Dark);
      });

      it('should have urgent style', () => {
        wrapper = render({children: 12, dataHook, skin: SKIN.urgent});
        const comp = wrapper.findWhere(n => n.prop('dataHook') === dataHook && !!n.node.id);
        const domTestkit = new DomTestkit({componentId: comp.node.id});
        expect(domTestkit.getCssValue({className: 'badge', property: 'background'})).toBe(palette.danger);
        expect(domTestkit.getCssValue({className: 'badge', property: 'border-color'})).toBe(palette.danger);
      });

      it('should have success style', () => {
        wrapper = render({children: 12, dataHook, skin: SKIN.success});
        const comp = wrapper.findWhere(n => n.prop('dataHook') === dataHook && !!n.node.id);
        const domTestkit = new DomTestkit({componentId: comp.node.id});
        expect(domTestkit.getCssValue({className: 'badge', property: 'background'})).toBe(palette.ctaHover);
        expect(domTestkit.getCssValue({className: 'badge', property: 'border-color'})).toBe(palette.ctaHover);
      });

      it('should have standard style', () => {
        wrapper = render({children: 12, dataHook, skin: SKIN.standard});
        const comp = wrapper.findWhere(n => n.prop('dataHook') === dataHook && !!n.node.id);
        const domTestkit = new DomTestkit({componentId: comp.node.id});
        expect(domTestkit.getCssValue({className: 'badge', property: 'background'})).toBe(palette.main);
        expect(domTestkit.getCssValue({className: 'badge', property: 'border-color'})).toBe(palette.main);
      });
    });

    describe('validations', () => {
      it('should throw when children length is more than 2', () => {
        expect(() => render({children: '123'})).toThrow('CounterBadge children max length must be less than 2');
      });
    });
  });
});
