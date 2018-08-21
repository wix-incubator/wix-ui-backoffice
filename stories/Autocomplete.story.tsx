import * as React from 'react';
import {Autocomplete} from '../src/components/Autocomplete';
import {generateOptions} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionsExample';
import {Option, DividerArgs} from 'wix-ui-core/DropdownOption';

const options = generateOptions((args: Partial<DividerArgs> = {}) => Autocomplete.createDivider(args.value));

const exampleOptions = [
  { value: options, label: '20 example options' },
  { value: options.slice(0, 1), label: '1 example option' },
  { value: options.slice(0, 5), label: '5 example options' }
];

export default {
  category: 'Components',
  storyName: 'Autocomplete',
  component: Autocomplete,
  componentPath: '../src/components/Autocomplete/Autocomplete.tsx',

  componentProps: {
    'data-hook': 'storybook-autocomplete',
    options: exampleOptions[2].value,
    fixedFooter: 'Fixed Footer',
    fixedHeader: 'Fixed Header',
  },

  exampleProps: {
    onSelect: (option: Option) => option.value,
    onManualInput: (value: string) => `Manual input: ${value}`,
    onBlur: () => 'Triggered onBlur',
    onFocus: () => 'Triggered onFocus',
    onChange: evt => evt.target.value,
    size: ['small', 'medium', 'large'],

    options: exampleOptions,

    initialSelectedId: [
      { value: [1], label: '[1]' },
      { value: [1, 2, 3], label: '[1, 2, 3]' }
    ]
  }
};
