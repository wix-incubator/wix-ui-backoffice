import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {AddressInput} from '../../src/components/AddressInput';
import {GoogleMapsClientStub} from 'wix-ui-core/dist/src/components/AddressInput/GoogleMapsClientStub';
import {ADDRESS_1, ADDRESS_2, GEOCODE_1} from 'wix-ui-core/dist/src/components/AddressInput/AddressInputTestHelper';

GoogleMapsClientStub.setAddresses([ADDRESS_1, ADDRESS_2]);
GoogleMapsClientStub.setGeocode(GEOCODE_1);

export const story = () => storiesOf('Components', module)
  .add('AddressInput', () => (
      <AddressInput
        data-hook="storybook-address-input"
        onSelect={() => null}
        Client={GoogleMapsClientStub}
        apiKey=""
        lang="en"
      />
  ));
