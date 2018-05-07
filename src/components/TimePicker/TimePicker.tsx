import * as React from 'react';
import {TimePicker as CoreTimePicker, TimePickerProps as CoreTimePickerProps} from 'wix-ui-core/TimePicker';
import {oneOf, bool, Requireable} from 'prop-types';
import style from './TimePicker.st.css';

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
      <CoreTimePicker
        {...coreProps}
        {...style('root', {}, this.props)}
        ref={ref => this.timePickerRef = ref}
        disabled={disabled}
        value={actualValue}
        useAmPm={!disableAmPm}
      />
    );
  }
}
