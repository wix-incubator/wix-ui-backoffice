import React from 'react';
import {oneOf, node} from 'prop-types';
import CoreBadge from 'wix-ui-core/Badge';
import {ThemedComponent} from 'wix-ui-theme';

import {theme} from './theme';
import UIText from '../UIText';
import {SKIN, FORM} from './constants';

const iconStyles = {
  prefix: {paddingRight: '8px'},
  suffix: {paddingLeft: '8px'}
};

const createBadgeIcon = (type, icon, size) => (
  icon ?
    <span style={iconStyles[type]}>
      {React.cloneElement(icon, {size})}
    </span> :
    null
);

// form should be changed to type - once wix-style-react is deprecated
const Badge = ({skin, form, children, prefixIcon, suffixIcon}) => (
  <ThemedComponent theme={theme} skin={skin} form={form}>
    <CoreBadge>
      {prefixIcon && createBadgeIcon('prefix', prefixIcon, '12px')}
      <UIText appearance="T5" dataClass="badge-content">{children}</UIText>
      {suffixIcon && createBadgeIcon('suffix', suffixIcon, '12px')}
    </CoreBadge>
  </ThemedComponent>
);

Badge.propTypes = {
  ...CoreBadge.propTypes,
  /** Form (type) of the badge */
  form: oneOf(Object.keys(FORM)),
  /** Skin of the badge */
  skin: oneOf(Object.keys(SKIN)),
  /** The prefix icon of the badge */
  prefixIcon: node,
  /** The suffix icon of the badge */
  suffixIcon: node
};

Badge.defaultProps = {
  form: FORM.solid,
  skin: SKIN.default
};

export default Badge;
