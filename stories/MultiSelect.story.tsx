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
    fixedFooter: [null, <div key="1">Fixed Footer</div>],
    fixedHeader: [null, <div key="2">Fixed Header</div>],
    onSelect: (option: Option) => option.value,
    initialSelectedId: [null, 1],
    onManualInput: (value: string) => `Manual input: ${value}`,
    onBlur: () => 'Triggered onBlur',
    onFocus: () => 'Triggered onFocus',
    onChange: evt => evt.target.value,
    size: ['small', 'medium', 'large']
  }
};
