import * as React from 'react';
import {Input as CoreInput, InputProps as CoreInputProps} from 'wix-ui-core/Input';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './Input.st.css';
import Exclamation from 'wix-ui-icons-common/Exclamation';
import {Tooltip} from '../Tooltip';

export interface InputProps {
  // The size of the input
  size?: 'large' | 'medium' | 'small';
  /** The error message */
  errorMessage?: string;
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

const renderSuffix = ({error, errorMessage, suffix}) => {
  if (!error) {
    return suffix;
  }

  const errorIcon = <div className={style.errorIcon}><Exclamation /></div>;
  if (!errorMessage) {
    return errorIcon;
  }

  return (
    <Tooltip content={errorMessage}>
      {errorIcon}
    </Tooltip>
  );
};

export const Input: React.SFC<CoreInputProps & InputProps> =
  (props: CoreInputProps & InputProps) => {
    const {error, errorMessage, suffix} = props;

    return (
      <StyledInput
        suffix={renderSuffix({error, errorMessage, suffix})}
        {...props}
      />
    );
  };
