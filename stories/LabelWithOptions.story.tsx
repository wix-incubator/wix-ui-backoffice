import {LabelWithOptions} from '../src/components/LabelWithOptions';
import {generateOptions} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionsExample';
import {Option, DividerArgs} from 'wix-ui-core/DropdownOption';

const options = generateOptions((args: Partial<DividerArgs> = {}) => LabelWithOptions.createDivider(args.value));

export default {
  category: 'Components',
  storyName: 'LabelWithOptions',
  component: LabelWithOptions,
  componentPath: '../src/components/LabelWithOptions/LabelWithOptions.tsx',

  componentProps: {
    'data-hook': 'storybook-labelwithoptions',
    options,
    placeholder: 'With placeholder',
    fixedFooter: 'Fixed Footer',
    fixedHeader: 'Fixed Header'
  },

  exampleProps: {
    onSelect: (option: Option) => option.value,
    onDeselect: (option: Option) => option.value,
    size: ['small', 'medium', 'large'],

    options: [
      { value: options.slice(0, 1), label: '1 example option' },
      { value: options.slice(0, 5), label: '5 example options' },
      { value: options, label: '20 example options' }
    ]
  }
};
