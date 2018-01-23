import {InputWithOptions as CoreInputWithOptions, InputWithOptionsProps as CoreInputWithOptionsProps} from 'wix-ui-core/InputWithOptions';
import style from './InputWithOptions.st.css';
import {withStylable} from 'wix-ui-core';

export interface InputWithOptionsProps {
  skin?: 'standard' | 'error' | 'success';
  size?: 'large' | 'small' | 'x-small';
}

const defaultProps = {
  skin: 'standard',
  size: 'large'
};

export const InputWithOptions = withStylable<CoreInputWithOptionsProps, InputWithOptionsProps>(
  CoreInputWithOptions,
  style,
  ({skin, size}) => ({[size]: true, [skin]: true}),
  defaultProps
);
