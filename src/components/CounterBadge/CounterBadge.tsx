import * as React from 'react';
import {oneOf, node, Requireable} from 'prop-types';
import {ThemedComponent} from 'wix-ui-theme';
import {ThemedComponentProps} from 'wix-ui-jss';
import {Badge as CoreBadge, BadgeProps as CoreBadgeProps} from 'wix-ui-core/Badge';
import {theme} from './theme';
import {Skin} from './constants';
import {WixComponentProps} from 'wix-ui-core/dist/src/createHOC';

const maxContentLength = 2;

const counterStyle = {
  fontFamily: 'HelveticaNeueW01-65Medi, HelveticaNeueW02-65Medi, HelveticaNeueW10-65Medi, Helvetica Neue, Helvetica, Arial, sans-serif',
  fontSize: '10px',
  lineHeight: '12px',
  letterSpacing: '1px',
  margin: '0 -1px 0 0'
};

export interface CounterBadgeProps extends CoreBadgeProps {
  /** Type of the badge */
  skin?: Skin;

  /** Content of the badge */
  children?: any;
}

export class CounterBadge extends React.PureComponent<CounterBadgeProps> {
  static displayName = 'CounterBadge';

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
              <span style={counterStyle} data-class="badge-content">{content}</span>
          }
        </CoreBadge>
      </ThemedComponent>
    );
  }
}
