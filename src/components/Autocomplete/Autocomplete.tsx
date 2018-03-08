import * as React from 'react';
import {Autocomplete as CoreAutocomplete, AutocompleteProps as CoreAutocompleteProps} from 'wix-ui-core/Autocomplete';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './Autocomplete.st.css';
import {Option} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionFactory';

export type AutocompleteType = React.ComponentClass<CoreAutocompleteProps> & {
  createOption: (option?: Partial<Option>) => Option;
  createDivider: (value?: React.ReactNode) => Option;
};

export const Autocomplete: AutocompleteType = Object.assign(withStylable<CoreAutocompleteProps>(
  CoreAutocomplete,
  style
) as React.ComponentClass<CoreAutocompleteProps>, {
  createOption: CoreAutocomplete.createOption,
  createDivider: CoreAutocomplete.createDivider
});
