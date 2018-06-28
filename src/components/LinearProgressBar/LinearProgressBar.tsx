import * as React from 'react';
import {
  LinearProgressBar as CoreLinearProgressBar,
  LinearProgressBarProps as CoreLinearProgressBarProps
  } from 'wix-ui-core/LinearProgressBar';
import ToggleOn from 'wix-ui-icons-common/system/ToggleOn';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import style from './LinearProgressBar.st.css';
import { Tooltip } from '../Tooltip';
import * as PropTypes from 'prop-types';
import omit = require('lodash/omit');
import {Omit} from '../../types/common';

export interface LinearProgressBarProps extends Omit<CoreLinearProgressBarProps, 'successIcon' | 'errorIcon'> {
  /** message to display when an error happens */
  errorMessage?: string;
  /** use light theme instead of dark theme */
  light?: boolean;
}

export const LinearProgressBar: React.SFC<LinearProgressBarProps> = (props: LinearProgressBarProps) => {

  const { errorMessage, light, ...otherProps } = props;

  return (
    <CoreLinearProgressBar
      {...style('root', {light}, props)}
      {...otherProps}
      successIcon={<ToggleOn />}
      errorIcon={(
        <Tooltip data-hook="linear-progressbar-tooltip" placement="top" content={errorMessage}>
          <FormFieldError data-hook="error-icon"/>
        </Tooltip>
      )}
    />
  )
}

LinearProgressBar.displayName = 'LinearProgressBar';

LinearProgressBar.propTypes = {
  ...omit<PropTypes.ValidationMap<LinearProgressBarProps>>(CoreLinearProgressBar.propTypes, ['successIcon', 'errorIcon']),
  errorMessage: PropTypes.string,
  light: PropTypes.bool,
};
