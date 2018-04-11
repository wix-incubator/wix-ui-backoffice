import * as React from 'react';
import {Label as CoreLabel, LabelProps as CoreLabelProps} from 'wix-ui-core/Label';
import style from './Label.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

export type Appearance = 'T1.1' | 'T3.1';

export interface LabelProps {
  /** typography of the label */
  appearance?: Appearance;
}

const defaultProps: LabelProps = {appearance: 'T1.1'};

export const Label = withStylable<CoreLabelProps, LabelProps>(
  CoreLabel,
  style,
  ({appearance}) => ({appearance}),
  defaultProps
);
