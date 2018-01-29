import {Checkbox as CoreCheckbox, CheckboxProps as CoreCheckboxProps} from 'wix-ui-core/Checkbox';
import style from './Checkbox.st.css';
import {withStylable} from 'wix-ui-core';

export interface CheckboxProps {
  skin?: 'standard' | 'error' | 'success';
  size?: 'large' | 'small' | 'x-small';
}

const defaultProps = {
  skin: 'standard',
  size: 'large'
};

export const Checkbox = withStylable<CoreCheckboxProps, CheckboxProps>(
  CoreCheckbox,
  style,
  ({skin, size}) => ({[size]: true, [skin]: true}),
  defaultProps
);
