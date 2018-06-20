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

export interface LinearProgressBarProps extends CoreLinearProgressBarProps {
  /** message to display when an error happens */
  errorMessage?: string;
  /** use light theme instead of dark theme */
  light?: boolean;
}

export const LinearProgressBar: React.SFC<LinearProgressBarProps> = (props: LinearProgressBarProps) => {

  const { errorMessage, light, ...otherProps } = props;

  return (
    <CoreLinearProgressBar
      data-hook="progress-bar"
      {...style('root', { light })}
      {...otherProps}
      successIcon={<ToggleOn />}
      errorIcon={(
        <Tooltip data-hook="tooltip" placement="top" content={errorMessage}>
          <FormFieldError />
        </Tooltip>)}
    />
  )
}

LinearProgressBar.displayName = 'LinearProgressBar';

LinearProgressBar.propTypes = {
  ...CoreLinearProgressBar.propTypes,
  errorMessage: PropTypes.string,
  light: PropTypes.bool,
};
