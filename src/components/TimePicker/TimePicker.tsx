import * as React from 'react';
import omit = require('lodash/omit');
import {format} from 'date-fns';
import FormFieldSpinnerUp from 'wix-ui-icons-common/system/FormFieldSpinnerUp';
import FormFieldSpinnerDown from 'wix-ui-icons-common/system/FormFieldSpinnerDown';
import {withStylable} from 'wix-ui-core/withStylable';

import {
    TimePicker as CoreTimePicker,
    TimePickerProps as CoreTimePickerProps,
    AmPmOptions
} from 'wix-ui-core/TimePicker';
import style from './TimePicker.st.css';

export interface TimePickerProps {
    size?: 'large' | 'medium' | 'small',
    defaultValue: Date;
    disableAmPm: boolean;
    error?: boolean;
    disabled?: boolean;
}

const defaultProps = {
    size: 'medium',
    defaultValue: new Date(),
    disableAmPm: false,
    error: false,
    tickerUpIcon: <FormFieldSpinnerUp />,
    tickerDownIcon: <FormFieldSpinnerDown />,
};

const StyledTimePicker = withStylable<CoreTimePickerProps, TimePickerProps>(
    CoreTimePicker,
    style,
    ({error, size, disabled}) => ({error, size, disabled}),
    defaultProps
);

export class TimePicker extends React.PureComponent<TimePickerProps & CoreTimePickerProps> {
    static defaultProps = defaultProps;

    render() {
        const { defaultValue, disableAmPm } = this.props;
        const desiredProps = omit(this.props, 'styles', 'defaultValue', 'disableAmPm');

        return (
            <StyledTimePicker
                {...desiredProps}
                value={format(defaultValue, 'HH:mm')}
                useAmPm={disableAmPm ? AmPmOptions.None : AmPmOptions.Uppercase}
            />
        );
    }
}
