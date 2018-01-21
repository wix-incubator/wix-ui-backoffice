import {ToggleSwitch as CoreToggleSwitch, ToggleSwitchProps as CoreToggleSwitchProps} from 'wix-ui-core/StylableToggleSwitch';
import style from './ToggleSwitch.st.css';
import {appendStylable} from 'wix-ui-core';

export interface ToggleSwitchProps extends CoreToggleSwitchProps {
  skin?: 'standard' | 'error' | 'success';
  size?: 'large' | 'small' | 'x-small';
}

const defaultProps = {
  skin: 'standard',
  size: 'large'
};

export const ToggleSwitch = appendStylable<ToggleSwitchProps>(
  CoreToggleSwitch,
  style,
  ({skin, size}) => ({[size]: true, [skin]: true}),
  defaultProps
);
