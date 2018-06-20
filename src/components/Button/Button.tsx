import * as React from 'react';
import { oneOf, string } from 'prop-types';
import { Button as CoreButton, ButtonProps as CoreButtonProps } from 'wix-ui-core/Button';
import { enumValues } from '../../utils';
import style from './Button.st.css';
import { Skin, Priority, Size } from './constants';
import { Text, TextProps, TextSkin, TextSize } from '../Text';

export interface ButtonOwnProps extends CoreButtonProps {
  /**Skin of the Button (Styling)*/
  skin?: Skin;
  /** Priority of the Button (Styling)*/
  priority?: Priority;
  /** Size of the button (Styling) */
  size?: Size;
  /** The button's text */
  children?: string;
}

export type ButtonProps = ButtonOwnProps & CoreButtonProps;
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
  const { children, skin, priority, size, ...rest } = props;
  const textColorProps = toTextColorProps[priority][skin];
  const textSize = (size === Size.large || size === Size.medium) ? TextSize.medium : TextSize.small;

  return (
    <CoreButton
      {...rest}
      {...style('root', { skin, priority, size }, rest)}
    >
      <Text
        light={textColorProps.light}
        skin={textColorProps.skin}
        size={textSize}
        {...style('text')}
      >
        {children}
      </Text>
    </CoreButton>
  )
}

Button.displayName = 'Button';

Button.defaultProps = {
  skin: Skin.standard,
  priority: Priority.primary,
  size: Size.medium
}

Button.propTypes = {
  skin: oneOf(enumValues(Skin)),
  priority: oneOf(enumValues(Priority)),
  size: oneOf(enumValues(Size)),
  children: string
}
