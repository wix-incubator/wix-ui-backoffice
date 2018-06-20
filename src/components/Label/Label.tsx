import * as React from 'react';
import {Label as CoreLabel, LabelProps as CoreLabelProps} from 'wix-ui-core/Label';
import style from './Label.st.css';
import {withStylable} from 'wix-ui-core/withStylable';
import {oneOf} from 'prop-types';
import {Size, SIZES} from './constants';

export interface LabelProps {
  /** size of the label */
  size?: Size;
}

const defaultProps: LabelProps = {
  size: SIZES.medium
};

export const Label = withStylable<CoreLabelProps, LabelProps>(
  CoreLabel,
  style,
  ({size}) => ({size}),
  defaultProps
);

Label.displayName = 'Label';

Label.propTypes = {
  ...CoreLabel.propTypes,
  /** size of the label */
  size: oneOf(Object.keys(SIZES))
};
