import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {addressInputDriverFactory} from './AddressInput.driver';
import {AddressInput} from '.';
import {addressInputTestkitFactory} from '../../testkit';
import {addressInputTestkitFactory as enzymeAddressInputTestkitFactory} from '../../testkit/enzyme';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {GoogleMapsClientStub} from 'wix-ui-core/dist/src/components/AddressInput/GoogleMapsClientStub';

describe('AddressInput', () => {
  const createDriver = createDriverFactory(addressInputDriverFactory);

  it('should render autocomplete', () => {
    const driver = createDriver(<AddressInput Client={GoogleMapsClientStub} apiKey="" onSelect={() => null} lang="" />);
    expect(driver.isTargetElementExists()).toBeTruthy();
    expect(driver.isContentElementExists()).toBeFalsy();
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<AddressInput Client={GoogleMapsClientStub} apiKey="" onSelect={() => null} lang="" />, addressInputTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<AddressInput Client={GoogleMapsClientStub} apiKey="" onSelect={() => null} lang="" />, enzymeAddressInputTestkitFactory, mount)).toBe(true);
    });
  });
});
