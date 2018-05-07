import * as React from 'react';
import { oneOf, string } from 'prop-types';
import { Button as CoreButton, ButtonProps as CoreButtonProps } from 'wix-ui-core/Button';
import { withStylable } from 'wix-ui-core/withStylable';
import { enumValues } from '../../utils';
import style from './Button.st.css';
import { Skin, Priority, Size } from './constants';
import { Text, TEXT_SKINS, TEXT_SIZES } from '../Text';

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

const skinMap = {
  [Skin.standard]: TEXT_SKINS.standard,
  [Skin.white]: TEXT_SKINS.standard,
  [Skin.destructive]: TEXT_SKINS.error,
  [Skin.premium]: TEXT_SKINS.premium
}

export const Button: React.SFC<ButtonProps> = props => {
  const { children, skin, priority, size, ...rest } = props;

  let textLight = priority === Priority.primary;
  let textSkin: TEXT_SKINS = skinMap[skin];

  if (skin === Skin.white) {
    textLight = !textLight;
  }

  const textSize = (size === Size.large || size === Size.medium) ? TEXT_SIZES.medium : TEXT_SIZES.small;

  return (
    <CoreButton
      {...rest}
      {...style('root', { skin, priority, size }, rest)}
    >
      <Text
        light={textLight}
        skin={textSkin}
        size={textSize}
      >
        {children}
      </Text>
    </CoreButton>
  )
}

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


