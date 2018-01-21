import {InputWithOptions as CoreInputWithOptions} from 'wix-ui-core/InputWithOptions';
import style from './InputWithOptions.st.css';
import {withStylable} from 'wix-ui-core';

export interface InputWithOptionsProps {
  skin?: 'standard' | 'error' | 'success';
  size?: 'large' | 'small' | 'x-small';
}

export class InputWithOptions extends CoreInputWithOptions<InputWithOptionsProps> {
  static defaultProps = {
    ...CoreInputWithOptions.defaultProps,
    skin: 'standard',
    size: 'large'
  };

  render() {
    const root = super.render();
    return withStylable(this, root, style, ({size, skin}) => ({[size]: true, [skin]: true}));
  }
}
