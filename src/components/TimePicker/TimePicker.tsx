import * as React from 'react';
import * as propTypes from 'prop-types';
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
import {Size} from './constants';

export interface TimePickerProps {
    size?: Size,
    value: Date;
    disableAmPm?: boolean;
}

const defaultProps = {
    size: Size.medium,
    value: new Date(),
    disableAmPm: false,
    error: false,
    tickerUpIcon: <FormFieldSpinnerUp/>,
    tickerDownIcon: <FormFieldSpinnerDown/>,
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/*
    TimePicker changes the type of 'value' prop from string to Date so here is a workaround
    to make it work with 'withStylable'.
    TODO: remove the workaround when CoreTimePicker.values is changed to type 'Date'
 */
const StyledTimePicker: React.SFC<CoreTimePickerProps & Omit<TimePickerProps, 'value'>> = withStylable<CoreTimePickerProps, TimePickerProps>(
    CoreTimePicker,
    style,
    ({error, size, disabled, width, disableAmPm}) => ({
        error,
        size,
        disabled,
        inputWidth: getInputWidthState(width, size, disableAmPm)
    }),
    defaultProps
) as any;

function getInputWidthState(timePickerWidth: string | undefined, size: Size, disableAmPm: boolean): string {
    if (timePickerWidth) {
        return '';
    }

    const states: string[] = [size];
    if (disableAmPm) {
        states.push('ampm');
    }

    return states.join('_');
}

export class TimePicker extends React.PureComponent<TimePickerProps & Omit<CoreTimePickerProps, 'useAmPm'>> {
    static defaultProps = defaultProps;
    static propTypes = {
        ...omit(CoreTimePicker.propTypes, 'useAmPm'),
        size: propTypes.oneOf(['large', 'medium', 'small']),
        value: propTypes.instanceOf(Date).isRequired,
        disableAmPm: propTypes.bool,
        disabled: propTypes.bool,
    };
    static displayName = 'TimePicker';

    render() {
        const {value, disableAmPm} = this.props;
        const desiredProps = omit(this.props, 'size', 'styles', 'value', 'disableAmPm');

        return (
            <StyledTimePicker
                {...desiredProps}
                value={format(value, 'HH:mm')}
                useAmPm={disableAmPm ? AmPmOptions.None : AmPmOptions.Uppercase}
            />
        );
    }
}
