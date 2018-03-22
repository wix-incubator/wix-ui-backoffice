import * as React from 'react';
import {Autocomplete as CoreAutocomplete, AutocompleteProps as CoreAutocompleteProps} from 'wix-ui-core/Autocomplete';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './Autocomplete.st.css';
import {Option} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionFactory';

export interface AutocompleteProps {
  size?: 'large' | 'medium' | 'small';
}

const defaultProps = {
  size: 'medium'
};

export type AutocompleteType = React.ComponentClass<CoreAutocompleteProps & AutocompleteProps> & {
  createOption: (option?: Partial<Option>) => Option;
  createDivider: (value?: React.ReactNode) => Option;
};

export const Autocomplete: AutocompleteType =
  Object.assign(
    withStylable<CoreAutocompleteProps, AutocompleteProps>(
      CoreAutocomplete as React.ComponentClass<CoreAutocompleteProps & AutocompleteProps>,
      style,
      ({size}) => ({size}),
      defaultProps),
    {
      createOption: CoreAutocomplete.createOption,
      createDivider: CoreAutocomplete.createDivider
    }) as AutocompleteType;
