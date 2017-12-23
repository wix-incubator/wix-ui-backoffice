import React from 'react';
import {oneOf, oneOfType, string, number} from 'prop-types';
import CoreBadge from 'wix-ui-core/Badge';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';
import UIText from '../UIText';
import {SKIN} from './constants';

const CounterBadge = ({skin, children, ...coreProps}) => {
  if (children.toString().length > 2) {
    throw new Error('CounterBadge children max length must be less than 2');
  }

  return (
    <ThemedComponent theme={theme} skin={skin}>
      <CoreBadge {...coreProps}>
        <UIText appearance="T5" dataClass="badge-content">{children}</UIText>
      </CoreBadge>
    </ThemedComponent>
  );
};

CounterBadge.propTypes = {
  ...CoreBadge.propTypes,

  /** Type of the badge */
  skin: oneOf(Object.keys(SKIN)),
  /** Content of the badge */
  children: oneOfType([string, number])
};

CounterBadge.defaultProps = {
  skin: SKIN.default
};

export default CounterBadge;
