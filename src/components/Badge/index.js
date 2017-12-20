import React from 'react';
import {oneOf, any} from 'prop-types';
import CoreBadge from 'wix-ui-core/Badge';
import {ThemedComponent} from 'wix-ui-theme';

import {theme} from './theme';
import UIText from '../UIText';
import {SKIN} from './constants';

const Badge = ({skin, children}) => (
  <ThemedComponent theme={theme} skin={skin}>
    <CoreBadge>
      <UIText appearance="T5" dataClass="badge-content">{children}</UIText>
    </CoreBadge>
  </ThemedComponent>
);

Badge.propTypes = {
  /** Type of the badge */
  skin: oneOf(['default', 'standard', 'danger', 'success', 'grey', 'warning', 'urgent', 'neutralStandard', 'neutralSuccess', 'neutralDanger']),
  /** Content of the badge */
  children: any
};

Badge.defaultProps = {
  skin: SKIN.default
};

export default Badge;
