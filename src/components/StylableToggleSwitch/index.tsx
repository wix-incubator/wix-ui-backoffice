import CoreToggleSwitch from 'wix-ui-core/dist/src/components/StylableToggleSwitch/ToggleSwitch';
import style from './ToggleSwitch.st.css';
import {withStylable} from 'wix-ui-core';

export const ToggleSwitch: any = withStylable(
  CoreToggleSwitch,
  style,
  ({size, skin}) => ({[size]: true, [skin]: true})
);

ToggleSwitch.defaultProps = {skin: 'standard', size: 'large'};
