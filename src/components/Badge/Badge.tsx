import * as React from 'react';
import * as PropTypes from 'prop-types';
import {oneOf, node} from 'prop-types';
import {UIText} from '../StylableUIText';
import {SKIN, TYPE, SIZE, Type, Skin, Size} from './constants';
import style from './Badge.st.css';

export interface BadgeProps {
  type?: Type;
  skin?: Skin;
  size?: Size;
  prefixIcon?: React.ReactElement<any>;
  suffixIcon?: React.ReactElement<any>;
  /** usually just text to be displayed */
  children: React.ReactNode;
}

const defaultProps = {
  type: TYPE.solid,
  skin: SKIN.general,
  size: SIZE.medium
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
    suffixIcon: node
  };

  static defaultProps = defaultProps;

  render() {
    const {children, prefixIcon, suffixIcon, onClick,  ...rest} = this.props;
    return (
      <div onClick={onClick} {...style('root', {hasOnClickHandler: !!onClick, ...rest}, rest)}>
          {prefixIcon && React.cloneElement(prefixIcon, {className: style.prefix})}
          <UIText className={style.text} appearance="T5">{children}</UIText>
          {suffixIcon && React.cloneElement(suffixIcon, {className: style.suffix})}
      </div>
    );
  }
}
