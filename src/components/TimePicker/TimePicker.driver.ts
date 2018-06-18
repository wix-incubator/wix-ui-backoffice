import {timePickerDriverFactory as coreTimePickerDriverFactory} from 'wix-ui-core/dist/src/components/TimePicker/TimePicker.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './ToggleSwitch.st.css';

export const timePickerDriverFactory = ({element, eventTrigger}) => {
    const coreTimePickerDriver = coreTimePickerDriverFactory({element, eventTrigger});

    return {
        ...coreTimePickerDriver,
        getValue: () => coreTimePickerDriver.getValue().slice(0, 5)
    };
};
