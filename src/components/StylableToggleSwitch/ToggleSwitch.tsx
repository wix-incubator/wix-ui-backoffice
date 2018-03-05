import React = require('react');
import PropTypes = require('prop-types');
import {
  ToggleSwitch as CoreToggleSwitch,
  ToggleSwitchProps as CoreToggleSwitchProps
} from 'wix-ui-core/StylableToggleSwitch';
import style from './ToggleSwitch.st.css';
import {ToggleOff, ToggleOn} from 'wix-ui-icons-common/system';

import {withStylable} from 'wix-ui-core/withStylable';

interface ToggleSwitchProps {
  skin?: 'standard' | 'error' | 'success';
  size?: 'small' | 'medium' | 'large';
}

const defaultProps = {
  skin: 'standard',
  size: 'large',
  uncheckedIcon: <ToggleOff />,
  checkedIcon: <ToggleOn />
};

export const ToggleSwitch = withStylable<CoreToggleSwitchProps, ToggleSwitchProps>(
  CoreToggleSwitch,
  style,
  ({size, skin}) => ({size, skin}),
  defaultProps
);
