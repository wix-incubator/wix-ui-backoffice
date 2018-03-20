import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  ToggleSwitch as CoreToggleSwitch,
  ToggleSwitchProps as CoreToggleSwitchProps
} from 'wix-ui-core/StylableToggleSwitch';
import style from './ToggleSwitch.st.css';
import {Skin, Size, SKINS, SIZES} from './constants';
import {ToggleOff, ToggleOn, SmallToggleOff, SmallToggleOn} from 'wix-ui-icons-common/system';
import {withStylable} from 'wix-ui-core/withStylable';
import {omit} from 'lodash';

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
  [SIZES.medium]: <SmallToggleOn/>,
  [SIZES.large]: <ToggleOn/>
};

const uncheckedIconMap = {
  [SIZES.small]: undefined,
  [SIZES.medium]: <SmallToggleOff/>,
  [SIZES.large]: <ToggleOff/>
};

const StyledToggleSwitch = withStylable<CoreToggleSwitchProps, ToggleSwitchProps>(
  CoreToggleSwitch,
  style,
  ({size, skin}) => ({size, skin}),
  defaultProps
);

const {checkedIcon, uncheckedIcon, styles, ...legalCorePropTypes} = CoreToggleSwitch.propTypes;

export class ToggleSwitch extends React.PureComponent<ToggleSwitchProps & CoreToggleSwitchProps> {
  static propTypes = {
    ...legalCorePropTypes,
    /** Size of the ToggleSwitch */
    size: PropTypes.oneOf(Object.keys(SIZES)),
    /** Skin of the ToggleSwitch */
    skin: PropTypes.oneOf(Object.keys(SKINS))
  };

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
