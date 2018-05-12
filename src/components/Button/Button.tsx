import * as React from 'react';
import { oneOf, string } from 'prop-types';
import { withStylable } from 'wix-ui-core/withStylable';
import { enumValues } from '../../utils';
import style from './Button.st.css';
import { Skin, Priority, Size } from './constants';
import { Text, TextProps, TextSkin, TextSize } from '../Text';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button' | 'reset';
  /**Skin of the Button (Styling)*/
  skin?: Skin;
  /** Priority of the Button (Styling)*/
  priority?: Priority;
  /** Size of the button (Styling) */
  size?: Size;
  /** The button's text */
  children?: string;
}

const toTextColorProps : {[k in Priority]: {[y in Skin]: Pick<TextProps,'skin' | 'light'>}} = {
  [Priority.primary]: {
    [Skin.standard]:    {skin:TextSkin.standard, light: true},
    [Skin.white]:       {skin:TextSkin.standard, light: false},
    [Skin.destructive]: {skin:TextSkin.standard, light: true},
    [Skin.premium]:     {skin:TextSkin.standard, light: true}
  },
  [Priority.secondary]: {
    [Skin.standard]:    {skin:TextSkin.standard, light: false},
    [Skin.white]:       {skin:TextSkin.standard, light: true},
    [Skin.destructive]: {skin:TextSkin.error, light: false},
    [Skin.premium]:     {skin:TextSkin.premium, light: false}
  }
}

export const Button: React.SFC<ButtonProps> = props => {
  const { children, skin, priority, size, disabled, ...rest } = props;
  const textColorProps = toTextColorProps[priority][skin];
  const textSize = (size === Size.large || size === Size.medium) ? TextSize.medium : TextSize.small;

  return (
    <button
      disabled={disabled}
      {...rest}
      {...style('root', { skin, priority, size, disabled }, rest)}
    >
      <Text
        light={textColorProps.light}
        skin={textColorProps.skin}
        size={textSize}
      >
        {children}
      </Text>
    </button>
  )
}

Button.displayName = 'Button';
Button.defaultProps = {
  skin: Skin.standard,
  priority: Priority.primary,
  size: Size.medium
}

Button.propTypes = {
  /** Wrapper class name */
  className: string,
  /** Type of the button - submit / button / reset */
  type: oneOf(['submit', 'button', 'reset']),
  skin: oneOf(enumValues(Skin)),
  priority: oneOf(enumValues(Priority)),
  size: oneOf(enumValues(Size)),
  children: string
}


