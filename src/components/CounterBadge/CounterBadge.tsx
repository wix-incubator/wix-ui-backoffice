import * as React from 'react';
import {oneOf, node, Requireable} from 'prop-types';
import {ThemedComponent} from 'wix-ui-theme';
import {ThemedComponentProps} from 'wix-ui-jss';
import {Badge as CoreBadge, BadgeProps as CoreBadgeProps} from 'wix-ui-core/Badge';
import {theme} from './theme';
import {UIText} from '../UIText';
import {Skin} from './constants';
import {WixComponentProps} from 'wix-ui-core/dist/src/createHOC';

const maxContentLength = 2;

export interface CounterBadgeProps extends CoreBadgeProps {
  /** Type of the badge */
  skin?: Skin;

  /** Content of the badge */
  children?: any;
}

export class CounterBadge extends React.PureComponent<CounterBadgeProps> {
  static propTypes = {
    /** Type of the badge */
    skin: oneOf(['default', 'standard', 'urgent', 'success']),
    /** Content of the badge */
    children: node
  };

  static defaultProps: Partial<CounterBadgeProps> = {
    skin: Skin.DEFAULT,
    children: ''
  };

  render() {
    const {skin, children, ...coreProps} = this.props;
    const content = (React.Children.map(children, child => child))[0];
    const isIcon = typeof content !== 'string' && typeof content !== 'number';

    let canGrow = false;

    if (!isIcon) {
      const contentLength = content.toString().length;
      if (contentLength > maxContentLength) {
        throw new Error(`CounterBadge children max length can not be more than ${maxContentLength}`);
      }

      if (contentLength === maxContentLength) {
        canGrow = true;
      }
    }
    return (
      <ThemedComponent {...{theme, skin, canGrow}}>
        <CoreBadge {...coreProps}>
          {
            isIcon ?
              content :
              <UIText appearance="T5" dataClass="badge-content">{content}</UIText>
          }
        </CoreBadge>
      </ThemedComponent>
    );
  }
}
