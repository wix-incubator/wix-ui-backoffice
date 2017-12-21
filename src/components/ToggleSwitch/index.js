import React from 'react';
import {any, oneOf} from 'prop-types';
import CoreToggleSwitch from 'wix-ui-core/ToggleSwitch';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';
import UIText from '../UIText';

const ToggleSwitch = ({size, skin, children, ...coreProps}) => (
  <ThemedComponent theme={theme} size={size} skin={skin}>
    <CoreToggleSwitch {...coreProps}>
      <UIText appearance="T1.1" dataClass="toggle-switch-content">{children}</UIText>
    </CoreToggleSwitch>
  </ThemedComponent>
);

ToggleSwitch.propTypes = {
  ...CoreToggleSwitch.propTypes,

  /** size of the toggle switch */
  size: oneOf(['x-small', 'small', 'large']),

  /** Color for disabled toggle switch */
  skin: oneOf(['standard', 'error', 'success']),

  /** Content of the toggle switch */
  children: any
};

ToggleSwitch.defaultProps = {
  size: 'large',
  skin: 'standard'
};

export default ToggleSwitch;
