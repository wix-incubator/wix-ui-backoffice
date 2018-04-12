import * as React from 'react';
import {Label as CoreLabel, LabelProps as CoreLabelProps} from 'wix-ui-core/Label';
import style from './Label.st.css';
import {withStylable} from 'wix-ui-core/withStylable';
import {oneOf, string} from 'prop-types';

export type Size = 'medium' | 'small';

export interface LabelProps {
  /** typography of the label */
  size?: Size;
}

const defaultProps: LabelProps = {
  size: 'medium'
};

export const Label = withStylable<CoreLabelProps, LabelProps>(
  CoreLabel,
  style,
  ({size}) => ({size}),
  defaultProps
);

Label.propTypes = CoreLabel.propTypes;
