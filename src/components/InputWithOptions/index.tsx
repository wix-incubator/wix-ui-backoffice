import {InputWithOptions as CoreInputWithOptions} from 'wix-ui-core/InputWithOptions';
import style from './InputWithOptions.st.css';
import {appendStylable} from 'wix-ui-core';

export class InputWithOptions extends CoreInputWithOptions {
  static defaultProps = {
    ...CoreInputWithOptions.defaultProps,
    skin: 'standard',
    size: 'large'
  };

  render() {
    const root = super.render();
    return appendStylable(this, root, style, ({size, skin}) => ({[size]: true, [skin]: true}));
  }
}
