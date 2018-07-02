import * as React from 'react';
import {bool, oneOf, ValidationMap} from 'prop-types';
import omit = require('lodash/omit');
import {TimePicker as CoreTimePicker, TimePickerProps as CoreTimePickerProps, TimePickerConstants} from 'wix-ui-core/TimePicker';
import {withStylable} from 'wix-ui-core/withStylable';
import {FormFieldSpinnerUp, FormFieldSpinnerDown} from 'wix-ui-icons-common/system';
import {Omit} from '../../types/common';
import style from './TimePicker.st.css';

const excludePropsArray = ['tickerUpIcon', 'tickerDownIcon'];
export type excludeProps = 'tickerUpIcon' | 'tickerDownIcon';

export interface TimePickerProps extends Omit<CoreTimePickerProps, excludeProps> {
  size?: 'large' | 'medium' | 'small';
  disableAmPm?: boolean;
  disabled?: boolean;
  dashesWhenDisabled?: boolean;
}

export const TimePicker: React.SFC<TimePickerProps> = props => {
  const {disableAmPm, disabled, dashesWhenDisabled, value, size, ...rest} = props;
  const useAmPm = disableAmPm ? TimePickerConstants.AmPmOptions.None : TimePickerConstants.AmPmOptions.Uppercase;

  const valueToDisplay = disabled && dashesWhenDisabled ? TimePickerConstants.NULL_TIME : value;

  return (
    <CoreTimePicker
      {...rest}
      {...style('root', {size}, rest)}
      useAmPm={useAmPm}
      disabled={disabled}
      value={valueToDisplay}
      tickerUpIcon={<FormFieldSpinnerUp size={11}/>}
      tickerDownIcon={<FormFieldSpinnerDown size={11}/>}
    />
  );
};

TimePicker.displayName = 'TimePicker';

TimePicker.propTypes = {
  ...omit<ValidationMap<TimePickerProps>>(CoreTimePicker.propTypes, excludePropsArray),
  size: oneOf(['large', 'medium', 'small']),
  disableAmPm: bool,
  disabled: bool,
  dashesWhenDisabled: bool,
};

TimePicker.defaultProps = {
  size: 'medium',
}
