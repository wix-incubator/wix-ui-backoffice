import * as React from 'react';
import { withStylable } from 'wix-ui-core/withStylable';
import {
  Badge as CoreBadge,
  BadgeProps as CoreBadgeProps
} from 'wix-ui-core/stylable-badge';
import { Skin, SKIN } from './constants';
import { isIcon, isWide } from './utils';
import style from './CounterBadge.st.css';

export type Content = string | number | React.ReactElement<any>;

export interface CounterBadgeProps {
  /** Skin of the badge */
  skin?: Skin;

  /** Content of the badge */
  children?: Content;
}

const defaultProps: CounterBadgeProps = {
  skin: SKIN.general,
  children: ''
};

const StyledCounterBadge = withStylable<
  CoreBadgeProps,
  CounterBadgeProps & { wide: boolean }
>(CoreBadge, style, ({ skin, wide }) => ({ skin, wide }), defaultProps);

export class CounterBadge extends React.PureComponent<CounterBadgeProps> {
  static displayName = 'CounterBadge';

  static defaultProps = defaultProps;

  render() {
    const { children, ...rest } = this.props;

    return (
      <StyledCounterBadge {...rest} wide={isWide(children)}>
        {isIcon(children) ? (
          React.cloneElement(children as React.ReactElement<any>, {
            className: style.icon
          })
        ) : (
          <span className={style.text}>{children}</span>
        )}
      </StyledCounterBadge>
    );
  }
}
