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
    placeholder: 'With placeholder'
  },

  exampleProps: {
    fixedFooter: [null, <div>Fixed Footer</div>],
    fixedHeader: [null, <div>Fixed Header</div>],
    onSelect: (option: Option) => option.value,
    onDeselect: (option: Option) => option.value,
    initialSelectedIds: [null, [1]],
    placeholder: ['With placeholder', null],
    size: ['small', 'medium', 'large']
  }
};
