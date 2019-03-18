import * as React from 'react';
import {
  CircularProgressBar as CoreCircularProgressBar,
  CircularProgressBarProps as CoreCircularProgressBarProps,
} from 'wix-ui-core/dist/src/components/circular-progress-bar';
import CircleLoaderCheck from 'wix-ui-icons-common/system/CircleLoaderCheck';
import CircleLoaderCheckSmall from 'wix-ui-icons-common/system/CircleLoaderCheckSmall';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import FormFieldErrorSmall from 'wix-ui-icons-common/system/FormFieldErrorSmall';
import style from './CircularProgressBar.st.css';
import { Size, sizesMap } from './constants';
import { enumValues } from '../../utils';
import { Omit } from '../../types/common';

export interface CircularProgressBarProps
  extends Omit<CoreCircularProgressBarProps, 'successIcon' | 'errorIcon'> {
  /** message to display when an error happens */
  errorMessage?: string;
  /** use light theme instead of dark theme */
  light?: boolean;
  /** size of the bar */
  size?: Size;
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

export interface CircularProgressBarState {
  /** Tooltip component loaded via lazy loading */
  Tooltip?: React.FunctionComponent | React.Component;
}

export class CircularProgressBar extends React.Component<
  CircularProgressBarProps,
  CircularProgressBarState
> {
  displayName = 'CircularProgressBar';

  static defaultProps = {
    size: Size.medium,
  };

  state = {
    Tooltip: null,
  };

  componentDidMount() {
    if (this.props.error) {
      this.loadTooltip();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.error && this.props.error && !this.state.Tooltip) {
      this.loadTooltip();
    }
  }

  async loadTooltip() {
    const { Tooltip } = await import('../Tooltip');
    this.setState({ Tooltip });
  }

  render() {
    const { errorMessage, light, size, ...otherProps } = this.props;
    const { Tooltip } = this.state;

    const ProgressBar = (
      <CoreCircularProgressBar
        {...style('progressBar', { light, size }, this.props)}
        {...otherProps}
        data-hook="circular-progress-bar"
        size={sizesMap[size]}
        successIcon={sizeToSuccessIcon[size]}
        errorIcon={sizeToErrorIcon[size]}
      />
    );

    return (
      <div {...style('root', {}, this.props)}>
        {this.props.error && errorMessage && Tooltip ? (
          <Tooltip
            data-hook="circular-progressbar-tooltip"
            placement="top"
            content={errorMessage}
          >
            {ProgressBar}
          </Tooltip>
        ) : (
          ProgressBar
        )}
      </div>
    );
  }
}
