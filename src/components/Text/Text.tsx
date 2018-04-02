import * as React from 'react';
import {oneOf, Requireable} from 'prop-types';
import {Text as CoreText, TextProps as CoreTextProps} from 'wix-ui-core/StylableText';
import {withStylable} from 'wix-ui-core/withStylable';
import {Skin, Appearance, SKINS} from './constants';
import style from './Text.st.css';

export interface Props {
  /** typography of the text */
  appearance?: Appearance;

  /** skin color of the text */
  skin?: Skin;

  /** is the text has dark or light skin */
  light?: boolean;

  bold?: boolean;
}

const defaultProps: Props = {
  appearance: 'T1',
  skin: 'standard',
  light: false,
  bold: false
};

export const Text = withStylable<CoreTextProps, Props>(
  CoreText,
  style,
  ({appearance, skin, light, bold}) => ({
    appearance,
    skin,
    light: light && skin === SKINS.standard,
    bold
  }),
  defaultProps
);
