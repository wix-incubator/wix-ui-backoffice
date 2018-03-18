import * as React from 'react';
import { TimePicker as CoreTimePicker, TimePickerProps as CoreTimePickerProps } from 'wix-ui-core/TimePicker';
import { ThemedComponent } from 'wix-ui-theme';
import { oneOf, bool, Requireable } from 'prop-types';
import style from './TimePicker.st.css';

const ArrowUp = props => (
  <svg width="10" height="5" viewBox="0 0 10 4" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4L5 0 1 4" fill="none" fillRule="evenodd">
    </path>
  </svg>
);

const ArrowDown = props => (
  <svg width="10" height="5" viewBox="0 0 10 4" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0L5 4 1 0" fill="none" fillRule="evenodd">
    </path>
  </svg>
);

export interface TimePickerProps extends CoreTimePickerProps {
  /** Disable the component */
  disabled?: boolean;

  /** Show dashes instead of time when component is disabled */
  dashesWhenDisabled?: boolean;

  /** Use 24-hour format instead of 12-hour */
  disableAmPm?: boolean;
}

export class TimePicker extends React.PureComponent<TimePickerProps>  {
  timePickerRef: any;

  static propTypes = {
    ...CoreTimePicker.propTypes,

    /** Disable the component */
    disabled: bool,

    /** Show dashes instead of time when component is disabled */
    dashesWhenDisabled: bool,

    /** Use 24-hour format instead of 12-hour */
    disableAmPm: bool,
  };

  static defaultProps: Partial<TimePickerProps> = {
    disableAmPm: true
  };

  render() {
    const {
      disabled,
      dashesWhenDisabled,
      disableAmPm,
      value,
      ...coreProps
    } = this.props;
    const actualValue = (disabled && dashesWhenDisabled) ? null : value;

    return (
      <div className={style.root}>
        
        <CoreTimePicker
          {...coreProps}
          {...style('coreTimePicker', {}, {}) }
          ref={ref => this.timePickerRef = ref}
          disabled={disabled}
          value={actualValue}
          useAmPm={!disableAmPm}
        />

        <div className={style.tickerGroup}>
          <button onClick={() => this.timePickerRef.increment()} {...style('ticker', {top: true}, {})}>
            <ArrowUp/>
          </button>
          <button onClick={() => this.timePickerRef.decrement()} {...style('ticker', {bottom: true}, {})}>
            <ArrowDown/>
          </button>
        </div>

      </div>
    );
  }
}
