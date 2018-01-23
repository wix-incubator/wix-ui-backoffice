import {ToggleSwitch as CoreToggleSwitch, ToggleSwitchProps as CoreToggleSwitchProps} from 'wix-ui-core/StylableToggleSwitch';
import style from './ToggleSwitch.st.css';
import {withStylable} from 'wix-ui-core';

export interface ToggleSwitchProps {
  skin?: 'standard' | 'error' | 'success';
  size?: 'large' | 'small' | 'x-small';
}

const defaultProps = {
  skin: 'standard',
  size: 'large'
};

export const ToggleSwitch = withStylable<CoreToggleSwitchProps, ToggleSwitchProps>(
  CoreToggleSwitch,
  style,
  ({skin, size}) => ({[size]: true, [skin]: true}),
  defaultProps
);
