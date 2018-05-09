import * as React from 'react';
import {textDriverFactory, TextDriver} from './Text.driver';
import {Text} from './';
import {Size, Skin} from './constants';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {textTestkitFactory} from '../../testkit';
import {textTestkitFactory as enzymeTextTestkitFactory} from '../../testkit/enzyme';
import { runTestkitExistsSuite } from '../../common/testkitTests';
import { enumValues } from '../../utils';

describe('Text', () => {
  const createDriver = createDriverFactory(textDriverFactory);

  describe('size prop', () => {
    it('should be medium by default', () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.getSize()).toBe('medium');
    });

    enumValues(Size).forEach((size: Size) => {
      it(`should be ${size}`, () => {
        const wrapper = createDriver(<Text size={size}>Hello</Text>);
        expect(wrapper.getSize()).toBe(size);
      });
    });
  });

  describe('secondary prop', () => {
    it('should be false by default', () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.isSecondary()).toBe(false);
    });

    it(`should be true`, () => {
      const wrapper = createDriver(<Text secondary>Hello</Text>);
      expect(wrapper.isSecondary()).toBe(true);
    });
  });

  describe('skin prop', () => {
    it('should be standard by default', () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.getSkin()).toBe('standard');
    });

    enumValues(Skin).forEach((skin: Skin) => {
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

    [Skin.success, Skin.error, Skin.premium].forEach(skin => {
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

  runTestkitExistsSuite<TextDriver>({Element:<Text/>,testkitFactory:textTestkitFactory,enzymeTestkitFactory:enzymeTextTestkitFactory});

});
