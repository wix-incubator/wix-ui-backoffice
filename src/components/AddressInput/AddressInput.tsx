import * as React from 'react';
import {AddressInput as CoreAddressInput, AddressInputProps as CoreAddressInputProps} from 'wix-ui-core/AddressInput';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './AddressInput.st.css';

export interface AddressInputProps {
  size?: 'large' | 'medium' | 'small';
}

const defaultProps = {
  size: 'medium'
};

export const AddressInput = withStylable<CoreAddressInputProps, AddressInputProps>(
  CoreAddressInput as React.ComponentClass<CoreAddressInputProps>,
  style,
  ({size}) => ({size}),
  defaultProps);
