import * as React from 'react';
import {oneOf, node} from 'prop-types';
import {Badge as CoreBadge, BadgeProps as CoreBadgeProps} from 'wix-ui-core/StylableBadge';
import style from './Badge.st.css';
import {withStylable} from 'wix-ui-core/withStylable';
import {UIText} from '../StylableUIText';
import {SKIN, TYPE, Type, Skin} from './constants';

const iconStyles = {
  prefix: {paddingRight: '8px'},
  suffix: {paddingLeft: '8px'}
};

const createBadgeIcon = (type, icon) => (
  <span style={iconStyles[type]}>
    {React.cloneElement(icon, {size: '12px'})}
  </span>
);

interface BadgeProps {
  type?: Type;
  skin?: Skin;
  prefixIcon?: any;
  suffixIcon?: any;
}

const defaultProps = {
  type: TYPE.solid,
  skin: SKIN.default
};

const StyledBadge = withStylable<CoreBadgeProps, BadgeProps>(
  CoreBadge,
  style,
  ({skin, type}) => ({skin, type}),
  defaultProps
);

export class Badge extends React.PureComponent<BadgeProps> {
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
        {prefixIcon && createBadgeIcon('prefix', prefixIcon)}
        <UIText appearance="T5">{children}</UIText>
        {suffixIcon && createBadgeIcon('suffix', suffixIcon)}
      </StyledBadge>
    );
  }
}
