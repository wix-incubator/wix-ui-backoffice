import {ToggleSwitch as CoreToggleSwitch} from 'wix-ui-core/StylableToggleSwitch';
import style from './ToggleSwitch.st.css';
import {withStylable} from 'wix-ui-core';

export interface ToggleSwitchProps {
  skin?: 'standard' | 'error' | 'success';
  size?: 'large' | 'small' | 'x-small';
}

export class ToggleSwitch extends CoreToggleSwitch<ToggleSwitchProps> {
  static defaultProps = {
    ...CoreToggleSwitch.defaultProps,
    skin: 'standard',
    size: 'large'
  };

  render() {
    const {size, skin} = this.props;
    const root = super.render();
    return withStylable(
      root,
      style,
      {[size]: true, [skin]: true}
    );
  }
}
