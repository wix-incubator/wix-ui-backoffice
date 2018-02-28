import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {autocompleteDriverFactory} from './Autocomplete.driver';
import {Autocomplete} from '.';
import {Divider} from '../Divider';
import {OptionFactory} from 'wix-ui-core/dist/src/baseComponents/DropdownOption';

const options =
  Array.from(Array(20))
    .map((x, index) => Autocomplete.createOption(index, false, true, `value${index}`));

options[2] = Autocomplete.createOption(2, true, true, `Disabled item`);
options[5] = OptionFactory.createCustomDivider(<Divider />);
options[8].value = 'This is a very very very very very long option';
options[12] = OptionFactory.createCustomDivider(<Divider>Divider</Divider>);

describe('Autocomplete', () => {
  const createDriver = createDriverFactory(autocompleteDriverFactory);

  it('should render autocomplete', () => {
    const driver = createDriver(<Autocomplete options={options} />);
    expect(driver.isTargetElementExists()).toBeTruthy();
    expect(driver.isContentElementExists()).toBeFalsy();
  });

  it('should initialize autocomplete with value', () => {
    const driver = createDriver(<Autocomplete initialSelectedId={1} options={options} />);
    expect(driver.getValue()).toEqual('value1');
  });
});
