import * as React from 'react';
import {format} from 'date-fns';

import {timePickerDriverFactory} from './TimePicker.driver';
import {TimePicker} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {timePickerTestkitFactory} from '../../testkit';
import {timePickerTestkitFactory as enzymeTimePickerTestkitFactory} from '../../testkit/enzyme';

describe('TimePicker', () => {
    const createDriver = createDriverFactory(timePickerDriverFactory);
    const format12Hours = date => format(date, 'hh:mm');
    const format24Hours = date => format(date, 'HH:mm');

    describe('time display', () => {
        const defaultValue = new Date();
        const defaultValueWithAM = new Date('2014-04-25T01:00:00.00Z');
        const defaultValueWithPM = new Date('2014-04-25T13:00:00.00Z');

        it(`should render the given default value`, () => {
            const props = {
                defaultValue
            };
            const driver = createDriver(<TimePicker {...props}/>);
            expect(driver.getValue()).toBe(format12Hours(props.defaultValue));
        });

        it(`should render the current time if no default value were passed`, () => {
            const driver = createDriver(<TimePicker/>);
            const currentTime = defaultValue;
            const currentTimeHours = format12Hours(currentTime).substring(0, 2);
            const currentTimeMinutes = format12Hours(currentTime).substring(3, 5);
            const inputTimeHours = driver.getValue().substring(0, 2);
            const inputTimeMinutes = driver.getValue().substring(3, 5);
            const minutesDiff = Math.abs((parseInt(inputTimeMinutes) - parseInt(currentTimeMinutes)));
            expect(inputTimeHours).toBe(currentTimeHours);
            expect(minutesDiff <= 1).toBeTruthy(); //ignore diff of one minute (minute can be change from the time the object was created to current time)
        });

        it(`should allow rendering time in 24 hours mode`, () => {
            const props = {
                defaultValue,
                disableAmPm: true
            };
            const driver = createDriver(<TimePicker {...props}/>);
            expect(driver.getValue()).toBe(format24Hours(props.defaultValue));
        });

        it(`should display am/pm indicator when in 12 hours mode`, () => {
            const props = {
                defaultValue,
                disableAmPm: false
            };
            const driver = createDriver(<TimePicker {...props}/>);
            expect(driver.isAmPmIndicatorExist()).toBeTruthy();
        });

        it(`should display AM indicator when in 12 hours mode and the time displayed is AM`, () => {
            const props = {
                defaultValue: defaultValueWithAM,
                disableAmPm: false
            };
            const driver = createDriver(<TimePicker {...props}/>);
            expect(driver.getAmPmIndicatorText()).toBe('am');
        });

        it(`should display AM indicator when in 12 hours mode and the time displayed is PM`, () => {
            const props = {
                defaultValue: defaultValueWithPM,
                disableAmPm: false
            };
            const driver = createDriver(<TimePicker {...props}/>);
            expect(driver.getAmPmIndicatorText()).toBe('pm');
        });
    });

    describe('block props', () => {
        it('should not pass inline styles prop', () => {
            const styles = {root: {color: 'green'}};
            const wrapper = createDriver(<TimePicker styles={styles} size="small"/>);
            expect(wrapper.getRootStyles().color).not.toBe('green');
        });
    });

    describe('testkit', () => {
        it('should exist', () => {
            expect(isTestkitExists(<TimePicker/>, timePickerTestkitFactory)).toBe(true);
        });
    });

    describe('enzyme testkit', () => {
        it('should exist', () => {
            expect(isEnzymeTestkitExists(<TimePicker/>, enzymeTimePickerTestkitFactory, mount)).toBe(true);
        });
    });
});