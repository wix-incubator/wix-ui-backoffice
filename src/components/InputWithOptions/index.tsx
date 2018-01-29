import {InputWithOptions as CoreInputWithOptions, InputWithOptionsProps as CoreInputWithOptionsProps} from 'wix-ui-core/InputWithOptions';
import style from './InputWithOptions.st.css';
import {withStylable} from 'wix-ui-core';

export interface InputWithOptionsProps {
}

const defaultProps = {
};

export const InputWithOptions = withStylable<CoreInputWithOptionsProps, InputWithOptionsProps>(
  CoreInputWithOptions,
  style,
  ({skin, size}) => ({[size]: true, [skin]: true}),
  defaultProps
);
