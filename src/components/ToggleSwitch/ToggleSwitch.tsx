import * as React from 'react';
import omit = require('lodash/omit');
import {
  ToggleSwitch as CoreToggleSwitch,
  ToggleSwitchProps as CoreToggleSwitchProps
} from 'wix-ui-core/ToggleSwitch';
import style from './ToggleSwitch.st.css';
import {Skin, Size, SKINS, SIZES} from './constants';
import {ToggleOff, ToggleOn, ToggleOffSmall, ToggleOnSmall} from 'wix-ui-icons-common/system';
import {withStylable} from 'wix-ui-core/withStylable';

export interface ToggleSwitchProps {
  skin?: Skin;
  size?: Size;
}

const defaultProps = {
  skin: SKINS.standard,
  size: SIZES.large
};

const checkedIconMap = {
  [SIZES.small]: undefined,
  [SIZES.medium]: <ToggleOnSmall/>,
  [SIZES.large]: <ToggleOn/>
};

const uncheckedIconMap = {
  [SIZES.small]: undefined,
  [SIZES.medium]: <ToggleOffSmall/>,
  [SIZES.large]: <ToggleOff/>
};

const StyledToggleSwitch = withStylable<CoreToggleSwitchProps, ToggleSwitchProps>(
  CoreToggleSwitch,
  style,
  ({size, skin}) => ({size, skin}),
  defaultProps
);

export class ToggleSwitch extends React.PureComponent<ToggleSwitchProps & CoreToggleSwitchProps> {
  static displayName = 'ToggleSwitch';

  static defaultProps = defaultProps;

  render() {
    const desiredProps = omit(this.props, 'styles');

    return (
      <StyledToggleSwitch
        {...desiredProps}
        checkedIcon={checkedIconMap[this.props.size]}
        uncheckedIcon={uncheckedIconMap[this.props.size]}
      />
    );
  }
}
