import * as React from 'react';
import {Autocomplete as CoreAutocomplete, AutocompleteProps as CoreAutocompleteProps} from 'wix-ui-core/Autocomplete';
import {withStylable} from 'wix-ui-core/withStylable';
import ArrowDown from 'wix-ui-icons-common/ArrowDown';
import Exclamation from 'wix-ui-icons-common/Exclamation';
import style from './Autocomplete.st.css';
import {Tooltip} from '../Tooltip';

export interface AutocompleteProps {
  // The size of the autocomplete
  size?: 'large' | 'medium' | 'small';
  /** The error message */
  errorMessage?: string;
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
    const {error, errorMessage} = props;
    return (
      <StyledAutocomplete
        suffix={error ? null : <ArrowDown className={style.arrowIcon} />}
        {...props}
      />
    );
  }) as AutocompleteType;

Autocomplete.createOption = CoreAutocomplete.createOption;
Autocomplete.createDivider = CoreAutocomplete.createDivider;
