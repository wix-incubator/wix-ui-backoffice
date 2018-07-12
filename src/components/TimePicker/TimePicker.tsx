import * as React from 'react';
import * as propTypes from 'prop-types';
import omit = require('lodash/omit');

import FormFieldSpinnerUp from 'wix-ui-icons-common/system/FormFieldSpinnerUp';
import FormFieldSpinnerDown from 'wix-ui-icons-common/system/FormFieldSpinnerDown';

import {
  TimePicker as CoreTimePicker,
  TimePickerProps as CoreTimePickerProps,
} from 'wix-ui-core/TimePicker';
import {AmPmOptions} from 'wix-ui-core/dist/src/components/TimePicker/constants';
import style from './TimePicker.st.css';
import {Size} from './constants';

export interface TimePickerPropsExtended {
  size?: Size,
  value?: String;
  disableAmPm?: boolean;
  width?: string;
}

/*
  'CoreTimePickerProps.useAmPm' prop must not be included in TimePickerProps.
  Use type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> to omit it from CoreTimePickerProps.
  TODO: after typescript is updated to ^2.9 omit 'useAmPm' prop
 */
export type TimePickerProps = CoreTimePickerProps & TimePickerPropsExtended;

const defaultProps = {
  size: Size.medium,
  disableAmPm: false,
  error: false,
  tickerUpIcon: <FormFieldSpinnerUp/>,
  tickerDownIcon: <FormFieldSpinnerDown/>,
};

function getInputWidthState(timePickerWidth: string | undefined, size: Size, disableAmPm: boolean): string {
  if (timePickerWidth) {
    return '';
  }

  const states: string[] = [size];
  if (!disableAmPm) {
    states.push('ampm');
  }

  return states.join('_');
}



export class TimePicker extends React.PureComponent<TimePickerProps> {
  static displayName = 'TimePicker';
  static defaultProps = defaultProps;

  static propTypes = {
    ...omit(CoreTimePicker.propTypes, 'useAmPm'),
    size: propTypes.oneOf(Object.keys(Size)),
    value: propTypes.string,
    disableAmPm: propTypes.bool,
    width: propTypes.string
  };

  render() {
    const {value, disableAmPm, size, error, width} = this.props;
    const coreTimePickerProps = {
      ...omit(this.props, 'size', 'value', 'disableAmPm', 'width'),
      value,
      useAmPm: disableAmPm ? AmPmOptions.None : AmPmOptions.Uppercase,
    };

    return (
      <CoreTimePicker
        {...coreTimePickerProps}
        {...style('root', { size, error, inputWidth: getInputWidthState(width, size, disableAmPm) }, coreTimePickerProps)}
        style={{width}}
      />
    );
  }
}
