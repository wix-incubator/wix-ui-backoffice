import React from 'react';
import {node, oneOf} from 'prop-types';
import CoreButton from 'wix-ui-core/Button';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from '../../utils/button/theme';
import {appearance, iconSize} from './appearance';
import UIText from '../UIText';

const iconStyles = {
  suffix: {paddingRight: '10px', display: 'flex'},
  prefix: {paddingLeft: '10px', display: 'flex'}
};

const createButtonIcon = (type, icon, size) => (
  <span style={iconStyles[type]}>
    {React.cloneElement(icon, {size})}
  </span>
);

const Button = ({height: size, skin, prefixIcon, suffixIcon, ...coreProps}) => (
  <ThemedComponent theme={theme} size={size} skin={skin}>
    <CoreButton {...coreProps}>
      <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {prefixIcon && createButtonIcon('prefix', prefixIcon, iconSize(size))}
        <UIText appearance={appearance(size)} dataClass="button-content">{coreProps.children}</UIText>
        {suffixIcon && createButtonIcon('suffix', suffixIcon, iconSize(size))}
      </span>
    </CoreButton>
  </ThemedComponent>
);

Button.propTypes = {
  ...CoreButton.propTypes,

  /** The height of the button */
  height: oneOf(['tiny', 'small', 'medium', 'large']),

  /** The skin of the button */
  skin: oneOf([
    'primaryStandard',
    'primaryError',
    'primaryPremium',
    'primaryWhite',
    'transparentGrey',
    'secondaryGrey',
    'secondaryStandard',
    'secondaryError',
    'secondaryPremium',
    'secondaryWhite',
    'tertiaryStandard',

    'close-standard',
    'close-dark',
    'close-white',
    'close-lightBlue',
    'close-transparent'
  ]),

  /** The prefix icon of the button */
  prefixIcon: node,

  /** The suffix icon of the button */
  suffixIcon: node
};

Button.defaultProps = {
  height: 'medium',
  skin: 'primaryStandard'
};

export default Button;
