import * as React from 'react';
import { withStylable } from 'wix-ui-core/dist/src/utils/withStylable';
import {
  Badge as CoreBadge,
  BadgeProps as CoreBadgeProps
} from 'wix-ui-core/dist/src/components/deprecated/stylable-badge';
import { Skin, SKIN, maxNumberBeforeTruncation } from './constants';
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

type CounterBadgeExtendedProps = CounterBadgeProps & { wide: boolean };
const getState = ({ skin, wide }) => ({ skin, wide });

const StyledCounterBadge = withStylable<
  CoreBadgeProps,
  CounterBadgeExtendedProps
>(CoreBadge, style, getState, defaultProps);

export class CounterBadge extends React.PureComponent<CounterBadgeProps> {
  static displayName = 'CounterBadge';

  static defaultProps = defaultProps;

  private readonly getContent = () => {
    const { children } = this.props;
    const isChildrenIcon = isIcon(children);
    let content = children;

    if (!isChildrenIcon && Number(children) > maxNumberBeforeTruncation) {
      content = '99+';
    }

    return isChildrenIcon ? (
      React.cloneElement(children as React.ReactElement<any>, {
        className: style.icon
      })
    ) : (
      <span className={style.text}>{content}</span>
    );
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <StyledCounterBadge {...rest} wide={isWide(children)}>
        {this.getContent()}
      </StyledCounterBadge>
    );
  }
}
