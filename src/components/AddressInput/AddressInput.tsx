import * as React from 'react';
import {AddressInput as CoreAddressInput, AddressInputProps as CoreAddressInputProps} from 'wix-ui-core/AddressInput';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './AddressInput.st.css';

export interface AddressInputProps {
  skin?: 'standard' | 'error' | 'success';
  size?: 'large' | 'medium' | 'small';
}

const defaultProps = {
  skin: 'standard',
  size: 'medium'
};

export const AddressInput = withStylable<CoreAddressInputProps, AddressInputProps>(
  CoreAddressInput as React.ComponentClass<CoreAddressInputProps>,
  style,
  ({skin, size}) => ({size, skin}),
  defaultProps);
