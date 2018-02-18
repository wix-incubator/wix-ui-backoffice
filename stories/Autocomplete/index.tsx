import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Autocomplete} from '../../src/components/Autocomplete';
import * as AutocompleteSource from '!raw-loader!../../src/components/Autocomplete/Autocomplete.tsx';
import {Divider} from '../../src/components/Divider';
import {OptionFactory} from 'wix-ui-core/dist/src/baseComponents/DropdownOption';
import createStory from '../create-story';

const dropdownOptions =
  Array.from(Array(20))
    .map((x, index) => Autocomplete.createOption(index, false, true, `value${index}`));

dropdownOptions[2] = Autocomplete.createOption(2, true, true, `Disabled item`);
dropdownOptions[5] = OptionFactory.createCustomDivider(<Divider />);
dropdownOptions[8].value = 'This is a very very very very very long option';
dropdownOptions[12] = OptionFactory.createCustomDivider(<Divider>Divider</Divider>);

export const story = () => createStory({
  category: 'Components',
  name: 'Autocomplete',
  storyName: 'Autocomplete',
  component: Autocomplete,
  source: AutocompleteSource,
  componentProps: {
    'data-hook': 'storybook-autocomplete',
    options: dropdownOptions
  },
  exampleProps: {
    fixedFooter: [null, <div>Fixed Footer</div>],
    fixedHeader: [null, <div>Fixed Header</div>]
  }
});
