import * as React from 'react';
import {Input as CoreInput, InputProps as CoreInputProps} from 'wix-ui-core/Input';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './Input.st.css';
import {getInputSuffix} from './InputSuffixes';

export interface InputProps {
  // The size of the input
  size?: 'large' | 'medium' | 'small';
}

const defaultProps = {
  size: 'medium'
};

export const StyledInput = withStylable<CoreInputProps, InputProps>(
  CoreInput,
  style,
  ({size}) => ({size}),
  defaultProps
);

export const Input: React.SFC<CoreInputProps & InputProps> =
  (props: CoreInputProps & InputProps) => {
    const {error, disabled, suffix} = props;

    return (
      <StyledInput
        suffix={getInputSuffix({error, disabled, suffix})}
        {...props}
      />
    );
  };

Input.displayName = 'Input';
