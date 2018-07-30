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
  disableAmPm?: boolean;
  width?: string;
  style?: object;
}

const defaultProps = {
  size: Size.medium,
  disableAmPm: false,
  error: false,
  style: {},
  tickerUpIcon: <FormFieldSpinnerUp/>,
  tickerDownIcon: <FormFieldSpinnerDown/>,
  value: CoreTimePicker.defaultProps.value
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
  static displayName = 'TimePickerBackoffice';
  static defaultProps = defaultProps;
  coreTimePickerRef;

  static propTypes = {
    ...omit(CoreTimePicker.propTypes, 'useAmPm'),
    size: propTypes.oneOf(Object.keys(Size)),
    disableAmPm: propTypes.bool,
    width: propTypes.string,
    style: propTypes.object
  };

  focus() {
    this.coreTimePickerRef.focus();
  }

  blur() {
    this.coreTimePickerRef.blur();
  }

  render() {
    const {disableAmPm, size, error, width, disabled, style: inlineStyle} = this.props;
    const styleObj = width ? {...inlineStyle, width} : inlineStyle;
    const coreTimePickerProps = {
      ...omit(this.props, 'size', 'disableAmPm', 'width', 'style'),
      useAmPm: disableAmPm ? AmPmOptions.None : AmPmOptions.Uppercase,
    };

    return (
      <CoreTimePicker
        ref={ref => this.coreTimePickerRef = ref}
        {...coreTimePickerProps}
        {...style('root', { size, error, disabled, inputWidth: getInputWidthState(width, size, disableAmPm) }, coreTimePickerProps)}
        style={styleObj}
      />
    );
  }
}
