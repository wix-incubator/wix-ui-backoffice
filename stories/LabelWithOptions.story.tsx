import * as React from 'react';
import {LabelWithOptions} from '../src/components/LabelWithOptions';
import {generateOptions} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionsExample';
import {Option, DividerArgs} from 'wix-ui-core/dist/src/baseComponents/DropdownOption';

export default {
  category: 'Components',
  storyName: 'LabelWithOptions',
  component: LabelWithOptions,
  componentPath: '../src/components/LabelWithOptions/LabelWithOptions.tsx',

  componentProps: {
    'data-hook': 'storybook-labelwithoptions',
    options: generateOptions((args: Partial<DividerArgs> = {}) => LabelWithOptions.createDivider(args.value)),
    placeholder: 'With placeholder',
    fixedFooter: 'Fixed Footer',
    fixedHeader: 'Fixed Header',
    initialSelectedIds: [1]
  },

  exampleProps: {
    onSelect: (option: Option) => option.value,
    onDeselect: (option: Option) => option.value,
    size: ['small', 'medium', 'large']
  }
};
