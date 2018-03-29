import * as React from 'react';
import {textDriverFactory} from './Text.driver';
import {Text} from './';
import {Appearance, Skin, APPEARANCES, SKINS} from './constants';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {textTestkitFactory} from '../../testkit';
import {textTestkitFactory as enzymeTextTestkitFactory} from '../../testkit/enzyme';

describe('Text', () => {
  const createDriver = createDriverFactory(textDriverFactory);

  describe('appearance prop', () => {
    it('should be T1 by default', () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.getAppearance()).toBe('T1');
    });

    Object.keys(APPEARANCES).forEach((appearance: Appearance) => {
      it(`should be ${appearance.toLowerCase()}`, () => {
        const wrapper = createDriver(<Text appearance={appearance}>Hello</Text>);
        expect(wrapper.getAppearance()).toBe(appearance);
      });
    });
  });

  describe('skin prop', () => {
    it('should be standard by default', () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.getSkin()).toBe('standard');
    });

    Object.keys(SKINS).forEach((skin: Skin) => {
      it(`should be ${skin}`, () => {
        const wrapper = createDriver(<Text skin={skin}>Hello</Text>);
        expect(wrapper.getSkin()).toBe(skin);
      });
    });
  });

  describe('light prop', () => {
    it('should be dark by default', () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.isLight()).toBe(false);
    });

    it('should be light', () => {
      const wrapper = createDriver(<Text light>Hello</Text>);
      expect(wrapper.isLight()).toBe(true);
    });

    [SKINS.success, SKINS.error, SKINS.premium].forEach(skin => {
      it(`should be dark when skin is ${skin}`, () => {
        const wrapper = createDriver(<Text skin={skin} light>Hello</Text>);
        expect(wrapper.isLight()).toBe(false);
      });
    });
  });

  describe('bold prop', () => {
    it('should not be bold by default', () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.isBold()).toBe(false);
    });

    it('should be bold', () => {
      const wrapper = createDriver(<Text bold>Hello</Text>);
      expect(wrapper.isBold()).toBe(true);
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Text>Hello World</Text>, textTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Text>Hello World</Text>, enzymeTextTestkitFactory, mount)).toBe(true);
    });
  });
});
