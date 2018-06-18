import * as React from 'react';
import * as PropTypes from 'prop-types';
import omit = require('lodash/omit');
import {format} from 'date-fns';

import {
    TimePicker as CoreTimePicker,
    TimePickerProps as CoreTimePickerProps,
    AmPmOptions
} from 'wix-ui-core/TimePicker';
import style from './TimePicker.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

export interface TimePickerProps {
    defaultValue: Date;
    disableAmPm: boolean;
}

const defaultProps = {
    defaultValue: new Date(),
    disableAmPm: false,
};

const StyledTimePicker = withStylable<CoreTimePickerProps, TimePickerProps>(
    CoreTimePicker,
    style,
    ({size, skin}) => ({size, skin}),
    defaultProps
);

const {styles, ...legalCorePropTypes} = CoreTimePicker.propTypes;

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
