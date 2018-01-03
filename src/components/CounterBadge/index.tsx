import * as React from 'react';
import CoreBadge from 'wix-ui-core/Badge';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';
import UIText from '../UIText';
import {oneOf, oneOfType, string, number} from 'prop-types';
import {Skin} from './constants';

interface Props { // TODO: extend CoreBadgeProps,
  /** Type of the badge */
  skin?: Skin;

  /** Content of the badge */
  children?: string | number;
}

export default class CounterBadge extends React.PureComponent<Props> {
  static propTypes = {
    ...CoreBadge.propTypes,

    /** Type of the badge */
    skin: oneOf(['default', 'standard', 'urgent', 'success']),
    /** Content of the badge */
    children: oneOfType([string, number])
  };

  static defaultProps = {
    skin: Skin.DEFAULT
  };

  render() {
    const {skin, children, ...coreProps} = this.props;

    if (children.toString().length > 2) {
      throw new Error('CounterBadge children max length must be less than 2');
    }

    return (
      <ThemedComponent {...{theme, skin}}>
        <CoreBadge {...coreProps}>
          <UIText appearance="T5" dataClass="badge-content">{children}</UIText>
        </CoreBadge>
      </ThemedComponent>
    );
  }
}
