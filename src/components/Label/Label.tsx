import * as React from 'react';
import {
  Label as CoreLabel,
  LabelProps as CoreLabelProps
} from 'wix-ui-core/dist/src/components/deprecated/label';
import style from './Label.st.css';
import { Size, SIZES } from './constants';

export interface LabelProps {
  /** size of the label */
  size?: Size;
}

export const Label: React.SFC<CoreLabelProps & LabelProps> = (props: CoreLabelProps & LabelProps) => {
  const {size, className,...rest} = props;
  return <CoreLabel {...style('root', {size}, props)} data-size={size} {...rest}/>
};

Label.defaultProps = {
  size: SIZES.medium
};

Label.displayName = 'Label';
