import * as React from 'react';
import {oneOf, Requireable} from 'prop-types';
import {Text as CoreText, TextProps as CoreTextProps} from 'wix-ui-core/StylableText';
import {withStylable} from 'wix-ui-core/withStylable';
import {Skin, Size, SKINS, SIZES} from './constants';
import style from './Text.st.css';

export interface Props {
  /** font size of the text */
  size?: Size;

  /** is the text type is secondary. Affects the font color */
  secondary?: boolean;

  /** skin color of the text */
  skin?: Skin;

  /** is the text has dark or light skin */
  light?: boolean;

  /** is the text bold */
  bold?: boolean;
}

const defaultProps: Props = {
  size: SIZES.medium,
  secondary: false,
  skin: SKINS.standard,
  light: false,
  bold: false
};

export const Text = withStylable<CoreTextProps, Props>(
  CoreText,
  style,
  ({size, secondary, skin, light, bold}) => ({
    size,
    secondary,
    skin,
    light: light && skin === SKINS.standard,
    bold
  }),
  defaultProps
);
