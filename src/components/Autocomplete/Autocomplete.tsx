import * as React from 'react';
import {Autocomplete as CoreAutocomplete, AutocompleteProps as CoreAutocompleteProps} from 'wix-ui-core/Autocomplete';
import {withStylable} from 'wix-ui-core/withStylable';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import style from './Autocomplete.st.css';
import {getInputSuffix} from '../Input';

export interface AutocompleteProps {
  // The size of the autocomplete
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
    const {error, disabled} = props;
    const suffix = <ChevronDown className={style.arrowIcon} />;

    return (
      <StyledAutocomplete
        suffix={getInputSuffix({error, disabled, suffix})}
        {...props}
      />
    );
  }) as AutocompleteType;

Autocomplete.createOption = CoreAutocomplete.createOption;
Autocomplete.createDivider = CoreAutocomplete.createDivider;
Autocomplete.propTypes = CoreAutocomplete.propTypes;
