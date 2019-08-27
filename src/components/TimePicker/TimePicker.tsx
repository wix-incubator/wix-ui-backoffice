import * as React from 'react';
import { Omit } from '../../types/common';

import FormFieldSpinnerUp from 'wix-ui-icons-common/system/FormFieldSpinnerUp';
import FormFieldSpinnerDown from 'wix-ui-icons-common/system/FormFieldSpinnerDown';

import {
  TimePicker as CoreTimePicker,
  TimePickerProps as CoreTimePickerProps
} from 'wix-ui-core/dist/standalone/src/components/time-picker';
import { AmPmOptions } from 'wix-ui-core/dist/standalone/src/components/time-picker/constants';
import style from './TimePicker.st.css';
import { Size } from './constants';

export interface TimePickerProps extends Omit<CoreTimePickerProps, 'useAmPm'> {
  size?: Size;
  disableAmPm?: boolean;
  width?: string;
  style?: object;
}

const defaultProps = {
  size: Size.medium,
  disableAmPm: false,
  error: false,
  style: {},
  tickerUpIcon: <FormFieldSpinnerUp />,
  tickerDownIcon: <FormFieldSpinnerDown />,
  value: CoreTimePicker.defaultProps.value
};

function getInputWidthState(
  timePickerWidth: string | undefined,
  size: Size,
  disableAmPm: boolean
): string {
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

  focus() {
    this.coreTimePickerRef.focus();
  }

  blur() {
    this.coreTimePickerRef.blur();
  }

  render() {
    const {
      disableAmPm,
      size,
      error,
      width,
      disabled,
      style: inlineStyle
    } = this.props;
    const styleObj = width ? { ...inlineStyle, width } : inlineStyle;
    const {
      size: sizeProp,
      disableAmPm: disableAmPmProp,
      width: widthProp,
      style: styleProp,
      ...otherProps
    } = this.props;
    const coreTimePickerProps = {
      ...otherProps,
      useAmPm: disableAmPm ? AmPmOptions.None : AmPmOptions.Uppercase
    };

    return (
      <CoreTimePicker
        ref={ref => (this.coreTimePickerRef = ref)}
        {...coreTimePickerProps}
        {...style(
          'root',
          {
            size,
            error,
            disabled,
            inputWidth: getInputWidthState(width, size, disableAmPm)
          },
          coreTimePickerProps
        )}
        style={styleObj}
      />
    );
  }
}
