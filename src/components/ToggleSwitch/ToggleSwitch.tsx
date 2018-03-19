import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  ToggleSwitch as CoreToggleSwitch,
  ToggleSwitchProps as CoreToggleSwitchProps
} from 'wix-ui-core/StylableToggleSwitch';
import style from './ToggleSwitch.st.css';
import {Skin, Size, SKIN, SIZE} from './constants';
import {ToggleOff, ToggleOn, SmallToggleOff, SmallToggleOn} from 'wix-ui-icons-common/system';
import {withStylable} from 'wix-ui-core/withStylable';
import {omit} from 'lodash';

export interface ToggleSwitchProps {
  skin?: Skin;
  size?: Size;
}

const defaultProps = {
  skin: SKIN.standard,
  size: SIZE.large
};

const checkedIconMap = {
  [SIZE.small]: undefined,
  [SIZE.medium]: <SmallToggleOn/>,
  [SIZE.large]: <ToggleOn/>
};

const uncheckedIconMap = {
  [SIZE.small]: undefined,
  [SIZE.medium]: <SmallToggleOff/>,
  [SIZE.large]: <ToggleOff/>
};

const StyledToggleSwitch = withStylable<CoreToggleSwitchProps, ToggleSwitchProps>(
  CoreToggleSwitch,
  style,
  ({size, skin}) => ({size, skin}),
  defaultProps
);

const {checkedIcon, uncheckedIcon, styles, ...legalCoreProps} = CoreToggleSwitch.propTypes;

export class ToggleSwitch extends React.PureComponent<ToggleSwitchProps & CoreToggleSwitchProps> {
  static propTypes = {
    ...legalCoreProps,
    /** Size of the ToggleSwitch */
    size: PropTypes.oneOf(Object.keys(SIZE)),
    /** Skin of the ToggleSwitch */
    skin: PropTypes.oneOf(Object.keys(SKIN))
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
