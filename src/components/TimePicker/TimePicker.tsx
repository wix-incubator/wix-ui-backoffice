import * as React from 'react';
import * as propTypes from 'prop-types';
import omit = require('lodash/omit');
import {Omit} from '../../types/common';

import FormFieldSpinnerUp from 'wix-ui-icons-common/system/FormFieldSpinnerUp';
import FormFieldSpinnerDown from 'wix-ui-icons-common/system/FormFieldSpinnerDown';

import {
  TimePicker as CoreTimePicker,
  TimePickerProps as CoreTimePickerProps,
} from 'wix-ui-core/TimePicker';
import {AmPmOptions} from 'wix-ui-core/dist/src/components/TimePicker/constants';
import style from './TimePicker.st.css';
import {Size} from './constants';

export interface TimePickerProps extends Omit<CoreTimePickerProps, 'useAmPm'> {
  size?: Size,
  value?: string;
  disableAmPm?: boolean;
  width?: string;
}

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
  coreTimePickerRef;

  static propTypes = {
    ...omit(CoreTimePicker.propTypes, 'useAmPm'),
    size: propTypes.oneOf(Object.keys(Size)),
    value: propTypes.string,
    disableAmPm: propTypes.bool,
    width: propTypes.string
  };

  focus() {
    this.coreTimePickerRef.focus();
  }

  blur() {
    this.coreTimePickerRef.blur();
  }

  render() {
    const {value, disableAmPm, size, error, width, disabled} = this.props;
    const coreTimePickerProps = {
      ...omit(this.props, 'size', 'value', 'disableAmPm', 'width'),
      value,
      useAmPm: disableAmPm ? AmPmOptions.None : AmPmOptions.Uppercase,
    };

    return (
      <CoreTimePicker
        ref={ref => this.coreTimePickerRef = ref}
        {...coreTimePickerProps}
        {...style('root', { size, error, disabled, inputWidth: getInputWidthState(width, size, disableAmPm) }, coreTimePickerProps)}
        style={{width}}
      />
    );
  }
}
