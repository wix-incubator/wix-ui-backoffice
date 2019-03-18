import * as React from 'react';
import {
  LinearProgressBar as CoreLinearProgressBar,
  LinearProgressBarProps as CoreLinearProgressBarProps,
} from 'wix-ui-core/dist/src/components/linear-progress-bar';
import ToggleOn from 'wix-ui-icons-common/system/ToggleOn';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import style from './LinearProgressBar.st.css';
import { Omit } from '../../types/common';

export interface LinearProgressBarProps
  extends Omit<CoreLinearProgressBarProps, 'successIcon' | 'errorIcon'> {
  /** message to display when an error happens */
  errorMessage?: string;
  /** use light theme instead of dark theme */
  light?: boolean;
}

export interface LinearProgressBarState {
  /** Tooltip component loaded via lazy loading */
  Tooltip?: React.FunctionComponent | React.Component;
}

export class LinearProgressBar extends React.Component<
  LinearProgressBarProps,
  LinearProgressBarState
> {
  static displayName = 'LinearProgressBar';

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
    const { errorMessage, light, error, ...otherProps } = this.props;
    const { Tooltip } = this.state;

    return (
      <CoreLinearProgressBar
        {...style('root', { light }, this.props)}
        {...otherProps}
        error={error}
        successIcon={<ToggleOn />}
        errorIcon={
          Tooltip ? (
            <Tooltip
              data-hook="linear-progressbar-tooltip"
              placement="top"
              content={errorMessage}
            >
              <FormFieldError data-hook="error-icon" />
            </Tooltip>
          ) : (
            <FormFieldError data-hook="error-icon" />
          )
        }
      />
    );
  }
}
