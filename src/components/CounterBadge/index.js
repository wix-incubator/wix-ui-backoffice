import React from 'react';
import {oneOf} from 'prop-types';
import CoreBadge from 'wix-ui-core/Badge';
import {ThemedComponent} from 'wix-ui-theme';

import {textOfMaxTwoSymbols} from './content-validation';
import {theme} from './theme';
import UIText from '../UIText';
import {SKIN} from './constants';

const CounterBadge = ({skin, children, ...coreProps}) => (
  <ThemedComponent theme={theme} skin={skin}>
    <CoreBadge {...coreProps}>
      <UIText appearance="T5" dataClass="badge-content">{children}</UIText>
    </CoreBadge>
  </ThemedComponent>
);

CounterBadge.propTypes = {
  /** Type of the badge */
  skin: oneOf(['default', 'standard', 'urgent', 'success']),
  /** Content of the badge */
  children: textOfMaxTwoSymbols,

  ...CoreBadge.propTypes
};

CounterBadge.defaultProps = {
  skin: SKIN.default
};

export default CounterBadge;
