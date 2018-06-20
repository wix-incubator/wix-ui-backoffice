import * as React from 'react';
import {oneOf, node, Requireable} from 'prop-types';
import {Badge as CoreBadge, BadgeProps as CoreBadgeProps} from 'wix-ui-core/StylableBadge';
import {withStylable} from 'wix-ui-core/withStylable';
import {UIText} from '../StylableUIText';
import {SKIN, TYPE, Type, Skin} from './constants';
import style from './Badge.st.css';

export interface BadgeProps {
  type?: Type;
  skin?: Skin;
  prefixIcon?: React.ReactElement<any>;
  suffixIcon?: React.ReactElement<any>;

  /** usually just text to be displayed */
  children: React.ReactNode;
}

const defaultProps = {
  type: TYPE.solid,
  skin: SKIN.general
};

const StyledBadge = withStylable<CoreBadgeProps, BadgeProps>(
  CoreBadge,
  style,
  ({skin, type}) => ({skin, type}),
  defaultProps
);

export class Badge extends React.PureComponent<BadgeProps> {
  static displayName = 'Badge';

  static propTypes = {
    ...CoreBadge.propTypes,
    /** Type of the badge */
    type: oneOf(Object.keys(TYPE)),
    /** Skin of the badge */
    skin: oneOf(Object.keys(SKIN)),
    /** The prefix icon of the badge */
    prefixIcon: node,
    /** The suffix icon of the badge */
    suffixIcon: node
  };

  static defaultProps = defaultProps;

  render() {
    const {children, prefixIcon, suffixIcon, ...rest} = this.props;
    return (
      <StyledBadge {...rest}>
        {prefixIcon && React.cloneElement(prefixIcon, {className: style.prefix})}
        <UIText className={style.text} appearance="T5">{children}</UIText>
        {suffixIcon && React.cloneElement(suffixIcon, {className: style.suffix})}
      </StyledBadge>
    );
  }
}
