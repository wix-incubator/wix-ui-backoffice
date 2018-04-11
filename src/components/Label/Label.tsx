import * as React from 'react';
import {Label as CoreLabel, LabelProps as CoreLabelProps} from 'wix-ui-core/Label';
import style from './Label.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

export type Appearance = 'medium' | 'small';

export interface LabelProps {
  /** typography of the label */
  appearance?: Appearance;
  children?: string;
  for?: string;
  id?: string;
}

const defaultProps: LabelProps = {
  appearance: 'medium',
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
