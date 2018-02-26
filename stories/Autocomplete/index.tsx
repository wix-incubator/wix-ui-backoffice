import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Autocomplete} from '../../src/components/Autocomplete';
import * as AutocompleteSource from '!raw-loader!../../src/components/Autocomplete/Autocomplete.tsx';
import createStory from '../create-story';
import {options} from '../../src/components/Autocomplete/Autocomplete.spec';

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
    fixedHeader: [null, <div>Fixed Header</div>]
  }
});
