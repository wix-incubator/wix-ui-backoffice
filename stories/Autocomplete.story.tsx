import {Autocomplete} from '../src/components/Autocomplete';
import {generateOptions} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionsExample';
import * as AutocompleteSource from '!raw-loader!../src/components/Autocomplete/Autocomplete.tsx';

const options = generateOptions((args = {}) => Autocomplete.createDivider(args.value));

export default {
  category: 'Components',
  storyName: 'Autocomplete',
  component: Autocomplete,
  source: AutocompleteSource,
  componentPath: '../src/components/Autocomplete/Autocomplete.tsx',
  componentProps: {
    'data-hook': 'storybook-autocomplete',
    options
  },
  exampleProps: {
    size: ['small', 'medium', 'large'],
    onBlur: () => 'Triggered onBlur',
    onFocus: () => 'Triggered onFocus',
    onChange: () => 'Triggered onChange',
    onSelect: () => 'Triggered onSelect',
    onManualInput: () => 'Triggered onManualInput'
  }
};
