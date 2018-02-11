import * as React from 'react';
import {oneOf} from 'prop-types';
import {Input as CoreInput, InputProps as CoreInputProps} from 'wix-ui-core/Input';
import {ThemedComponent} from 'wix-ui-theme';
import {withStylable} from 'wix-ui-core';
import style from './Input.st.css';

export interface InputProps {
  skin?: 'standard' | 'error' | 'success';
  size?: 'large' | 'small' | 'x-small';
}

const defaultProps = {
  skin: 'standard',
  size: 'large'
};

export const Input = withStylable<CoreInputProps, InputProps>(
  CoreInput,
  style,
  ({skin, size}) => ({[size]: true, [skin]: true}),
  defaultProps
);
