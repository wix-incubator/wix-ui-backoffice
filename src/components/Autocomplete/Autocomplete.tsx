import * as React from 'react';
import {string} from 'prop-types';
import {Autocomplete as CoreAutocomplete, AutocompleteProps as CoreAutocompleteProps} from 'wix-ui-core/Autocomplete';
import style from './Autocomplete.st.css';
import ArrowDown from 'wix-ui-icons-common/ArrowDown';

export interface AutocompleteProps {
  size?: 'large' | 'medium' | 'small';
}

export type AutocompleteType = React.SFC<CoreAutocompleteProps & AutocompleteProps> & {
  createOption: typeof CoreAutocomplete.createOption;
  createDivider: typeof CoreAutocomplete.createDivider;
};

export const Autocomplete: AutocompleteType = ((props: CoreAutocompleteProps & AutocompleteProps) => {
  const {size, ...otherProps} = props;
  return (
    <CoreAutocomplete
      {...style('root', {size: props.size}, props)}
      {...otherProps}
      ArrowIcon={<ArrowDown className={style.arrowIcon} />}
    />
  );
}) as AutocompleteType;

Autocomplete.createOption = CoreAutocomplete.createOption;
Autocomplete.createDivider = CoreAutocomplete.createDivider;
Autocomplete.displayName = CoreAutocomplete.displayName;
Autocomplete.propTypes = Object.assign({size: string}, CoreAutocomplete.propTypes);
Autocomplete.defaultProps = {size: 'medium'};
