import * as React from 'react';
import {oneOf, Requireable} from 'prop-types';
import {Text as CoreText, TextProps as CoreTextProps} from 'wix-ui-core/StylableText';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './Text.st.css';

export type Appearance = 'T1' | 'T1.1' | 'T3' | 'T3.1';
export type Skin = 'dark' | 'light';

export interface Props {
  /** typography of the text */
  appearance?: Appearance;

  /** skin color of the text */
  skin: Skin;
}

const defaultProps: Props = {
  appearance: 'T1',
  skin: 'dark'
};

export const Text = withStylable<CoreTextProps, Props>(
  CoreText,
  style,
  ({appearance, skin}) => ({appearance, skin}),
  defaultProps
);
