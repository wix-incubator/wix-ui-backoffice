import * as React from 'react';
import {oneOf} from "prop-types";
import {Button as CoreButton, ButtonProps as CoreButtonProps} from 'wix-ui-core/Button';
import {enumValues} from '../../utils';
import style from './CloseButton.st.css';
import {Skin, Size} from './constants';

export interface CloseButtonOwnProps extends CoreButtonProps {
  /**Skin of the Button (Styling)*/
  skin?: Skin;
  /** Size of the button (Styling) */
  size?: Size;
}

export type CloseButtonProps = CloseButtonOwnProps & CoreButtonProps;

export const CloseButton : React.SFC<CloseButtonProps> = props => {
  const {children, skin, size, ...rest} = props;

  return (
    <CoreButton 
      {...rest}
      {...style('root',{skin, size}, rest)}
    >
      {children}
    </CoreButton>
  )
}

CloseButton.defaultProps = {
  skin: Skin.standard,
  size: Size.medium
}

CloseButton.propTypes =  {
  skin: oneOf(enumValues(Skin)),
  size: oneOf(enumValues(Size))
}


