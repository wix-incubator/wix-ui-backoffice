import * as React from 'react';
import {AddressInput as CoreAddressInput, AddressInputProps as CoreAddressInputProps} from 'wix-ui-core/AddressInput';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './AddressInput.st.css';

export const AddressInput = withStylable<CoreAddressInputProps>(
      CoreAddressInput as React.ComponentClass<CoreAddressInputProps>,
      style);
