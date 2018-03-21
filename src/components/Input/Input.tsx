import * as React from 'react';
import {Input as CoreInput, InputProps as CoreInputProps} from 'wix-ui-core/Input';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './Input.st.css';

export interface InputProps {
  size?: 'large' | 'medium' | 'small';
}

const defaultProps = {
  size: 'medium'
};

export const Input = withStylable<CoreInputProps, InputProps>(
  CoreInput,
  style,
  ({size}) => ({size}),
  defaultProps
);
