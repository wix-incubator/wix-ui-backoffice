import * as React from 'react';
import {ToggleSwitch as CoreToggleSwitch, ToggleSwitchProps as CoreToggleSwitchProps} from 'wix-ui-core/ToggleSwitch';
import {ThemedComponent} from 'wix-ui-theme';
import {oneOf} from 'prop-types';
import {theme, Size, Skin} from './theme';

export {Size, Skin};
export interface Props extends CoreToggleSwitchProps {
  /** size of the toggle switch */
  size?: Size;

  /** Color for disabled toggle switch */
  skin?: Skin;
}

export class ToggleSwitch extends React.PureComponent<Props>  {
  static propTypes = {
    ...CoreToggleSwitch.propTypes,

    /** size of the toggle switch */
    size: oneOf(['x-small', 'small', 'large']),

    /** Color for disabled toggle switch */
    skin: oneOf(['standard', 'error', 'success'])
  };

  static defaultProps: Props = {
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
