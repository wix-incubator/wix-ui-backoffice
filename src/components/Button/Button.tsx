import * as React from 'react';
import {Button as CoreButton, ButtonProps as CoreButtonProps} from 'wix-ui-core/Button';
import style from './Button.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

const defaultProps = {
};

export const Button = withStylable<CoreButtonProps, {}>(
  CoreButton,
  style,
  () => null,
  defaultProps
);
