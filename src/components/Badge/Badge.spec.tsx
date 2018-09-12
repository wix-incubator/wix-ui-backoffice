import * as React from 'react';
import {badgeDriverFactory} from './Badge.driver';
import {Badge} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {badgeTestkitFactory} from '../../testkit';
import {badgeTestkitFactory as enzymeBadgeTestkitFactory} from '../../testkit/enzyme';
import {SKIN, TYPE, SIZE, Skin, Type, Size} from './constants';
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

  describe('uppercase prop', () => {
    it('should be uppercase by default', () => {
      const wrapper = createDriver(<Badge>Hello</Badge>);
      expect(wrapper.isUppercase()).toBeTruthy();
    });

    it('should be freecase when value is false', () => {
      const wrapper = createDriver(<Badge uppercase={false}>Hello</Badge>);
      expect(wrapper.isUppercase()).toBeFalsy();
    });
  });

  describe('size prop', () => {
    it('should be medium by default', () => {
      const wrapper = createDriver(<Badge>Hello</Badge>);
      expect(wrapper.getSize()).toBe(SIZE.medium);
    });

    Object.keys(SIZE).forEach((size: Size) => {
      it(`should be ${size}`, () => {
        const wrapper = createDriver(<Badge size={size}>Hello</Badge>);
        expect(wrapper.getSize()).toBe(size);
      });
    });
  });

  describe('onClick prop', () => {
    it('cursor should be default when no onClick', () => {
      const wrapper = createDriver(<Badge>Hello</Badge>);
      expect(wrapper.hasClickCursor()).toBeFalsy();
    });

    it('cursor should be pointer when onClick set', () => {
      const wrapper = createDriver(<Badge onClick={e=>e}>Hello</Badge>);
      expect(wrapper.hasClickCursor()).toBeTruthy();
    });

    it('should call event handler on badge click', () => {
      const handler = jest.fn();
      const wrapper = createDriver(<Badge onClick={()=>handler()}>Hello</Badge>);
      wrapper.click();
      expect(handler).toHaveBeenCalled();
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
