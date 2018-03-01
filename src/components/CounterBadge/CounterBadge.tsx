import * as React from 'react';
import {oneOf, node} from 'prop-types';
import {withStylable} from 'wix-ui-core/withStylable';
import {Badge as CoreBadge, BadgeProps as CoreBadgeProps} from 'wix-ui-core/StylableBadge';
import {UIText} from '../StylableUIText';
import {Skin, SKIN} from './constants';
import {isIcon, isWide} from './utils';
import style from './CounterBadge.st.css';

type Content = string | number | React.ReactElement<any>;

interface CounterBadgeProps {
  /** Skin of the badge */
  skin?: Skin;

  /** Content of the badge */
  children?: Content;
}

const defaultProps: CounterBadgeProps = {
  skin: SKIN.default,
  children: ''
};

const StyledCounterBadge = withStylable<CoreBadgeProps, CounterBadgeProps>(
  CoreBadge,
  style,
  ({skin}) => ({skin}),
  defaultProps
);

export class CounterBadge extends React.PureComponent<CounterBadgeProps> {
  static propTypes = {
    ...CoreBadge.propTypes,

    /** Skin of the badge */
    skin: oneOf(Object.keys(SKIN)),
    /** Content of the badge */
    children: node
  };

  static defaultProps = defaultProps;

  render() {
    const {children, ...rest} = this.props;

    return (
      <StyledCounterBadge {...rest} className={isWide(children) ? style.wide : ''}>
        {
          isIcon(children) ?
            React.cloneElement(children as React.ReactElement<any>, {className: style.icon}) :
            <UIText className={style.text} appearance="T5">{children}</UIText>
        }
      </StyledCounterBadge>
    );
  }
}
