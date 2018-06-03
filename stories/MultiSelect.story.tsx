import * as React from 'react';
import {MultiSelect, createDivider} from '../src/components/MultiSelect';
import {generateOptions} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionsExample';
import {Option, DividerArgs} from 'wix-ui-core/dist/src/baseComponents/DropdownOption';

export default {
  category: 'Components',
  storyName: 'MultiSelect',
  component: MultiSelect,
  componentPath: '../src/components/MultiSelect/MultiSelect.tsx',

  componentProps: {
    'data-hook': 'storybook-multiselect',
    options: generateOptions((args: Partial<DividerArgs> = {}) => createDivider(args.value))
  },

  exampleProps: {
    onSelect: (option: Option) => option.value,
    initialSelectedIds: ['', [1]],
    onChange: evt => evt.target.value,
    onDeselect: (option: Option) => option.value
  }
};
