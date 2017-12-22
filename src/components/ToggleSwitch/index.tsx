import * as React from 'react';
import CoreToggleSwitch from 'wix-ui-core/ToggleSwitch';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';
import UIText from '../UIText';

interface Props { // TODO: extend CoreToggleSwitchProps,
  /** size of the toggle switch */
  size?: 'x-small' | 'small' | 'large';

  /** Color for disabled toggle switch */
  skin?: 'standard' | 'error' | 'success';
}

export default class ToggleSwitch extends React.PureComponent<Props>  {
  static defaultProps = {
    size: 'large',
    skin: 'standard'
  };

  render() {
    const {size, skin, children, ...coreProps} = this.props;

    return (
      <ThemedComponent {...{theme, size, skin}}>
        <CoreToggleSwitch {...coreProps}>
          <UIText appearance="T1.1" dataClass="toggle-switch-content">{children}</UIText>
        </CoreToggleSwitch>
      </ThemedComponent>
    );
  }
}
