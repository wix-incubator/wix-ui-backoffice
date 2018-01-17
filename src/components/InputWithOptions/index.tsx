import {InputWithOptions as CoreInputWithOptions} from 'wix-ui-core/InputWithOptions';
import style from './InputWithOptions.st.css';
import {withStylable} from 'wix-ui-core';

export const InputWithOptions = withStylable(
  CoreInputWithOptions,
  style,
  ({size, skin}) => ({[size]: true, [skin]: true})
);

InputWithOptions.defaultProps = {skin: 'standard', size: 'large'};
