import * as React from 'react';
import {textDriverFactory} from './Text.driver';
import {Text} from './';
import {Appearance} from './Text';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {textTestkitFactory} from '../../testkit';
import {textTestkitFactory as enzymeTextTestkitFactory} from '../../testkit/enzyme';

describe('Heading', () => {
  const createDriver = createDriverFactory(textDriverFactory);

  describe('appearance prop', () => {
    it('should be T1 by default', () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.getAppearance()).toBe('T1');
    });

    ['T1.1', 'T3', 'T3.1'].forEach((appearance: Appearance) => {
      it(`should be ${appearance.toLowerCase()}`, () => {
        const wrapper = createDriver(<Text appearance={appearance}>Hello</Text>);
        expect(wrapper.getAppearance()).toBe(appearance);
      });
    });
  });

  describe('skin prop', () => {
    it('should be dark by default', () => {
      const wrapper = createDriver(<Text>Hello</Text>);
      expect(wrapper.getSkin()).toBe('dark');
    });

    it('should be light', () => {
      const wrapper = createDriver(<Text skin="light">Hello</Text>);
      expect(wrapper.getSkin()).toBe('light');
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
