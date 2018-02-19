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
      expect(wrapper.getTagName()).toBe('H1');
      expect(wrapper.isTagNameState('H1').toBe(true));
    });

    ['H2', 'H3', 'H4', 'H5'].forEach((appearance: Appearance) => {
      it(`should render a ${appearance.toLowerCase()} tag`, () => {
        const wrapper = createDriver(<Heading appearance={appearance}>Hello</Heading>);
        expect(wrapper.getTagName()).toBe(appearance);
        expect(wrapper.isTagNameState(appearance).toBe(true));
      });
    });
  });

  describe('skin prop', () => {
    it('should be dark by default', () => {
      const wrapper = createDriver(<Heading>Hello</Heading>);
      expect(wrapper.isDarktSkin()).toBe(true);
    });

    it('should be light', () => {
        const wrapper = createDriver(<Heading skin="light">Hello</Heading>);
        expect(wrapper.isLightSkin()).toBe(true);
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
