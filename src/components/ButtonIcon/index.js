import React from 'react';
import {oneOf} from 'prop-types';
import CoreButton from 'wix-ui-core/Button';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from '../../utils/button/theme';

const ButtonIcon = ({height: size, skin, icon, ...coreProps}) => (
  <ThemedComponent theme={theme} size={size} skin={skin} isIcon>
    <CoreButton {...coreProps}>
      <span>
        {React.cloneElement(icon, {size})}
      </span>
    </CoreButton>
  </ThemedComponent>
);

ButtonIcon.propTypes = {
  ...CoreButton.propTypes,

  /** The height of the buttonIcon */
  height: oneOf(['small', 'medium']),

  /** The skin of the buttonIcon */
  skin: oneOf([
    'primaryStandard',
    'primaryError',
    'primaryWhite',

    'secondaryStandard',
    'secondaryError',
    'secondaryWhite',

    // need to rethink naming
    'transparentGrey',
    'secondaryGrey',
    'tertiaryStandard'
  ])
};

ButtonIcon.defaultProps = {
  height: 'medium',
  skin: 'primaryStandard'
};

export default ButtonIcon;
