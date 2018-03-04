import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Autocomplete} from '../../src/components/Autocomplete';
import {generateOptions} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionsExample';

export const story = () => storiesOf('Components', module)
  .add('Autocomplete', () => (
      <Autocomplete
        options={generateOptions((args = {}) => Autocomplete.createDivider(args.value))}
        data-hook="storybook-autocomplete"/>
  ));
