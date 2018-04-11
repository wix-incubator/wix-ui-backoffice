import * as React from 'react';
import {Label as CoreLabel, LabelProps as CoreLabelProps} from 'wix-ui-core/Label';
import style from './Label.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

export type Size = 'medium' | 'small';

export interface LabelProps {
  /** typography of the label */
  size?: Size;
  children?: string;
  for?: string;
  id?: string;
}

const defaultProps: LabelProps = {
  size: 'medium',
  children: '',
  for: '',
  id: ''
};

export const Label = withStylable<CoreLabelProps, LabelProps>(
  CoreLabel,
  style,
  ({appearance}) => ({appearance}),
  defaultProps
);
