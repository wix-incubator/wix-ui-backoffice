import React from 'react';
import {oneOfType} from 'prop-types';
import CoreBadge from 'wix-ui-core/Badge';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';
import UIText from '../UIText';
import {SKIN} from './constants';

const CounterBadge = coreProps => (
  <ThemedComponent theme={theme}>
    <CoreBadge>
      <UIText appearance="T5" dataClass="badge-content">{coreProps.children}</UIText>
    </CoreBadge>
  </ThemedComponent>
);

CounterBadge.propTypes = {
  /** The type of the badge */
  skin: oneOfType(['default', 'standard', 'urgent', 'success'])
};

CounterBadge.defaultProps = {
  skin: SKIN.default
};

export default CounterBadge;
