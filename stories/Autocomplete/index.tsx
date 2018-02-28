import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Autocomplete} from '../../src/components/Autocomplete';
import * as AutocompleteSource from '!raw-loader!../../src/components/Autocomplete/Autocomplete.tsx';
import createStory from '../create-story';
import {OptionFactory, Option} from 'wix-ui-core/dist/src/baseComponents/DropdownOption';
import {Divider} from '../../src/components/Divider';

const options =
  Array.from(Array(20))
    .map((x, index) => Autocomplete.createOption(index, false, true, `value${index}`));

options[2] = Autocomplete.createOption(2, true, true, `Disabled item`);
options[5] = OptionFactory.createCustomDivider(<Divider />);
options[8].value = 'This is a very very very very very long option';
options[12] = OptionFactory.createCustomDivider(<Divider>Divider</Divider>);

export const story = () => createStory({
  category: 'Components',
  name: 'Autocomplete',
  storyName: 'Autocomplete',
  component: Autocomplete,
  source: AutocompleteSource,
  componentProps: {
    'data-hook': 'storybook-autocomplete',
    options
  },
  exampleProps: {
    fixedFooter: [null, <div>Fixed Footer</div>],
    fixedHeader: [null, <div>Fixed Header</div>],
    onSelect: (option: Option) => option.value,
    initialSelectedId: [null, 1],
    onManualInput: (value: string) => `Manual input: ${value}`
  }
});
