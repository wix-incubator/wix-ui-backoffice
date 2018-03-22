import * as React from 'react';
import {string} from 'prop-types';
import {Autocomplete as CoreAutocomplete, AutocompleteProps as CoreAutocompleteProps} from 'wix-ui-core/Autocomplete';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './Autocomplete.st.css';
import {Option} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionFactory';
import ArrowDown from 'wix-ui-icons-common/ArrowDown';

export interface AutocompleteProps {
  size?: 'large' | 'medium' | 'small';
}

export type AutocompleteType = React.SFC<CoreAutocompleteProps & AutocompleteProps> & {
  createOption: (option?: Partial<Option>) => Option;
  createDivider: (value?: React.ReactNode) => Option;
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
