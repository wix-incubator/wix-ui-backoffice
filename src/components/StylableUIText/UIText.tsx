import * as React from 'react';
import {oneOf, bool, string} from 'prop-types';
import {Text as CoreText, TextProps as CoreTextProps} from '../core/CoreText';
import style from './UIText.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

export type Appearance =
    'T1' | 'T1.1' | 'T1.2' | 'T1.3' | 'T1.4' | 'T1.5' | 'T1.6' | 'T1.7' |
    'T2' | 'T2.1' | 'T2.2' | 'T2.3' | 'T2.4' |
    'T3' | 'T3.1' | 'T3.2' | 'T3.3' | 'T3.4' | 'T3.5' | 'T3.6' | 'T3.7' |
    'T4' | 'T4.1' | 'T4.2' | 'T4.3' | 'T4.4' | 'T4.5' | 'T4.6' | 'T4.7' |
    'T5' | 'T5.1';

export type TagName = 'div' | 'span';

export interface UITextProps {
  /** typography of the text */
  appearance?: Appearance;

  /** the tag name to be used */
  tagName?: TagName;
}

const defaultProps: UITextProps = {appearance: 'T1.1', tagName: 'span'};

export const UIText = withStylable<CoreTextProps, UITextProps>(
  CoreText,
  style,
  ({appearance}) => ({appearance}),
  defaultProps
);

UIText.propTypes = {
  ...CoreText.propTypes,

   /** typography of the uitext */
   appearance: oneOf([
    'T1', 'T1.1', 'T1.2', 'T1.3', 'T1.4', 'T1.5', 'T1.6', 'T1.7',
    'T2', 'T2.1', 'T2.2', 'T2.3', 'T2.4',
    'T3', 'T3.1', 'T3.2', 'T3.3', 'T3.4', 'T3.5', 'T3.6', 'T3.7',
    'T4', 'T4.1', 'T4.2', 'T4.3', 'T4.4', 'T4.5', 'T4.6', 'T4.7',
    'T5', 'T5.1'
  ]),

   /** the tag name to be used */
   tagName: oneOf(['span', 'div'])
};

UIText.displayName = 'UIText';
