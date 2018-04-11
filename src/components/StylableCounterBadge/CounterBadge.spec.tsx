import * as React from 'react';
import {counterBadgeDriverFactory} from './CounterBadge.driver';
import {CounterBadge} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {stylableCounterBadgeTestkitFactory as counterBadgeTestkitFactory} from '../../testkit';
import {stylableCounterBadgeTestkitFactory as enzymeCounterBadgeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';
import {SKIN, Skin} from './constants';
import Email from 'wix-ui-icons-common/Email';

describe('CounterBadge', () => {
  const createDriver = createDriverFactory(counterBadgeDriverFactory);

  describe('children prop', () => {
    it('should render the children', () => {
      const driver = createDriver(<CounterBadge>12</CounterBadge>);
      expect(driver.text()).toBe('12');
    });

    it ('should render a number type children', () => {
      const children = 12;
      const driver = createDriver(<CounterBadge>{children}</CounterBadge>);
      expect(driver.text()).toBe('12');
    });

    it('should render the children as icon', () => {
      const driver = createDriver(<CounterBadge><Email/></CounterBadge>);
      expect(driver.getIcon()).toBeTruthy();
    });

    it('should render a default empty child', () => {
      const driver = createDriver(<CounterBadge/>);
      expect(driver.text()).toBe('');
    });
  });

  describe('skin prop', () => {
    it('should be general by default', () => {
      const wrapper = createDriver(<CounterBadge>12</CounterBadge>);
      expect(wrapper.getSkin()).toBe(SKIN.general);
    });

    Object.keys(SKIN).forEach((skin: Skin) => {
      it(`should be ${skin}`, () => {
        const wrapper = createDriver(<CounterBadge skin={skin}>12</CounterBadge>);
        expect(wrapper.getSkin()).toBe(skin);
      });
    });
  });

  describe('width', () => {
    it('should be wide when content is string with length > 1', () => {
      const wrapper = createDriver(<CounterBadge>12</CounterBadge>);
      expect(wrapper.isWide()).toBe(true);
    });

    it('should not be wide when content is string with length <= 1', () => {
      const wrapper = createDriver(<CounterBadge>1</CounterBadge>);
      expect(wrapper.isWide()).toBe(false);
    });

    it('should not be wide when content is an icon', () => {
      const wrapper = createDriver(<CounterBadge><Email/></CounterBadge>);
      expect(wrapper.isWide()).toBe(false);
    });
  });

  describe('UIText', () => {
    it('should be rendered with T5 appearance', () => {
      const wrapper = createDriver(<CounterBadge>12</CounterBadge>);
      expect(wrapper.getUIText().getAppearance()).toBe('T5');
    });
  });

  describe('validations', () => {
    it.skip('should throw when children length is more than 2', () => {
      expect(
        () => mount(<CounterBadge>123</CounterBadge>)
      ).toThrow('CounterBadge children max length can not be more than 2');
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<CounterBadge>12</CounterBadge>, counterBadgeTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<CounterBadge>12</CounterBadge>, enzymeCounterBadgeTestkitFactory, mount)).toBe(true);
    });
  });
});
