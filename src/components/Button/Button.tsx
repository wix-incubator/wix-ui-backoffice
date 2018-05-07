import * as React from 'react';
import { oneOf } from 'prop-types';
import { Button as CoreButton, ButtonProps as CoreButtonProps } from 'wix-ui-core/Button';
import { withStylable } from 'wix-ui-core/withStylable';
import { enumValues } from '../../utils';
import style from './Button.st.css';
import { Skin, Priority, Size } from './constants';

export interface ButtonOwnProps extends CoreButtonProps {
  /**Skin of the Button (Styling)*/
  skin?: Skin;
  /** Priority of the Button (Styling)*/
  priority?: Priority;
  /** Size of the button (Styling) */
  size?: Size;
}

export type ButtonProps = ButtonOwnProps & CoreButtonProps;

export const Button: React.SFC<ButtonProps> = props => {
  const { children, skin, priority, size, ...rest } = props;

  return (
    <CoreButton
      {...rest}
      {...style('root', { skin, priority, size }, rest)}
    >
      {children}
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
  size: oneOf(enumValues(Size))
}


