import * as React from 'react';
import {
  LinearProgressBar as CoreLinearProgressBar,
  LinearProgressBarProps as CoreLinearProgressBarProps,
} from 'wix-ui-core/linear-progress-bar';
import ToggleOn from 'wix-ui-icons-common/system/ToggleOn';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import { Loadable } from 'wix-ui-core/dist/es/src/components/loadable';
import style from './LinearProgressBar.st.css';
import { Omit } from '../../types/common';
import { TooltipProps } from '../Tooltip';
import { TooltipProps as CoreTooltipProps } from 'wix-ui-core/dist/src/components/tooltip';

class LoadableTooltip extends Loadable<{
  Tooltip: React.ComponentType<CoreTooltipProps & TooltipProps>
}> {}

export interface LinearProgressBarProps
  extends Omit<CoreLinearProgressBarProps, 'successIcon' | 'errorIcon'> {
  /** message to display when an error happens */
  errorMessage?: string;
  /** use light theme instead of dark theme */
  light?: boolean;
  /** load Tooltip async using dynamic import */
  shouldLoadAsync?: boolean;
}

export const LinearProgressBar: React.SFC<LinearProgressBarProps> = (
  props: LinearProgressBarProps,
) => {
  const { errorMessage, light, error, shouldLoadAsync, ...otherProps } = props;

  return (
    <CoreLinearProgressBar
      {...style('root', { light }, props)}
      {...otherProps}
      error={error}
      successIcon={<ToggleOn />}
      errorIcon={
        <LoadableTooltip
          loader={{
            Tooltip: () => shouldLoadAsync ? import('../Tooltip') : require('../Tooltip'),
          }}
          defaultComponent={<FormFieldError data-hook="error-icon" />}
          namedExports={{
            Tooltip: 'Tooltip',
          }}
          shouldLoadComponent={!!error}
        >
          {({ Tooltip }) => {
            return (
              <Tooltip
                data-hook="linear-progressbar-tooltip"
                placement="top"
                content={errorMessage}
              >
                <FormFieldError data-hook="error-icon" />
              </Tooltip>
            );
          }}
        </LoadableTooltip>
      }
    />
  );
};

LinearProgressBar.displayName = 'LinearProgressBar';

LinearProgressBar.defaultProps = {
  shouldLoadAsync: false,
};
