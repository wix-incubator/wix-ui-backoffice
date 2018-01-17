import {ToggleSwitch as CoreToggleSwitch} from 'wix-ui-core/StylableToggleSwitch';
import style from './ToggleSwitch.st.css';
import {withStylable} from 'wix-ui-core';

export const ToggleSwitch = withStylable(
  CoreToggleSwitch,
  style,
  ({size, skin}) => ({[size]: true, [skin]: true})
);

ToggleSwitch.defaultProps = {skin: 'standard', size: 'large'};
