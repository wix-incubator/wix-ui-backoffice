import * as React from 'react';
import {Autocomplete as CoreAutocomplete, AutocompleteProps as CoreAutocompleteProps} from 'wix-ui-core/Autocomplete';
import {withStylable} from 'wix-ui-core/withStylable';
import ArrowDown from 'wix-ui-icons-common/ArrowDown';
import style from './Autocomplete.st.css';

export interface AutocompleteProps {
  size?: 'large' | 'medium' | 'small';
}

const defaultProps = {
  size: 'medium'
};

const StyledAutocomplete = withStylable<CoreAutocompleteProps, AutocompleteProps>(
  CoreAutocomplete,
  style,
  ({size}) => ({size}),
  defaultProps);

export type AutocompleteType = React.SFC<CoreAutocompleteProps & AutocompleteProps> & {
  createOption: typeof CoreAutocomplete.createOption;
  createDivider: typeof CoreAutocomplete.createDivider;
};

export const Autocomplete: AutocompleteType =
  ((props: CoreAutocompleteProps & AutocompleteProps) => {
    return (
      <StyledAutocomplete
        suffix={<ArrowDown className={style.arrowIcon} />}
        {...props}
      />
    );
  }) as AutocompleteType;

Autocomplete.createOption = CoreAutocomplete.createOption;
Autocomplete.createDivider = CoreAutocomplete.createDivider;
