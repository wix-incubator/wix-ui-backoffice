import {enumValues} from '../src/utils';
import {TimePicker} from '../src/components/TimePicker/TimePicker';
import {AmPmOptions} from 'wix-ui-core/TimePicker';
import {Skin} from '../src/components/TimePicker/constants';

export default {
    category: 'Components',
    storyName: 'TimePicker',
    component: TimePicker,
    componentPath: '../src/components/TimePicker/TimePicker.tsx',
    componentProps: {
        'data-hook': 'storybook-timepicker',
        error: false,
        disableAmPm: false,
    },
};
