import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Autocomplete} from '../../src/components/Autocomplete';

const options =
  Array.from(Array(20))
    .map((x, index) => Autocomplete.createOption(index, false, true, `value${index}`));

options[2] = Autocomplete.createOption(2, true, true, `Disabled item`);
options[5] = Autocomplete.createDivider();
options[8].value = 'This is a very very very very very long option';
options[12] = Autocomplete.createDivider('Divider');

export const story = () => storiesOf('Components', module)
  .add('Autocomplete', () => (
      <Autocomplete
        options={options}
        data-hook="storybook-autocomplete"/>
  ));
