import * as React from 'react';
import {
  CircularProgressBar as CoreCircularProgressBar,
  CircularProgressBarProps as CoreCircularProgressBarProps
  } from 'wix-ui-core/CircularProgressBar';
import CircleLoaderCheck from 'wix-ui-icons-common/system/CircleLoaderCheck';
import CircleLoaderCheckSmall from 'wix-ui-icons-common/system/CircleLoaderCheckSmall';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import FormFieldErrorSmall from 'wix-ui-icons-common/system/FormFieldErrorSmall';
import style from './CircularProgressBar.st.css';
import {Tooltip} from '../Tooltip';
import * as PropTypes from 'prop-types';
import {Size, sizesMap} from './constants';
import {enumValues} from '../../utils';

export interface CircularProgressBarProps extends CoreCircularProgressBarProps {
  /** message to display when an error happens */
  errorMessage?: string;
  /** use light theme instead of dark theme */
  light?: boolean;
  /** size of the bar */
  size?: Size;
}

const sizeToSuccessIcon = {
  'small': <CircleLoaderCheckSmall/>,
  'medium': <CircleLoaderCheck/>,
  'large': <CircleLoaderCheck/>
};

const sizeToErrorIcon = {
  'small': <FormFieldErrorSmall/>,
  'medium': <FormFieldError/>,
  'large': <FormFieldError/>
};

export const CircularProgressBar: React.SFC<CircularProgressBarProps> = (props: CircularProgressBarProps) => {

  const { errorMessage, light, size, ...otherProps } = props;

  return (
    <CoreCircularProgressBar
      data-hook="circular-progress-bar"
      {...style('root', {light, size})}
      {...otherProps}
      size={sizesMap[size]}
      successIcon={sizeToSuccessIcon[size]}
      errorIcon={(
        <Tooltip data-hook="tooltip" placement="top" content={errorMessage}>
          {sizeToErrorIcon[size]}
        </Tooltip>)}
    />
  )
}

CircularProgressBar.displayName = 'CircularProgressBar';

CircularProgressBar.propTypes = {
  ...CoreCircularProgressBar.propTypes,
  errorMessage: PropTypes.string,
  light: PropTypes.bool,
  size: PropTypes.oneOf(enumValues(Size)),
};

CircularProgressBar.defaultProps = {
  size: Size.medium,
}
