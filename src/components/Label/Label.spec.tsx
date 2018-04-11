import * as React from 'react';
import {labelDriverFactory} from './Label.driver';
import {Label} from './';
import {Appearance} from './Label';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {labelTestkitFactory} from '../../testkit';
import {labelTestkitFactory as enzymeLabelTestkitFactory} from '../../testkit/enzyme';

describe('Label', () => {
  const createDriver = createDriverFactory(labelDriverFactory);

  describe('appearance prop', () => {
    it('should be T1.1 by default', () => {
      const wrapper = createDriver(<Label>Hello</Label>);
      expect(wrapper.getAppearance()).toBe('T1.1');
    });

    it('should be T3.1', () => {
      const wrapper = createDriver(<Label appearance={'T3.1'}>Hello</Label>);
      expect(wrapper.getAppearance()).toBe('T3.1');
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Label>Hello World</Label>, labelTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Label>Hello World</Label>, enzymeLabelTestkitFactory, mount)).toBe(true);
    });
  });
});
