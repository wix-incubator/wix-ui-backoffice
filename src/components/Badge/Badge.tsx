import * as React from 'react';
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

  focusableOnFocus?: () => void;
  focusableOnBlur?: () => void;

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

  static defaultProps = defaultProps;

  render() {
    const {
      children,
      prefixIcon,
      suffixIcon,
      onClick,
      focusableOnFocus,
      focusableOnBlur,
      ...rest
    } = this.props;

    const focusableProps = onClick ? {
      onFocus: focusableOnFocus,
      onBlur: focusableOnBlur,
      'tabIndex': 0
    } : {};

    return (
      <div
        onClick={onClick}
        {...focusableProps}
        {...style('root', {clickable: !!onClick, ...rest}, this.props)}
      >
          {prefixIcon && React.cloneElement(prefixIcon, {className: style.prefix})}
          <span className={style.text}>{children}</span>
          {suffixIcon && React.cloneElement(suffixIcon, {className: style.suffix})}
      </div>
    );
  }
}
