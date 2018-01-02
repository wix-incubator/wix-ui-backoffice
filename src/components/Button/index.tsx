import * as React from 'react';
import CoreButton from 'wix-ui-core/Button';
import {ThemedComponent} from 'wix-ui-theme';
import {bool, node, oneOf} from 'prop-types';
import {theme, Skin, DeprecatedSkin} from './theme';
import {appearance, iconSize} from './appearance';
import UIText from '../UIText';
import {Size} from './constants';

const iconStyles = {
  suffix: {paddingRight: '10px', display: 'flex'},
  prefix: {paddingLeft: '10px', display: 'flex'}
};

const createButtonIcon = (type: 'suffix' | 'prefix', icon, size: string) => (
  icon ?
    <span style={iconStyles[type]}>
      {React.cloneElement(icon, {size})}
    </span> :
    null
);

interface Props { // TODO: extend CoreButtonProps
  /** The height of the button */
  height?: Size;

  /** The theme of the button */
  theme?: Skin | DeprecatedSkin;

  /** The prefix icon of the button */
  prefixIcon?: React.ReactNode;

  /** The suffix icon of the button */
  suffixIcon?: React.ReactNode;

  /** Makes the button look like the icon */
  isIcon?: boolean;
}

export default class Button extends React.PureComponent<Props> {
  static defaultProps = {
    height: 'medium',
    theme: 'primaryStandard',
  };

  static propTypes = {
    ...CoreButton.propTypes,

    /** The height of the button */
    height: oneOf(['tiny', 'small', 'medium', 'large']),

    /** The theme of the button */
    theme: oneOf([
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
      'close-transparent',

      '************************** BELOW ARE DEPRECATED (supported for wix-style-react) **************************',
      'transparent',
      'fullred',
      'fullgreen',
      'fullpurple',
      'emptyred',
      'emptygreen',
      'emptybluesecondary',
      'emptyblue',
      'emptypurple',
      'fullblue',
      'transparentblue',
      'whiteblue',
      'whiteblueprimary',
      'whitebluesecondary',
      'icon-greybackground',
      'icon-standard',
      'icon-standardsecondary',
      'icon-white',
      'icon-whitesecondary'
    ]),

    /** The prefix icon of the button */
    prefixIcon: node,

    /** The suffix icon of the button */
    suffixIcon: node,

    /** Makes the button look like the icon */
    isIcon: bool
  };

  render() {
    const {height: size, theme: skin, isIcon, prefixIcon, suffixIcon, ...coreProps} = this.props;

    return (
      <ThemedComponent {...{theme, size, skin, isIcon}}>
        <CoreButton {...coreProps}>
          <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {prefixIcon && createButtonIcon('prefix', prefixIcon, iconSize(size))}
            <UIText appearance={appearance(size)} dataClass="button-content">{coreProps.children}</UIText>
            {suffixIcon && createButtonIcon('suffix', suffixIcon, iconSize(size))}
          </span>
        </CoreButton>
      </ThemedComponent>
    );
  }
}
