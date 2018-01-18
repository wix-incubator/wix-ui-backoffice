import {ToggleSwitch as CoreToggleSwitch} from 'wix-ui-core/StylableToggleSwitch';
import style from './ToggleSwitch.st.css';
import {appendStylable} from 'wix-ui-core';

export class ToggleSwitch extends CoreToggleSwitch {
  static defaultProps = {
    ...CoreToggleSwitch.defaultProps,
    skin: 'standard',
    size: 'large'
  };

  render() {
    const root = super.render();
    return appendStylable(this, root, style, ({size, skin}) => ({[size]: true, [skin]: true}));
  }
}
