import * as React from 'react';
import {oneOf, node} from 'prop-types';
import {Badge as CoreBadge} from 'wix-ui-core/Badge';
import {ThemedComponent} from 'wix-ui-theme';

import {theme} from './theme';
import {UIText} from '../UIText';
import {SKIN, FORM, Form} from './constants';
import {Skin} from '../Input/theme';

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

export interface Props {
  form: Form;
  skin: Skin;
  prefixIcon: any;
  suffixIcon: any;
}

export class Badge extends React.PureComponent<Props> {
  static propTypes = {
    ...CoreBadge.propTypes,
    /** Form (type) of the badge */
    form: oneOf(['solid', 'outlined', 'transparent']),
    /** Skin of the badge */
    skin: oneOf(['default', 'standard', 'danger', 'success', 'grey', 'warning', 'urgent', 'neutralStandard', 'neutralSuccess', 'nutralDanger']),
    /** The prefix icon of the badge */
    prefixIcon: node,
    /** The suffix icon of the badge */
    suffixIcon: node
  };

  static defaultProps = {
    form: FORM.solid,
    skin: SKIN.default
  };

  render() {
    // form should be changed to type - once wix-style-react is deprecated
    const {skin, form, children, prefixIcon, suffixIcon} = this.props;
    return (
      <ThemedComponent theme={theme} skin={skin} form={form}>
        <CoreBadge>
          {prefixIcon && createBadgeIcon('prefix', prefixIcon, '12px')}
          <UIText appearance="T5" dataClass="badge-content">{children}</UIText>
          {suffixIcon && createBadgeIcon('suffix', suffixIcon, '12px')}
        </CoreBadge>
      </ThemedComponent>
    );
  }
}
