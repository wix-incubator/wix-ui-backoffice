import * as React from 'react';
import {Autocomplete} from '../src/components/Autocomplete';
import {generateOptions} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionsExample';
import * as AutocompleteSource from '!raw-loader!../src/components/Autocomplete/Autocomplete.tsx';
import Markdown from 'wix-storybook-utils/Markdown';
import {Option, DividerArgs} from 'wix-ui-core/dist/src/baseComponents/DropdownOption';
const CodeExample = require('../src/components/Autocomplete/CodeExample.md');

export default {
  category: 'Components',
  storyName: 'Autocomplete',
  component: Autocomplete,
  source: AutocompleteSource,
  componentPath: '../src/components/Autocomplete/Autocomplete.tsx',
  codeBlockSource: CodeExample,
  componentProps: {
    'data-hook': 'storybook-autocomplete',
    options: generateOptions((args: Partial<DividerArgs> = {}) => Autocomplete.createDivider(args.value))
  },
  exampleProps: {
    fixedFooter: [null, <div>Fixed Footer</div>],
    fixedHeader: [null, <div>Fixed Header</div>],
    onSelect: (option: Option) => option.value,
    initialSelectedId: [null, 1],
    onManualInput: (value: string) => `Manual input: ${value}`,
    onBlur: () => 'Triggered onBlur',
    onFocus: () => 'Triggered onFocus',
    onChange: evt => evt.target.value,
    size: ['small', 'medium', 'large']
  }
};
