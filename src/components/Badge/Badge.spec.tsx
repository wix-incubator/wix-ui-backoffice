import * as React from 'react';
import {badgeDriverFactory} from './Badge.driver';
import {Badge} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {badgeTestkitFactory} from '../../testkit';
import {badgeTestkitFactory as enzymeBadgeTestkitFactory} from '../../testkit/enzyme';
import {SKIN, TYPE, Skin, Type} from './constants';
import Email from 'wix-ui-icons-common/Email';

describe('Badge', () => {
  const createDriver = createDriverFactory(badgeDriverFactory);

  describe('type prop', () => {
    it('should be solid by default', () => {
      const wrapper = createDriver(<Badge>Hello</Badge>);
      expect(wrapper.getType()).toBe(TYPE.solid);
    });

    Object.keys(TYPE).forEach((type: Type) => {
      it(`should be ${type}`, () => {
        const wrapper = createDriver(<Badge type={type}>Hello</Badge>);
        expect(wrapper.getType()).toBe(type);
      });
    });
  });

  describe('skin prop', () => {
    it('should be general by default', () => {
      const wrapper = createDriver(<Badge>Hello</Badge>);
      expect(wrapper.getSkin()).toBe(SKIN.general);
    });

    Object.keys(SKIN).forEach((skin: Skin) => {
      it(`should be ${skin}`, () => {
        const wrapper = createDriver(<Badge skin={skin}>Hello</Badge>);
        expect(wrapper.getSkin()).toBe(skin);
      });
    });
  });

  describe('UIText', () => {
    it('should be rendered with T5 appearance', () => {
      const wrapper = createDriver(<Badge>Hello</Badge>);
      expect(wrapper.getUIText().getAppearance()).toBe('T5');
    });
  });

  describe('children prop', () => {
    it('should render the text given as a children prop', () => {
      const wrapper = createDriver(<Badge>Hello</Badge>);
      expect(wrapper.text()).toBe('Hello');
    });

    it('should not have any icons by default', () => {
      const wrapper = createDriver(<Badge>Hello</Badge>);
      expect(wrapper.getPrefixIcon()).toBeFalsy();
      expect(wrapper.getSuffixIcon()).toBeFalsy();
    });

    it('should have prefix icon', () => {
      const wrapper = createDriver(<Badge prefixIcon={<Email/>}>Hello</Badge>);
      expect(wrapper.getPrefixIcon()).toBeTruthy();
    });

    it('should have suffix icon', () => {
      const wrapper = createDriver(<Badge suffixIcon={<Email/>}>Hello</Badge>);
      expect(wrapper.getSuffixIcon()).toBeTruthy();
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Badge>Hello</Badge>, badgeTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Badge>Hello</Badge>, enzymeBadgeTestkitFactory, mount)).toBe(true);
    });
  });
});
