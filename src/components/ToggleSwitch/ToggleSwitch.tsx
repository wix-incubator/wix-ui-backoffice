import * as React from 'react';
import {ToggleSwitch as CoreToggleSwitch, ToggleSwitchProps as CoreToggleSwitchProps} from 'wix-ui-core/ToggleSwitch';
import {ThemedComponent} from 'wix-ui-theme';
import {oneOf} from 'prop-types';
import {ThemedComponentProps} from 'wix-ui-jss';
import {theme, Size, Skin} from './theme';
import {WixComponentProps} from 'wix-ui-core/dist/src/createHOC';

export interface ToggleSwitchProps extends CoreToggleSwitchProps {
  /** size of the toggle switch */
  size?: Size;

  /** Color for disabled toggle switch */
  skin?: Skin;
}

export class ToggleSwitch extends React.PureComponent<ToggleSwitchProps>  {
  static propTypes = {
    ...CoreToggleSwitch.propTypes,

    /** size of the toggle switch */
    size: oneOf(['x-small', 'small', 'large']),

    /** Color for disabled toggle switch */
    skin: oneOf(['standard', 'error', 'success'])
  };

  static defaultProps: Partial<ToggleSwitchProps> = {
    size: 'large',
    skin: 'standard'
  };

  render() {
    const {size, skin, ...coreProps} = this.props;

    return (
      <ThemedComponent {...{theme, size, skin}}>
        <CoreToggleSwitch {...coreProps}/>
      </ThemedComponent>
    );
  }
}
