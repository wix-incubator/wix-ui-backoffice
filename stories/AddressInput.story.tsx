import * as React from 'react';
import {AddressInput} from '../src/components/AddressInput';
import {Option} from 'wix-ui-core/DropdownOption';
import {GoogleMapsClientStub} from 'wix-ui-core/dist/src/components/AddressInput/GoogleMapsClientStub';
import * as helper from 'wix-ui-core/dist/src/components/AddressInput/AddressInputTestHelper';

GoogleMapsClientStub.setAddresses([helper.ADDRESS_1, helper.ADDRESS_2]);
GoogleMapsClientStub.setGeocode(helper.GEOCODE_1);

export default {
  category: 'Components',
  storyName: 'AddressInput',
  component: AddressInput,
  componentPath: '../src/components/AddressInput/AddressInput.tsx',

  componentProps: {
    'data-hook': 'storybook-address-input',
    fixedFooter: 'Fixed Footer',
    fixedHeader: 'Fixed Header',
    Client: GoogleMapsClientStub
  },

  exampleProps: {
    onSelect: (option: Option) => option.value,
    onManualInput: (value: string) => `Manual input: ${value}`,
    onBlur: () => 'Triggered onBlur',
    onFocus: () => 'Triggered onFocus',
    onChange: evt => evt.target.value,
    size: ['small', 'medium', 'large']
  }
};
