import * as React from 'react';
import * as PropTypes from 'prop-types';
import {oneOf, node} from 'prop-types';
import {SKIN, TYPE, SIZE, Type, Skin, Size} from './constants';
import style from './Badge.st.css';

export interface BadgeProps {
  type?: Type;
  skin?: Skin;
  size?: Size;
  prefixIcon?: React.ReactElement<any>;
  suffixIcon?: React.ReactElement<any>;
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  uppercase?: boolean;

  /** usually just text to be displayed */
  children: React.ReactNode;
}

const defaultProps = {
  type: TYPE.solid,
  skin: SKIN.general,
  size: SIZE.medium,
  uppercase: true
};

export class Badge extends React.PureComponent<BadgeProps> {
  static displayName = 'Badge';

  static propTypes = {
    /** Any node to be rendered (usually text node) */
    children: PropTypes.any,
    /** Type of the badge */
    type: oneOf(Object.keys(TYPE)),
    /** Skin of the badge */
    skin: oneOf(Object.keys(SKIN)),
    /** Size of the badge */
    size: oneOf(Object.keys(SIZE)),
    /** The prefix icon of the badge */
    prefixIcon: node,
    /** The suffix icon of the badge */
    suffixIcon: node,
    /* onClick Event handler */
    onClick: PropTypes.func,
    /** Uppercase */
    uppercase: PropTypes.bool
  };

  static defaultProps = defaultProps;

  render() {
    const {children, prefixIcon, suffixIcon, onClick, ...rest} = this.props;
    return (
      <div onClick={onClick} {...style('root', {clickable: !!onClick, ...rest}, rest)}>
          {prefixIcon && React.cloneElement(prefixIcon, {className: style.prefix})}
          <span className={style.text}>{children}</span>
          {suffixIcon && React.cloneElement(suffixIcon, {className: style.suffix})}
      </div>
    );
  }
}
