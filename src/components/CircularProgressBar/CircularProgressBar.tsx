import * as React from 'react';
import {
  CircularProgressBar as CoreCircularProgressBar,
  CircularProgressBarProps as CoreCircularProgressBarProps,
} from 'wix-ui-core/circular-progress-bar';
import CircleLoaderCheck from 'wix-ui-icons-common/system/CircleLoaderCheck';
import CircleLoaderCheckSmall from 'wix-ui-icons-common/system/CircleLoaderCheckSmall';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import FormFieldErrorSmall from 'wix-ui-icons-common/system/FormFieldErrorSmall';
import { Loadable } from 'wix-ui-core/dist/es/src/components/loadable';
import style from './CircularProgressBar.st.css';
import { Size, sizesMap } from './constants';
import { enumValues } from '../../utils';
import { Omit } from '../../types/common';
import { TooltipProps } from '../Tooltip';
import { TooltipProps as CoreTooltipProps } from 'wix-ui-core/dist/src/components/tooltip';

class LoadableTooltip extends Loadable<{
  Tooltip: React.ComponentType<CoreTooltipProps & TooltipProps>
}> {}

export interface CircularProgressBarProps
  extends Omit<CoreCircularProgressBarProps, 'successIcon' | 'errorIcon'> {
  /** message to display when an error happens */
  errorMessage?: string;
  /** use light theme instead of dark theme */
  light?: boolean;
  /** size of the bar */
  size?: Size;
  /** load Tooltip async using dynamic import */
  shouldLoadAsync?: boolean;
}

const sizeToSuccessIcon = {
  [Size.small]: <CircleLoaderCheckSmall />,
  [Size.medium]: <CircleLoaderCheck />,
  [Size.large]: <CircleLoaderCheck />,
};

const sizeToErrorIcon = {
  [Size.small]: <FormFieldErrorSmall />,
  [Size.medium]: <FormFieldError />,
  [Size.large]: <FormFieldError />,
};

export const CircularProgressBar: React.SFC<CircularProgressBarProps> = (
  props: CircularProgressBarProps,
) => {
  const { errorMessage, light, size, error, ...otherProps } = props;

  const ProgressBar = (
    <CoreCircularProgressBar
      {...style('progressBar', { light, size }, props)}
      {...otherProps}
      data-hook="circular-progress-bar"
      size={sizesMap[size]}
      successIcon={sizeToSuccessIcon[size]}
      errorIcon={sizeToErrorIcon[size]}
      error={error}
    />
  );

  return (
    <div {...style('root', {}, props)}>
      <LoadableTooltip
        loader={{
          Tooltip: () => props.shouldLoadAsync ? import('../Tooltip') : require('../Tooltip')}
        }
        defaultComponent={ProgressBar}
        namedExports={{
          Tooltip: 'Tooltip',
        }}
        shouldLoadComponent={error && !!errorMessage}
      >
        {({ Tooltip }) => {
          return (
            <Tooltip
              data-hook="circular-progressbar-tooltip"
              content={errorMessage}
              placement="top"
            >
              {ProgressBar}
            </Tooltip>
          );
        }}
      </LoadableTooltip>
    </div>
  );
};

CircularProgressBar.displayName = 'CircularProgressBar';

CircularProgressBar.defaultProps = {
  size: Size.medium,
  shouldLoadAsync: false,
};
