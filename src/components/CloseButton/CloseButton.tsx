import * as React from 'react';
import { Button as CoreButton, ButtonProps as CoreButtonProps } from 'wix-ui-core/Button';
import { enumValues } from '../../utils';
import style from './CloseButton.st.css';
import { Skin, Size } from './constants';
import { Close as CloseIcon } from 'wix-ui-icons-common/system';

export interface CloseButtonOwnProps extends CoreButtonProps {
  /**Skin of the Button (Styling)*/
  skin?: Skin;
  /** Size of the button (Styling) */
  size?: Size;
}

export type CloseButtonProps = CloseButtonOwnProps & CoreButtonProps;

export const CloseButton: React.SFC<CloseButtonProps> = props => {
  // children is ommited on purpose (and not used)
  const { children, skin, size, ...rest } = props;

  return (
    <CoreButton
      {...rest}
      {...style('root', { skin, size }, rest)}
    >
      <CloseIcon />
    </CoreButton>
  )
}

CloseButton.displayName = 'CloseButton';

CloseButton.defaultProps = {
  skin: Skin.standard,
  size: Size.small
}
