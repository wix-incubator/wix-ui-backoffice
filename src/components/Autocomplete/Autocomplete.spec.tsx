import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {autocompleteDriverFactory} from './Autocomplete.driver';
import {Autocomplete} from '.';
import {autocompleteTestkitFactory} from '../../testkit';
import {autocompleteTestkitFactory as enzymeAutocompleteTestkitFactory} from '../../testkit/enzyme';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';

describe('Autocomplete', () => {
  const createDriver = createDriverFactory(autocompleteDriverFactory);

  it('should render autocomplete', () => {
    const driver = createDriver(<Autocomplete options={[]} />);
    expect(driver.isTargetElementExists()).toBeTruthy();
    expect(driver.isContentElementExists()).toBeFalsy();
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Autocomplete options={[]}/>, autocompleteTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Autocomplete options={[]}/>, enzymeAutocompleteTestkitFactory, mount)).toBe(true);
    });
  });
});
