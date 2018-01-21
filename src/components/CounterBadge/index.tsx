import * as React from 'react';
import {oneOf, node} from 'prop-types';
import {ThemedComponent} from 'wix-ui-theme';
import {Badge as CoreBadge, BadgeProps as CoreBadgeProps} from 'wix-ui-core/Badge';
import {theme} from './theme';
import {UIText} from '../UIText';
import {Skin} from './constants';

export {Skin};
interface Props extends CoreBadgeProps {
  /** Type of the badge */
  skin?: Skin;

  /** Content of the badge */
  children?: any;
}

export class CounterBadge extends React.PureComponent<Props> {
  static propTypes = {
    ...CoreBadge.propTypes,

    /** Type of the badge */
    skin: oneOf(['default', 'standard', 'urgent', 'success']),
    /** Content of the badge */
    children: node
  };

  static defaultProps: Props = {
    skin: Skin.DEFAULT
  };

  render() {
    const {skin, children, ...coreProps} = this.props;
    const content = (React.Children.map(children, child => child))[0];
    if ((typeof content === 'string' || typeof content === 'number') && content.toString().length > 2) {
      throw new Error('CounterBadge children max length must be less than 2');
    }

    return (
      <ThemedComponent {...{theme, skin}}>
        <CoreBadge {...coreProps}>
          <UIText appearance="T5" dataClass="badge-content">{content}</UIText>
        </CoreBadge>
      </ThemedComponent>
    );
  }
}
