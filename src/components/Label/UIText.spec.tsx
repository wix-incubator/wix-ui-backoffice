import * as React from 'react';
import {uiLabelDriverFactory} from './UILabel.driver';
import {UILabel} from './';
import {Appearance} from './UILabel';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {uiLabelTestkitFactory} from '../../testkit';
import {uiLabelTestkitFactory as enzymeUILabelTestkitFactory} from '../../testkit/enzyme';

describe('UILabel', () => {
  const createDriver = createDriverFactory(uiLabelDriverFactory);

  const appearances = [
    'T1', 'T1.2', 'T1.3', 'T1.4', 'T1.5', 'T1.6', 'T1.7',
    'T2', 'T2.1', 'T2.2', 'T2.3', 'T2.4',
    'T3', 'T3.1', 'T3.2', 'T3.3', 'T3.4', 'T3.5', 'T3.6', 'T3.7',
    'T4', 'T4.1', 'T4.2', 'T4.3', 'T4.4', 'T4.5', 'T4.6', 'T4.7',
    'T5', 'T5.1'
  ];

  describe('tagName prop', () => {
    it('should render a span tag by default', () => {
      const wrapper = createDriver(<UILabel>Hello</UILabel>);
      expect(wrapper.getTagName()).toBe('SPAN');
    });

    it('should render a div tag', () => {
      const wrapper = createDriver(<UILabel tagName="div">Hello</UILabel>);
      expect(wrapper.getTagName()).toBe('DIV');
    });
  });

  describe('appearance prop', () => {
    it('should be T1.1 by default', () => {
      const wrapper = createDriver(<UILabel>Hello</UILabel>);
      expect(wrapper.getAppearance()).toBe('T1.1');
    });

    appearances.forEach((appearance: Appearance) => {
      it(`should be ${appearance}`, () => {
        const wrapper = createDriver(<UILabel appearance={appearance}>Hello</UILabel>);
        expect(wrapper.getAppearance()).toBe(appearance);
      });
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<UILabel>Hello World</UILabel>, uiLabelTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<UILabel>Hello World</UILabel>, enzymeUILabelTestkitFactory, mount)).toBe(true);
    });
  });
});
