import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {autocompleteDriverFactory} from './Autocomplete.driver';
import {Autocomplete} from '.';

describe('Autocomplete', () => {
  const createDriver = createDriverFactory(autocompleteDriverFactory);

  it('should render autocomplete', () => {
    const driver = createDriver(<Autocomplete options={[]} />);
    expect(driver.isTargetElementExists()).toBeTruthy();
    expect(driver.isContentElementExists()).toBeFalsy();
  });
});
