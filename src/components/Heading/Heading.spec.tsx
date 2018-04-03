import * as React from 'react';
import {headingDriverFactory} from './Heading.driver';
import {Heading} from './';
import {Appearance} from './Heading';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {headingTestkitFactory} from '../../testkit';
import {headingTestkitFactory as enzymeHeadingTestkitFactory} from '../../testkit/enzyme';

describe('Heading', () => {
  const createDriver = createDriverFactory(headingDriverFactory);

  describe('appearance prop', () => {
    it('should render a h1 tag by default', () => {
      const wrapper = createDriver(<Heading>Hello</Heading>);
      expect(wrapper.getTagName()).toBe('h1');
      expect(wrapper.getAppearance()).toBe('H1');
    });

    ['H2', 'H3', 'H4'].forEach((appearance: Appearance) => {
      it(`should render a ${appearance.toLowerCase()} tag`, () => {
        const wrapper = createDriver(<Heading appearance={appearance}>Hello</Heading>);
        expect(wrapper.getTagName()).toBe(appearance.toLocaleLowerCase());
        expect(wrapper.getAppearance()).toBe(appearance);
      });
    });
  });

  describe('light prop', () => {
    it('should be dark by default', () => {
      const wrapper = createDriver(<Heading>Hello</Heading>);
      expect(wrapper.isLight()).toBe(false);
    });

    it('should be light', () => {
        const wrapper = createDriver(<Heading light>Hello</Heading>);
        expect(wrapper.isLight()).toBe(true);
      });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Heading>Hello World</Heading>, headingTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Heading>Hello World</Heading>, enzymeHeadingTestkitFactory, mount)).toBe(true);
    });
  });
});
