import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {multiSelectDriverFactory} from './MultiSelect.driver';
import {MultiSelect} from './';
import {multiSelectTestkitFactory} from '../../testkit';
import {multiSelectTestkitFactory as enzymeMultiSelectTestkitFactory} from '../../testkit/enzyme';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';

describe('MultiSelect', () => {
  const createDriver = createDriverFactory(multiSelectDriverFactory);

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<MultiSelect options={[]}/>, multiSelectTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<MultiSelect options={[]}/>, enzymeMultiSelectTestkitFactory, mount)).toBe(true);
    });
  });
});
